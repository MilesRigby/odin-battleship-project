import GameBoard from "./gameBoard.js";

const Player = (type = 'real') => {

    const board = GameBoard();

    return {
        type,
        board
    }

}

export default Player;