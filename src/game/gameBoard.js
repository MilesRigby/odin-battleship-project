import Ship from './ship.js';

const GameBoard = () => {

    // The current game board state
    let state = Array.from({ length: 10 }, () => new Array(10).fill(0));

    // Cardinal directions on the game board. 0 - north; 1 - east; 2 - south; 3 - west
    const directions = {
        0: {x: 0, y: 1},
        1: {x: 1, y: 0},
        2: {x: 0, y: -1},
        3: {x: -1, y: 0}
    }

    // The number of the ship to be placed next
    let nextShip = 1;

    // Public function to retrieve current board state
    const getBoardState = () => state;

    // Public function to allow adding ships to the game board
    const addShip = (start, length = 1, orientation = 0) => {

        const positions = _determinePlacementPositions(start, length, orientation);

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

    // Helper function to determine the spaces that will be used by a ship if placed in the game board
    const _determinePlacementPositions = (start, length, orientation) => {
        const dir = directions[orientation];

        const positions = [];
        for (i=0; i<length; i++) { 
            positions.push({x: start.x + i*dir.x, y: start.y + i*dir.y}); 
        }

        return positions;
    }

    // Public function to allow board spaces to be attacked, performing any effects of the attack
    const receiveAttack = (pos) => {
        if (state[pos.x][pos.y] === 0) {
            state[pos.x][pos.y] = -1;
            return true;
        }

        if (state[pos.x][pos.y] > 0) {
            state[pos.x][pos.y] = -2;
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