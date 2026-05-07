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
        const MockPlayerOne = {};
        const MockPlayerTwo = {};
        events.listen('turn_started', MockCallback);

        events.emit('setup_completed', {playerOne: MockPlayerOne, playerTwo: MockPlayerTwo});

        expect(MockCallback).toHaveBeenCalled();
    });

    it('emits event:turn_started, specifying it the first/zeroth player\'s turn', () => {
        const MockCallback = jest.fn();
        const MockPlayerOne = {};
        const MockPlayerTwo = {};
        events.listen('turn_started', MockCallback);

        events.emit('setup_completed', {playerOne: MockPlayerOne, playerTwo: MockPlayerTwo});

        expect(MockCallback.mock.calls[0][0].activePlayer).toBe(0);
    });

});