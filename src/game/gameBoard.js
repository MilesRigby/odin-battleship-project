import Ship from './ship.js';

const GameBoard = () => {

    let state = Array.from({ length: 10 }, () => new Array(10).fill(0));

    let nextShip = 1;

    const getBoardState = () => state;

    const addShip = (pos, length = 1) => {
        if (state[pos.x][pos.y]) {
            return false;
        }

        for (i=0; i<length; i++) {
            state[pos.x][pos.y + i] = nextShip;
        }
        
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