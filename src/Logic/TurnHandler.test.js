import TurnHandler from './TurnHandler.js'

import { eventsConstructor } from '../Events/events.js'
import { isWebTarget } from 'webpack-dev-server';

describe('Single turn logic', () => {

    let events;

    beforeEach(() => {
        events = eventsConstructor();
        TurnHandler({events: events});
    });

    describe('on event:turn_started', () => {

        describe('player type: computer', () => {

            let MockCallback;
            let MockPlayerObject;

            beforeEach(() => {
                MockCallback = jest.fn().mockReturnValue(true);
                MockPlayerObject = {board: {receiveAttack: MockCallback}}
            });

            describe('calls receiveAttack on player gameboard', () => {

                test('confirm call', () => {
                    events.emit('turn_started', {playerObj: MockPlayerObject});

                    expect(MockCallback).toHaveBeenCalled();
                });

                describe('calls with random coordinates', () => {

                    test.each([
                        [1, 0.15, 1, 0.75, 7],
                        [2, 0.35, 3, 0.55, 5]
                    ])('case %i', (_case, rand1, x, rand2, y) => {
                        jest.spyOn(global.Math, 'random')
                            .mockImplementationOnce(() => rand1)
                            .mockImplementationOnce(() => rand2);

                        events.emit('turn_started', {playerObj: MockPlayerObject});

                        expect(MockCallback.mock.calls[0][0]).toEqual({x: x, y: y});
                    });

                });

                describe('tries until receiveAttack returns true (successful attack)', () => {

                    test.each([
                        [1, 3],
                        [2, 7]
                    ])('case %i', (_case, finalCallNo) => {
                        for (let i = 0; i < finalCallNo - 1; i++) MockCallback.mockImplementationOnce(() => false);

                        events.emit('turn_started', {playerObj: MockPlayerObject});

                        expect(MockCallback.mock.calls.length).toEqual(finalCallNo);
                    });

                });

            });

        });

    });



});