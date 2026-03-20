import Ship from './ship.js';

const GameBoard = () => {

    state = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const getBoardState = () => state;

    const addShip = (pos) => {
        state[pos.x][pos.y] = 1;
    }

    const receiveAttack = (pos) => {
        if (state[pos.x][pos.y] === 0) {
            state[pos.x][pos.y] = -1;
            return true;
        }

        return false;
    }

    return {
        getBoardState,
        addShip,
        receiveAttack
    }

}

export default GameBoard;