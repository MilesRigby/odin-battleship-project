import Ship from './ship.js';

const GameBoard = () => {

    let state = Array.from({ length: 10 }, () => new Array(10).fill(0));

    let nextShip = 1;

    const getBoardState = () => state;

    const addShip = (start, length = 1) => {

        const positions = _determinePlacementPositions(start, length);

        for (const pos of positions) {
            if (state[pos.x][pos.y]) {
                return false;
            }
        }

        for (const pos of positions) {
            state[pos.x][pos.y] = nextShip;
        }

        nextShip++;
        return true;
    }

    const _determinePlacementPositions = (start, length) => {
        const positions = [];
        for (i=0; i<length; i++) { positions.push({x: start.x, y: start.y + i}); }
        return positions;
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