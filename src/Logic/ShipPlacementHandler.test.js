import ShipPlacementHandler from './ShipPlacementHandler.js'

import { eventsConstructor } from '../Events/events.js'

describe('Single ship placement logic', () => {

    let events;

    beforeEach(() => {
        events = eventsConstructor();
        ShipPlacementHandler({events: events});
    });

    describe('on event:ship_placement_initialised', () => {

        describe('player type - computer', () => {

            describe('emits event:ship_placed', () => {

                test('confirm event', () => {
                    const MockCallback = jest.fn();
                    events.listen('ship_placed', MockCallback);

                    events.emit('ship_placement_initialised');

                    expect(MockCallback).toHaveBeenCalled();
                });

                describe('sends the player object recieved with the event', () => {

                    it.each([
                        [1, {type: 'computer', randomData: 'skjrgbrjhgb'}],
                        [2, {type: 'computer', randomData: [3,4,5,'iurht']}]
                    ])('case %i', (_case, MockPlayerObject) => {
                        const MockCallback = jest.fn();
                        events.listen('ship_placed', MockCallback);

                        events.emit('ship_placement_initialised', {playerObj: MockPlayerObject});

                        expect(MockCallback.mock.calls[0][0].playerObj).toEqual(MockPlayerObject);
                    });
                    
                });

                describe('sends random placement for the ship', () => {

                    test.each([
                        [1, 0.25, 2, 0.75, 7, 0.2, 0],
                        [2, 0.95, 9, 0.45, 4, 0.45, 1]
                    ])('case %i', (_case, rand1, x, rand2, y, rand3, o) => {
                        jest.spyOn(global.Math, 'random')
                            .mockImplementationOnce(() => rand1)
                            .mockImplementationOnce(() => rand2)
                            .mockImplementationOnce(() => rand3);
                        
                        const MockPlayerObject = {type: 'computer'}
                        const MockCallback = jest.fn();
                        events.listen('ship_placed', MockCallback);
                        
                        events.emit('ship_placement_initialised', {playerObj: MockPlayerObject});

                        expect(MockCallback.mock.calls[0][0]).toEqual(expect.objectContaining({pos: {x: x, y: y}, orientation: o}))
                    });

                });
                
            });

        });

    });

});