import GameLogic from "./GameLogic.js";

import { eventsConstructor } from "../Events/events.js";


describe('Game logic handler', () => {

    let events;

    beforeEach(() => {
        events = eventsConstructor();
        GameLogic(events);
    });

    it('emits event:turn_started on setup_completed', () => {
        const MockCallback = jest.fn();
        events.listen('turn_started', MockCallback);

        events.emit('setup_completed');

        expect(MockCallback).toHaveBeenCalled();
    });

});