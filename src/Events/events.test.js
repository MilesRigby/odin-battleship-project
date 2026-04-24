import { eventsConstructor } from "./events.js";

describe('Events system', () => {

    let events;

    beforeEach(() => {
        events = eventsConstructor();
    });

    it('is an object', () => {
        expect(events).toEqual(expect.any(Object));
    })

});