import GameLogic from "./GameLogic.js";

import { eventsConstructor } from "./events.js";


describe('Game logic handler', () => {

    let events;

    describe('behaviour on startup (triggered immediately on construction)', () => {

        it('is a function', () => {
            expect(GameLogic).toEqual(expect.any(Function));
        });

        it('emits a game_started event', () => {
            const MockCallback = jest.fn();
            events = eventsConstructor();
            events.listen('game_started', MockCallback);

            GameLogic(events);
            expect(MockCallback).toHaveBeenCalled();
        });

    });

    describe('behaviour when initialised, and of features not dependant on state', () => {

        /*beforeEach(() => {
            events = eventsConstructor();
            GameLogic(events);
        });

        it()*/

    });

    describe('behaviour during runtime (features dependant on a non-initial state)', () => {

    });

});