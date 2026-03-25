import ShipConstructor from './ship.js';

const GameBoard = (Ship = ShipConstructor) => {

    // The size of the battleship game board
    const BOARD_SIZE = 10;

    // The current game board state
    const state = Array.from({ length: BOARD_SIZE }, () => new Array(BOARD_SIZE).fill(0));

    // The ship objects represented on the gameBoard by numbers 1, 2, 3...
    const ships = [];

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
            if (pos.x >= BOARD_SIZE || pos.x < 0 || pos.y >= BOARD_SIZE || pos.y < 0 ) return false;
            if (state[pos.x][pos.y]) {
                return false;
            }
        }

        for (const pos of positions) {
            state[pos.x][pos.y] = nextShip;
        }

        ships.push(Ship(length));
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
        const targetState = state[pos.x][pos.y]

        if (targetState === 0) {
            state[pos.x][pos.y] = -1;
            return true;
        }

        if (targetState > 0) {
            ships[targetState - 1].hit();
            state[pos.x][pos.y] = -2;
            return true;
        }

        return false;
    }

    const allSunk = () => {
        return ships[0].isSunk();
    }

    return {
        getBoardState,
        addShip,
        receiveAttack,
        allSunk
    }

}

export default GameBoard;