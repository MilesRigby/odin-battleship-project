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
                test.each([
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
                test.each([
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

            describe('emits event:board_state_changed for CPUs, conveying which board was changed', () => {
                test('real, computer', () => {
                    const MockCallback = jest.fn();
                    events.listen('board_state_changed', MockCallback);

                    events.emit('player_types_selected', {playerOneType: 'real', playerTwoType: 'computer'});
                    expect(MockCallback).toHaveBeenCalledWith(expect.objectContaining({board: 2}));
                });

                test('computer, computer', () => {
                    const MockCallback = jest.fn();
                    events.listen('board_state_changed', MockCallback);

                    events.emit('player_types_selected', {playerOneType: 'computer', playerTwoType: 'computer'});
                    expect(MockCallback.mock.calls[0][0]).toEqual(expect.objectContaining({board: 1}));
                    expect(MockCallback.mock.calls[1][0]).toEqual(expect.objectContaining({board: 2}));
                });
            });

            // These tests are large, difficult to read diffs for, and crash the entire test suite unless another test in the suite also fails (no idea)
            // I unfortunately don't know a better way of doing this.
            describe('emits event:board_state_changed with a 10*10 board state produced using randomness', () => {
                test('case 1', () => {
                    const MockCallback = jest.fn();
                    events.listen('board_state_changed', MockCallback);

                    const boardOneExpected = [
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 1, 0, 2, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 1, 0, 2, 0, 0, 3, 0, 0, 0 ],
                        [ 0, 0, 0, 2, 0, 0, 3, 0, 0, 0 ],
                        [ 0, 0, 5, 0, 0, 0, 3, 0, 0, 0 ],
                        [ 0, 0, 5, 0, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 5, 0, 0, 4, 4, 4, 4, 0 ],
                        [ 0, 0, 5, 0, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 5, 0, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                    ];

                    const boardTwoExpected = [
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 4, 4, 4, 4, 0, 0, 5, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 5, 0 ],
                        [ 0, 0, 0, 1, 1, 0, 2, 0, 5, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 2, 0, 5, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 2, 0, 5, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 3, 3, 3, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                    ];

                    // for 10 ships - x, y (0-9), and orientation (0-3)
                    // Math.random gives 0-1, so 0-9 is 0.05-0.95, and 0-3 is 0.2-0.95, each in equal increments.
                    const deterministicValues = [
                        0.15, 0.15, 0.45,
                        0.15, 0.35, 0.45,
                        0.25, 0.65, 0.45,
                        0.65, 0.55, 0.2,
                        0.85, 0.25, 0.95,
                        0.45, 0.35, 0.2,
                        0.45, 0.65, 0.45,
                        0.85, 0.65, 0.7,
                        0.25, 0.25, 0.2,
                        0.25, 0.85, 0.45
                    ];

                    let v = 0;
                    jest.spyOn(Math, 'random').mockImplementation(() => deterministicValues[v++]);

                    events.emit('player_types_selected', {playerOneType: 'computer', playerTwoType: 'computer'});
                    expect(MockCallback.mock.calls[0][0].state).toEqual(boardOneExpected);
                    expect(MockCallback.mock.calls[1][0].state).toEqual(boardTwoExpected);
                });

                test('case 2', () => {
                    const MockCallback = jest.fn();
                    events.listen('board_state_changed', MockCallback);

                    const boardOneExpected = [
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 2, 0, 0, 0, 0, 0 ],
                        [ 0, 1, 0, 0, 2, 0, 3, 3, 3, 0 ],
                        [ 0, 1, 0, 0, 2, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 5, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 5, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 5, 4, 4, 4, 4, 0, 0 ],
                        [ 0, 0, 0, 5, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 5, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                    ];

                    const boardTwoExpected = [
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 4, 4, 4, 4, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 5, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 2, 5, 0, 0 ],
                        [ 0, 0, 1, 1, 0, 0, 2, 5, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 2, 5, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 5, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 3, 3, 3, 0, 0, 0 ],
                        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
                    ];

                    // for 10 ships - x, y (0-9), and orientation (0-3)
                    // Math.random gives 0-1, so 0-9 is 0.05-0.95, and 0-3 is 0.2-0.95, each in equal increments.
                    const deterministicValues = [
                        0.25, 0.15, 0.45,
                        0.15, 0.45, 0.45,
                        0.25, 0.65, 0.2,
                        0.65, 0.45, 0.2,
                        0.85, 0.35, 0.95,
                        0.45, 0.35, 0.7,
                        0.35, 0.65, 0.45,
                        0.85, 0.65, 0.7,
                        0.15, 0.25, 0.2,
                        0.25, 0.75, 0.45
                    ];

                    let v = 0;
                    jest.spyOn(Math, 'random').mockImplementation(() => deterministicValues[v++])

                    events.emit('player_types_selected', {playerOneType: 'computer', playerTwoType: 'computer'});
                    expect(MockCallback.mock.calls[0][0].state).toEqual(boardOneExpected);
                    expect(MockCallback.mock.calls[1][0].state).toEqual(boardTwoExpected);
                });
            });

        });



        //



    });

});