import { GameLogic } from "./GameLogic.js";

import { eventsConstructor } from "./events.js";


describe('Game logic handler', () => {

    let MockEvents;

    describe('behaviour on startup (triggered immediately on construction)', () => {

        it('is a function', () => {
            expect(GameLogic).toEqual(expect.any(Function));
        });

        it('emits a game_started event', () => {
            const MockCallback = jest.fn();
            MockEvents = eventsConstructor();
            MockEvents.listen('game_started', MockCallback);

            GameLogic({events: MockEvents});
            expect(MockCallback).toHaveBeenCalled();
        });

    });

    describe('behaviour when initialised, and of features not dependant on state', () => {

        /*beforeEach(() => {
            MockEvents = eventsConstructor();
            GameLogic(MockEvents);
        });*/

        

    });

    describe('behaviour during runtime (features dependant on a non-initial state)', () => {

    });

});