import GameBoard from './gameBoard.js';

describe('Game Board object', () => {

    // Test object
    let gameBoard = GameBoard();

    it('is an object', () => {
        expect(gameBoard).toEqual(expect.any(Object));
    });

    it('has a function getBoardState', () => {
        expect(gameBoard.getBoardState).toEqual(expect.any(Function));
    });

    it('has a function receiveAttack', () => {
        expect(gameBoard.receiveAttack).toEqual(expect.any(Function));
    });

    it('returns an array from getBoardState', () => {
        expect(gameBoard.getBoardState()).toEqual(expect.any(Array));
    });

    it('returns a 10*10 grid from getBoardState', () => {
        const state = gameBoard.getBoardState();
        expect(state[0][9]).toEqual(expect.anything());
        expect(state[5][9]).toEqual(expect.anything());
        expect(state[9][9]).toEqual(expect.anything());
    });

    it('initialises game board as empty', () => {
        const board = GameBoard();
        const state = gameBoard.getBoardState();
        expect(state[0][9]).toBe('empty');
        expect(state[5][9]).toBe('empty');
        expect(state[9][9]).toBe('empty');
    });

});