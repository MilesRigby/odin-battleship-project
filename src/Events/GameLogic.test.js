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
                ])('%s, %s', (i1, i2, o1) => {
                    const MockCallback = jest.fn();
                    events.listen('player_ship_placement_required', MockCallback);

                    events.emit('player_types_selected', {playerOneType: i1, playerTwoType: i2});
                    expect(MockCallback).toHaveBeenCalledWith(expect.objectContaining({player: o1, length: expect.any(Number)}));
                });
            });

            // if there are no human players, no manual ship placements are needed
            it('does not emit event:player_ship_placement_required if both players are CPUs', () => {
                const MockCallback = jest.fn();
                events.listen('player_ship_placement_required', MockCallback);

                events.emit('player_types_selected', {playerOneType: 'computer', playerTwoType: 'computer'});
                expect(MockCallback).not.toHaveBeenCalled();
            });

            describe('emits event:board_state_changed a number of times equal to the number of CPUs', () => {
                it.each([
                    ['real', 'real', 0],
                    ['real', 'computer', 1],
                    ['computer', 'computer', 2]
                ])('%s, %s', (i1, i2, calls) => {
                    const MockCallback = jest.fn();
                    events.listen('board_state_changed', MockCallback);

                    events.emit('player_types_selected', {playerOneType: i1, playerTwoType: i2});
                    expect(MockCallback).toHaveBeenCalledTimes(calls);
                });
            });

            describe('emits event:board_state_changed, conveying which board was changed', () => {
                it('real, computer', () => {
                    const MockCallback = jest.fn();
                    events.listen('board_state_changed', MockCallback);

                    events.emit('player_types_selected', {playerOneType: 'real', playerTwoType: 'computer'});
                    expect(MockCallback).toHaveBeenCalledWith(expect.objectContaining({board: 2}));
                });

                it('computer, computer', () => {
                    const MockCallback = jest.fn();
                    events.listen('board_state_changed', MockCallback);

                    events.emit('player_types_selected', {playerOneType: 'computer', playerTwoType: 'computer'});
                    expect(MockCallback.mock.calls[0]).toEqual([ expect.objectContaining({board: 1}) ]);
                    expect(MockCallback.mock.calls[1]).toEqual([ expect.objectContaining({board: 2}) ]);
                });
            });

        });

    });

});