import TurnHandler from './TurnHandler.js'

import { eventsConstructor } from '../Events/events.js'

describe('Single turn logic', () => {

    let events;

    beforeEach(() => {
        events = eventsConstructor();
        TurnHandler({events: events});
    });

    describe('on event:turn_started', () => {

        describe('player type: computer', () => {

            let MockPlayerObject;

            beforeEach(() => {
                MockPlayerObject = {board: {receiveAttack: jest.fn()}}
            });

            describe('calls receiveAttack on player gameboard', () => {

                test('confirm call', () => {
                    events.emit('turn_started', {playerObj: MockPlayerObject});

                    expect(MockPlayerObject.board.receiveAttack).toHaveBeenCalled();
                });

                //it('calls until addShip returns true (succesful ship placement)', () => {
                //    MockPlayerObject.addShip.mockImplementationOnce(() => false)
                //});

            });

        });

    });



});