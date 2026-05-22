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

        let MockCallbacks;
        let MockPlayerObjectOne;
        let MockPlayerObjectTwo;
        let MockBoardObjects;

        describe('player type: computer', () => {

            beforeEach(() => {
                MockBoardObjects = [{}, {}];
                MockCallbacks = [jest.fn().mockReturnValue(true), jest.fn().mockReturnValue(true)];
                MockPlayerObjectOne = {type: 'computer', board: {receiveAttack: MockCallbacks[0], getBoardState: () => MockBoardObjects[0]}};
                MockPlayerObjectTwo = {type: 'computer', board: {receiveAttack: MockCallbacks[1], getBoardState: () => MockBoardObjects[1]}};

                events.emit('player_objects_created', {playerOne: MockPlayerObjectOne, playerTwo: MockPlayerObjectTwo});
            });

            describe('calls receiveAttack on opposing player gameboard', () => {

                test.each([[0, 1], [1, 0]])('confirm call, player %i', (playerTurn, targetNo) => {
                    events.emit('turn_started', {playerNo: playerTurn});

                    expect(MockCallbacks[targetNo]).toHaveBeenCalled();
                });

                describe('calls with random coordinates', () => {

                    test.each([
                        [1, 0.15, 1, 0.75, 7],
                        [2, 0.35, 3, 0.55, 5]
                    ])('case %i', (_case, rand1, x, rand2, y) => {
                        jest.spyOn(global.Math, 'random')
                            .mockImplementationOnce(() => rand1)
                            .mockImplementationOnce(() => rand2);

                        events.emit('turn_started', {playerNo: 0});

                        expect(MockCallbacks[1].mock.calls[0][0]).toEqual({x: x, y: y});
                    });

                });

                describe('tries until receiveAttack returns true (successful attack)', () => {

                    test.each([
                        [1, 3],
                        [2, 7]
                    ])('case %i', (_case, finalCallNo) => {
                        for (let i = 0; i < finalCallNo - 1; i++) MockCallbacks[1].mockImplementationOnce(() => false);

                        events.emit('turn_started', {playerNo: 0});

                        expect(MockCallbacks[1].mock.calls.length).toEqual(finalCallNo);
                    });

                });

            });

            describe('emits event:board_state_changed for enemy player', () => {

                let MockCallback;

                beforeEach(() => {
                    events.emit('player_objects_created', {playerOne: MockPlayerObjectOne, playerTwo: MockPlayerObjectTwo});

                    MockCallback = jest.fn();
                    events.listen('board_state_changed', MockCallback);
                });

                test('confirm emit', () => {
                    events.emit('turn_started', {playerNo: 0});

                    expect(MockCallback).toHaveBeenCalled();
                });

                it('sends the game board of the opponent', () => {
                    events.emit('turn_started', {playerNo: 0});

                    expect(MockCallback.mock.calls[0][0].boardState).toBe(MockBoardObjects[1]);
                });

            });

        });

        describe('player type: real', () => {

            beforeEach(() => {
                MockCallbacks = [jest.fn().mockReturnValue(true), jest.fn().mockReturnValue(true)];
                MockPlayerObjectOne = {type: 'real', board: {receiveAttack: MockCallbacks[0]}};
                MockPlayerObjectTwo = {type: 'real', board: {receiveAttack: MockCallbacks[1]}};

                events.emit('player_objects_created', {playerOne: MockPlayerObjectOne, playerTwo: MockPlayerObjectTwo});
            });

            it('does not call receiveAttack', () => {
                events.emit('turn_started', {playerNo: 0});

                expect(MockCallbacks[1]).not.toHaveBeenCalled();
            });

        });

    });

    //describe('on event:space_clicked', () => {



    //});

});