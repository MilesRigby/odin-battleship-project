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
                MockPlayerObject = {addShip: jest.fn()}
            });

            describe('calls addShip on player object', () => {

                test('confirm call', () => {
                    events.emit('turn_started', {playerObj: MockPlayerObject});

                    expect(MockPlayerObject.addShip).toHaveBeenCalled();
                });

            });

        });

    });



});