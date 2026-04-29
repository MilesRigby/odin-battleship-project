import { eventsConstructor } from "./events.js";

describe('Events system', () => {

    let events;

    beforeEach(() => {
        events = eventsConstructor();
    });

    it('is an object', () => {
        expect(events).toEqual(expect.any(Object));
    });

    it('has a function listen', () => {
        expect(events.listen).toEqual(expect.any(Function));
    });

    it('has a function emit', () => {
        expect(events.emit).toEqual(expect.any(Function));
    });

    it('calls a callback registered with listen() on emit()', () => {
        const MockCallback = jest.fn();
        events.listen('eventName', MockCallback);
        events.emit('eventName');
        expect(MockCallback).toHaveBeenCalled();
    });

});