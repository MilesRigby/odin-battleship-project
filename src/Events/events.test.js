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

});