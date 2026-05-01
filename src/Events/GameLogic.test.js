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

    describe('behaviour during runtime', () => {

        beforeEach(() => {
            events = eventsConstructor();
            GameLogic(events);
        });

        describe('on event:player_types_selected', () => {

            // Order in which the ship lengths 2, 3, 3, 4, and 5 are asked for is an implementation detail
            describe('emits event:player_ship_placement_required if one or both players are human, specifying a ship length and the first player if there are two humans', () => {

                it.each([
                    ['real', 'computer', ''],
                    ['computer', 'real', ''],
                    ['real', 'real', 'Player 1']
                ])('%s, %s', (p1, p2, o1) => {
                    const MockCallback = jest.fn();
                    events.listen('player_ship_placement_required', MockCallback);

                    events.emit('player_types_selected', {playerOneType: p1, playerTwoType: p2});
                    expect(MockCallback).toHaveBeenCalledWith(expect.objectContaining({player: o1, length: expect.any(Number)}));
                });

            });

        });

    });

});