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

                beforeAll(() => jest.useFakeTimers());
                afterAll(() => jest.useRealTimers());

                let MockCallback;

                beforeEach(() => {
                    MockCallback = jest.fn();
                    events.listen('ship_placed', MockCallback);
                });

                test('delayed by 1 second', () => {
                    const MockPlayerObject = {type: 'computer'}

                    events.emit('ship_placement_initialised', {playerObj: MockPlayerObject});

                    jest.advanceTimersByTime(999);
                    expect(MockCallback).not.toHaveBeenCalled();
                    jest.advanceTimersByTime(1);
                    expect(MockCallback).toHaveBeenCalled();
                });

                test('confirm event', () => {
                    const MockPlayerObject = {type: 'computer'}

                    events.emit('ship_placement_initialised', {playerObj: MockPlayerObject});
                    jest.advanceTimersByTime(1000);

                    expect(MockCallback).toHaveBeenCalled();
                });

                it('sends the player object recieved with the event', () => {
                    const MockPlayerObject = {type: 'computer'}

                    events.emit('ship_placement_initialised', {playerObj: MockPlayerObject});
                    jest.advanceTimersByTime(1000);

                    expect(MockCallback.mock.calls[0][0].playerObj).toBe(MockPlayerObject);
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
                        
                        events.emit('ship_placement_initialised', {playerObj: MockPlayerObject});
                        jest.advanceTimersByTime(1000);

                        expect(MockCallback.mock.calls[0][0]).toEqual(expect.objectContaining({pos: {x: x, y: y}, orientation: o}))
                    });

                });

                describe('send ship length receieved from initialisation', () => {

                    test.each([
                        [1, 4],
                        [2, 5],
                        [3, 2]
                    ])('case %i', (_case, shipLength) => {
                        const MockPlayerObject = {type: 'computer'}

                        events.emit('ship_placement_initialised', {playerObj: MockPlayerObject, length: shipLength});
                        jest.advanceTimersByTime(1000);

                        expect(MockCallback.mock.calls[0][0].length).toBe(shipLength);
                    });

                });
                
            });

            it('does not emit event:player_ship_placement_initialised', () => {
                const MockCallback = jest.fn();
                const MockPlayerObject = {type: 'computer'}
                events.listen('player_ship_placement_initialised', MockCallback);

                events.emit('ship_placement_initialised', {playerObj: MockPlayerObject});

                expect(MockCallback).not.toHaveBeenCalled();
            });

        });

        describe('player type - real', () => {

            describe('emits event:player_ship_placement_initialised', () => {

                let MockCallback;

                beforeEach(() => {
                    MockCallback = jest.fn();
                    events.listen('player_ship_placement_initialised', MockCallback);
                });

                test('confirm call', () => {
                    const MockPlayerObject = {type: 'real'}

                    events.emit('ship_placement_initialised', {playerObj: MockPlayerObject});

                    expect(MockCallback).toHaveBeenCalled();
                });

                it('sends the player object', () => {
                    const MockPlayerObject = {type: 'real'}

                    events.emit('ship_placement_initialised', {playerObj: MockPlayerObject});

                    expect(MockCallback.mock.calls[0][0].playerObj).toBe(MockPlayerObject);
                });

                describe('sends the length of the ship to be placed', () => {

                    test.each([
                        [3],
                        [1],
                        [5]
                    ])('length: %i', (length) => {
                        events.emit('ship_placement_initialised', {length: length});

                        expect(MockCallback.mock.calls[0][0].length).toBe(length);
                    });

                });

            });

            it('does not emit event:ship_placed', () => {
                jest.useFakeTimers();

                const MockCallback = jest.fn();
                const MockPlayerObject = {type: 'real'}
                events.listen('ship_placed', MockCallback);

                events.emit('ship_placement_initialised', {playerObj: MockPlayerObject});

                jest.advanceTimersByTime(1000);
                expect(MockCallback).not.toHaveBeenCalled();

                jest.useRealTimers();
            });

        });

    });

});