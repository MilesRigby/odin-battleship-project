import ShipPlacementHandler from './ShipPlacementHandler.js'

import { eventsConstructor } from '../Events/events.js'

describe('Single ship placement logic', () => {

    let events;

    beforeEach(() => {
        events = eventsConstructor();
        ShipPlacementHandler({events: events});
    });

    describe('on event:ship_placement_initialised', () => {

        let MockPlayerObject;

        describe('player type - computer', () => {

            beforeEach(() => {
                MockPlayerObject = {type: 'computer'}
            });

            describe('emits event:ship_placed', () => {

                test('confirm event', () => {
                    const MockCallback = jest.fn();
                    events.listen('ship_placed', MockCallback);

                    events.emit('ship_placement_initialised');

                    expect(MockCallback).toHaveBeenCalled();
                });
                
            });

        });

    });

});