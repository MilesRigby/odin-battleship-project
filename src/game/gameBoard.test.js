import GameBoard from './gameBoard.js';

describe('Game Board object', () => {

    // Test object
    let gameBoard;

    beforeEach(() => {
        gameBoard = GameBoard();
    })

    it('is an object', () => {
        expect(gameBoard).toEqual(expect.any(Object));
    });

    it('has a function getBoardState', () => {
        expect(gameBoard.getBoardState).toEqual(expect.any(Function));
    });

    it('has a function addShip', () => {
        expect(gameBoard.addShip).toEqual(expect.any(Function));
    })

    it('has a function receiveAttack', () => {
        expect(gameBoard.receiveAttack).toEqual(expect.any(Function));
    });

    it('initialises game board as empty by marking with 0', () => {
        const state = gameBoard.getBoardState();
        expect(state[0][9]).toBe(0);
        expect(state[5][9]).toBe(0);
        expect(state[9][9]).toBe(0);
    });

    describe('getBoardState()', () => {

        it('returns an array', () => {
            expect(gameBoard.getBoardState()).toEqual(expect.any(Array));
        });

        it('returns a 10*10 grid', () => {
            const state = gameBoard.getBoardState();
            expect(state[0][9]).toEqual(expect.anything());
            expect(state[5][9]).toEqual(expect.anything());
            expect(state[9][9]).toEqual(expect.anything());
        });

    });

    describe('addShip()', () => {

        it('adds a positive number representing a ship to a specified position', () => {
            gameBoard.addShip({x: 7, y: 3});
            state = gameBoard.getBoardState();
            expect(state[7][3]).toEqual(expect.any(Number));
            expect(state[7][3]).toBeGreaterThan(0);
        });

        it('adds numbers for ships in integer order starting at 1, 2, 3... to specified positions', () => {
            gameBoard.addShip({x: 7, y: 3});
            gameBoard.addShip({x: 3, y: 3});
            gameBoard.addShip({x: 5, y: 9});
            state = gameBoard.getBoardState();

            expect(state[7][3]).toBe(1);
            expect(state[3][3]).toBe(2);
            expect(state[5][9]).toBe(3);
        });

        it('returns true if position is not already occupied', () => {
            expect(gameBoard.addShip({x: 7, y: 3})).toBe(true);
        });

        it('returns false if position is already occupied', () => {
            gameBoard.addShip({x: 3, y: 3});
            expect(gameBoard.addShip({x: 3, y: 3})).toBe(false);
        });

        it('does not change the value at an occupied position', () => {
            gameBoard.addShip({x: 7, y: 1});
            gameBoard.addShip({x: 7, y: 1});
            state = gameBoard.getBoardState();

            expect(state[7][1]).toBe(1);
        });

        it('does not increment the ship number after a failed placement', () => {
            gameBoard.addShip({x: 7, y: 1});
            gameBoard.addShip({x: 7, y: 1});
            gameBoard.addShip({x: 6, y: 3});
            state = gameBoard.getBoardState();

            expect(state[6][3]).toBe(2);
        });

        it('creates ships of a specified length, facing north (+ve y) by default', () => {
            gameBoard.addShip({x: 9, y: 4}, 5);
            gameBoard.addShip({x: 4, y: 6}, 2);
            state = gameBoard.getBoardState();

            expect(state[9][4]).toBe(1);
            expect(state[9][5]).toBe(1);
            expect(state[9][6]).toBe(1);
            expect(state[9][7]).toBe(1);
            expect(state[9][8]).toBe(1);
            expect(state[9][9]).toBe(0);

            expect(state[4][6]).toBe(2);
            expect(state[4][7]).toBe(2);
            expect(state[4][8]).toBe(0);

        });

        it('rejects overlapped placements of long ships with different starting points', () => {
            gameBoard.addShip({x: 7, y: 4}, 5);

            expect(gameBoard.addShip({x: 7, y: 2}, 4)).toBe(false);

            state = gameBoard.getBoardState();

            expect(state[7][2]).toBe(0);
        });

        it('can place ships in four orientations - north (0), east (1), south (2), west (3)', () => {
            gameBoard.addShip({x: 4, y: 4}, 2, 0);
            gameBoard.addShip({x: 7, y: 4}, 2, 1);
            gameBoard.addShip({x: 1, y: 2}, 2, 2);
            gameBoard.addShip({x: 8, y: 7}, 2, 3);
            state = gameBoard.getBoardState();

            expect(state[4][5]).toBe(1);
            expect(state[8][4]).toBe(2);
            expect(state[1][1]).toBe(3);
            expect(state[7][7]).toBe(4);
        });

        it('can detect collisions between ships at different orientations', () => {
            gameBoard.addShip({x: 4, y: 4}, 5, 0);
            expect(gameBoard.addShip({x: 2, y: 7}, 5, 1)).toBe(false);
            expect(gameBoard.addShip({x: 4, y: 9}, 2, 2)).toBe(false);
        });

        it('does not place ships that would extend past the board edge', () => {
            expect(gameBoard.addShip({x: 4, y: 7}, 5, 0)).toBe(false);
            expect(gameBoard.addShip({x: 2, y: 7}, 5, 3)).toBe(false);
            expect(gameBoard.addShip({x: 9, y: 9}, 2, 1)).toBe(false);
        });

    });

    describe('receiveAttack()', () => {

        it('changes empty spaces (0) to missed spaces (-1) when targeted', () => {
            gameBoard.receiveAttack({x: 4, y: 7});
            gameBoard.receiveAttack({x: 9, y: 2});
            state = gameBoard.getBoardState();

            expect(state[4][7]).toBe(-1);
            expect(state[9][2]).toBe(-1);
        });

        it('does nothing to untargeted empty spaces', () => {
            gameBoard.receiveAttack({x: 2, y: 5});
            gameBoard.receiveAttack({x: 7, y: 2});
            state = gameBoard.getBoardState();

            expect(state[4][9]).toBe(0);
            expect(state[6][2]).toBe(0);
        });

        it('returns true when targeting an empty space', () => {
            expect(gameBoard.receiveAttack({x: 1, y: 0})).toBe(true);
            expect(gameBoard.receiveAttack({x: 8, y: 9})).toBe(true);
        });

        it('does nothing to previously missed spaces', () => {
            gameBoard.receiveAttack({x: 7, y: 4});
            gameBoard.receiveAttack({x: 7, y: 4});
            gameBoard.receiveAttack({x: 8, y: 9});
            gameBoard.receiveAttack({x: 8, y: 9});
            state = gameBoard.getBoardState();

            expect(state[7][4]).toBe(-1);
            expect(state[8][9]).toBe(-1);
        });

        it('returns false when targeting a previously missed space', () => {
            gameBoard.receiveAttack({x: 7, y: 4});
            gameBoard.receiveAttack({x: 3, y: 2});

            expect(gameBoard.receiveAttack({x: 7, y: 4})).toBe(false);
            expect(gameBoard.receiveAttack({x: 3, y: 2})).toBe(false);
        });

        it('changes targeted ship spaces (1+) to hit spaces (-2)', () => {
            gameBoard.addShip({x: 4, y: 5}, 3, 2)
            gameBoard.receiveAttack({x: 4, y: 3});
            gameBoard.receiveAttack({x: 4, y: 5});
            state = gameBoard.getBoardState();

            expect(state[4][3]).toBe(-2);
            expect(state[4][5]).toBe(-2);
        });

        it('does nothing to untargeted ship spaces', () => {
            gameBoard.addShip({x: 7, y: 4}, 4, 3)
            gameBoard.receiveAttack({x: 7, y: 4});
            gameBoard.receiveAttack({x: 5, y: 4});
            state = gameBoard.getBoardState();

            expect(state[6][4]).toBe(1);
            expect(state[4][4]).toBe(1);
        });

        it('does nothing to previously hit spaces', () => {
            gameBoard.addShip({x: 8, y: 4}, 2, 3);
            gameBoard.receiveAttack({x: 7, y: 4});
            gameBoard.receiveAttack({x: 7, y: 4});
            gameBoard.receiveAttack({x: 8, y: 4});
            gameBoard.receiveAttack({x: 8, y: 4});
            state = gameBoard.getBoardState();

            expect(state[7][4]).toBe(-2);
            expect(state[8][4]).toBe(-2);
        });

        it('returns false when targeting a previously hit space', () => {
            gameBoard.addShip({x: 7, y: 4}, 4, 3)
            gameBoard.receiveAttack({x: 7, y: 4});
            gameBoard.receiveAttack({x: 5, y: 4});

            expect(gameBoard.receiveAttack({x: 7, y: 4})).toBe(false);
            expect(gameBoard.receiveAttack({x: 5, y: 4})).toBe(false)
        });

        it('calls hit() on a ship corresponding to the ship number, 1, 2, 3..., of the space targeted', () => {
            const MockShip = jest.fn(() => ({ hit: jest.fn() }));

            gameBoard = GameBoard(MockShip);
            gameBoard.addShip({x: 2, y: 7}, 4, 2);
            gameBoard.addShip({x: 5, y: 3}, 3, 1);
            gameBoard.receiveAttack({x: 2, y: 6});
            gameBoard.receiveAttack({x: 2, y: 4});
            gameBoard.receiveAttack({x: 2, y: 7});
            gameBoard.receiveAttack({x: 5, y: 3});
            gameBoard.receiveAttack({x: 6, y: 3});

            expect(MockShip.mock.results[0].value.hit).toHaveBeenCalledTimes(3);
            expect(MockShip.mock.results[1].value.hit).toHaveBeenCalledTimes(2);
        });
    });

});