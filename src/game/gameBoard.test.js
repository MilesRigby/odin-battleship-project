import GameBoard from './gameBoard.js';

describe('Game Board object', () => {

    // Test object
    let gameBoard = GameBoard();

    it('is an object', () => {
        expect(gameBoard).toEqual(expect.any(Object));
    });

    it('has a function getBoardState', () => {
        expect(gameBoard.getBoardState).toEqual(expect.any(Function));
    })

});