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

    it('does not immediately invoke a callback on passing to listen()', () => {
        const MockCallback = jest.fn();
        events.listen('eventName', MockCallback);
        expect(MockCallback).not.toHaveBeenCalled();
    });

    it('calls a callback registered with listen() on emit()', () => {
        const MockCallback = jest.fn();
        events.listen('eventName', MockCallback);
        events.emit('eventName');
        expect(MockCallback).toHaveBeenCalled();
    });

    it('only calls a registered callback if a matching name is passed to emit()', () => {
        const MockCallback = jest.fn();
        events.listen('eventName', MockCallback);
        events.emit('wrongName');
        expect(MockCallback).not.toHaveBeenCalled();
    });

    it('can store multiple callbacks by name', () => {
        const MockCallbackOne = jest.fn();
        const MockCallbackTwo = jest.fn();
        events.listen('eventOne', MockCallbackOne);
        events.listen('eventTwo', MockCallbackTwo);
        events.emit('eventOne');
        events.emit('eventTwo');
        expect(MockCallbackOne).toHaveBeenCalled();
        expect(MockCallbackTwo).toHaveBeenCalled();
    });

});