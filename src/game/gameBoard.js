import Ship from './ship.js';

const GameBoard = () => {

    let state = Array.from({ length: 10 }, () => new Array(10).fill(0));

    let nextShip = 1;

    const getBoardState = () => state;

    const addShip = (pos) => {
        state[pos.x][pos.y] = nextShip;
        nextShip++;
        return true;
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