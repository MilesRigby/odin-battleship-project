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

    it('initialises game board as empty', () => {
        const state = gameBoard.getBoardState();
        expect(state[0][9]).toBe('empty');
        expect(state[5][9]).toBe('empty');
        expect(state[9][9]).toBe('empty');
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

        it('adds a number representing a ship to a specified position', () => {
            gameBoard.addShip({x: 7, y: 3});
            state = gameBoard.getBoardState();
            expect(state[7][3]).toEqual(expect.any(Number));
        });

    });

    describe('receiveAttack()', () => {

        it('changes "empty" spaces to "miss" when targeted', () => {
            gameBoard.receiveAttack({x: 4, y: 7});
            gameBoard.receiveAttack({x: 9, y: 2});
            state = gameBoard.getBoardState();

            expect(state[4][7]).toBe('miss');
            expect(state[9][2]).toBe('miss');
        });

        it('does nothing to untargeted empty spaces', () => {
            gameBoard.receiveAttack({x: 2, y: 5});
            gameBoard.receiveAttack({x: 7, y: 2});
            state = gameBoard.getBoardState();

            expect(state[4][9]).toBe('empty');
            expect(state[6][2]).toBe('empty');
        });

        it('returns true when targeting an empty space', () => {
            expect(gameBoard.receiveAttack({x: 1, y: 0})).toBe(true);
            expect(gameBoard.receiveAttack({x: 8, y: 9})).toBe(true);
        });

        it('returns false when targeting a previously missed space', () => {
            gameBoard.receiveAttack({x: 7, y: 4});
            gameBoard.receiveAttack({x: 3, y: 2});

            expect(gameBoard.receiveAttack({x: 7, y: 4})).toBe(false);
            expect(gameBoard.receiveAttack({x: 3, y: 2})).toBe(false);
        });
        
    });

});