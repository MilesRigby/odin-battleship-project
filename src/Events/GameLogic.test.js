import { GameLogic } from "./GameLogic.js";

import { eventsConstructor } from "./events.js";


describe('Game logic handler', () => {

    let GameLogicHandler;

    describe('behaviour when initialised, and of features not dependant on state', () => {

        beforeEach(() => {
            GameLogicHandler = GameLogic(eventsConstructor());
        });

        it('is an object', () => {
            expect(GameLogic()).toEqual(expect.any(Object));
        });

    });

    describe('behaviour during runtime (features dependant on a non-initial state)', () => {

    });

});