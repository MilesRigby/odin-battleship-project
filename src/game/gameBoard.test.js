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

    it('returns an array from getBoardState', () => {
        expect(gameBoard.getBoardState()).toEqual(expect.any(Array));
    });

    /*it('returns a 10*10 grid from getBoardState', () => {
        let state = gameBoard.getBoardState();
        expect(getBoardState()[0][9]).toEqual(expect.anything());
        expect(getBoardState()[5][9]).toEqual(expect.anything());
        expect(getBoardState()[9][9]).toEqual(expect.anything());
    });
*/
});