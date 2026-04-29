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

    it('doesn\'t break if an emitted event has no listeners', () => {
        expect(() => { events.emit('eventOne') }).not.toThrow();
    });

    it('only calls a registered callback if a matching name is passed to emit()', () => {
        const MockCallback = jest.fn();
        events.listen('eventName', MockCallback);
        events.emit('wrongName');
        expect(MockCallback).not.toHaveBeenCalled();
    });

    it('can store multiple callbacks BY name', () => {
        const MockCallbackOne = jest.fn();
        const MockCallbackTwo = jest.fn();
        events.listen('eventOne', MockCallbackOne);
        events.listen('eventTwo', MockCallbackTwo);
        events.emit('eventOne');
        events.emit('eventTwo');
        expect(MockCallbackOne).toHaveBeenCalled();
        expect(MockCallbackTwo).toHaveBeenCalled();
    });

    it('can store multiple callbacks PER name, calling each on an emit', () => {
        const MockCallbackOne = jest.fn();
        const MockCallbackTwo = jest.fn();
        events.listen('eventOne', MockCallbackOne);
        events.listen('eventOne', MockCallbackTwo);
        events.emit('eventOne');
        expect(MockCallbackOne).toHaveBeenCalled();
        expect(MockCallbackTwo).toHaveBeenCalled();
    });

    it('passes data to listening callbacks from an emitted event', () => {
        const MockCallback = jest.fn();
        const MockData = { item1: "string", item2: 76, item3: {nest: "hello"} }
        events.listen('eventName', MockCallback);
        events.emit('eventName', MockData);
        expect(MockCallback).toHaveBeenCalledWith(MockData);
    });

});