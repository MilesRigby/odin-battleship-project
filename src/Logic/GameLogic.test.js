import GameLogic from "./GameLogic.js";

import { eventsConstructor } from "../Events/events.js";


describe('Game logic handler', () => {

    let events;

    beforeEach(() => {
        events = eventsConstructor();
        GameLogic(events);
    });

    describe('on event:setup_completed', () => {

        let MockCallback;

        beforeEach(() => {
            MockCallback = jest.fn();
            events.listen('turn_started', MockCallback);

            events.emit('setup_completed');
        });

        it('emits event:turn_started', () => {
            expect(MockCallback).toHaveBeenCalled();
        });

        it('emits event:turn_started, specifying it\'s the first/zeroth player\'s turn', () => {
            expect(MockCallback.mock.calls[0][0].activePlayer).toBe(0);
        });

    });

});