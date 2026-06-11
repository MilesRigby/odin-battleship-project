import './playergrid.css';

import ConstructHTMLFromObject from "../ContentBuilder.js";
import events from '../../Events/events.js';

// Creates a player's game board UI element with display updating functionality, ready to place into the DOM
const PlayerGrid = () => {
    const grid = ConstructHTMLFromObject(SeaGridDisplay());
    return GridLogic(grid);
}

// Creates the top-level object for the game board UI element
const SeaGridDisplay = () => { 
    return { 'div': { attributes: { "className": "sea-grid", "data-active": "true"} , children: BuildGrid() }}
}

// Creates the ten columns of the board
const BuildGrid = () => {
    return new Array(10).fill(
        { "div": { attributes: { "className": "sea-column" }, children: Column() }}
    );
}

// Creates ten cells for a single column of the board
const Column = () => {
    return new Array(10).fill(
        { "div": { attributes: { "className": "sea-cell", "data-state": "empty", "data-ghost": "false" }, children: []} }
    );
}

// Attaches update logic to the grid DOM element
const GridLogic = (grid) => {

    // build array of board UI cells
    const cells = Array.from({length: 10}, () => []);
    const gridColumns = grid.querySelectorAll('.sea-column');

    for (let x=0; x<10; x++) {
        const columnCells = gridColumns[x].querySelectorAll('.sea-cell');

        for (let y=0; y<10; y++) {
            cells[x].push(columnCells[y]);
        }

    }

    // Defines orientation directions
    const orient = [ {x:0, y:1}, {x:1, y:0}, {x:0, y:-1}, {x:-1, y:0} ];

    // Sets up board events
    const setupEvents = (boardNo) => {
        for (let x=0; x<10; x++) for (let y=0; y<10; y++) {
            const cell = cells[x][y];
            _addOnMouseEnter(boardNo, cell, x, y);
            _addOnMouseExit(cell);
            _addOnClick(boardNo, cell, x, y);
        }
    }

    // Updates the entire board with data from a gameBoard object (see gameBoard.js)
    const updateGridState = (state) => {
        for (let x=0; x<10; x++) for (let y=0; y<10; y++) {
            _updateCell(state[x][y], cells[x][y]);
        }
    }

    // Allows the board's state to made visible or invisible
    const setGridVisibility = (bool) => {
        grid.dataset.active = bool ? "true": "false";
    }

    // Stores cells which have a ship placement ghost on them
    let drawGhost = false;
    const ghostShip = [];

    const createShipPlacementGhost = (pos, length, orientation) => {
        _removeShipPlacementGhost();
        if (drawGhost) _placeShipGhost(pos, length, orientation);
    }

    // Allows a single ship ghost to appear on the board during placement
    const _placeShipGhost = (pos, length, orientation) => {        
        const dir = orient[orientation];

        for (let i=0; i<length; i++) {
            const cell = cells[pos.x + i*dir.x]?.[pos.y + i*dir.y];
            if (cell) {
                cell.dataset.ghost = "true";
                ghostShip.push(cell);
            }
        }

    }

    // Removes ship ghost
    const _removeShipPlacementGhost = () => {
        for (let cell of ghostShip) cell.dataset.ghost = false;
        ghostShip.length = 0;
    }

    // Updates a single cell of the board
    const _updateCell = (newStateNo, cell) => {
        const state = _determineState(newStateNo);
        cell.dataset.state = state;
    }

    // Determines the state of a cell given the data value assigned to the corresponding gameBoard state
    const _determineState = (stateNo) => {
        if (stateNo  ===  0) return "empty";
        if (stateNo    >  0) return "ship";
        if (stateNo  === -1) return "miss";
                             return "hit";
    }

    const _addOnMouseEnter = (boardNo, cell, x, y) => {
        cell.addEventListener('mouseenter', () => {
            drawGhost = true;
            events.emit('cell_moused_over', {board: boardNo, pos: {x: x, y: y}});
        });
    }

    const _addOnMouseExit = (cell) => {
        cell.addEventListener('mouseleave', () => {
            drawGhost = false;
            _removeShipPlacementGhost();
        });
    }

    const _addOnClick = (boardNo, cell, x, y) => {
        cell.addEventListener('click', () => events.emit('cell_clicked', {board: boardNo, pos: {x: x, y: y}}));
    }

    // Provides both the DOM element and functions for updating it
    return {
        gridElement: grid,
        setupEvents: setupEvents,
        updateGridState: updateGridState,
        setGridVisibility: setGridVisibility,
        createShipPlacementGhost: createShipPlacementGhost,
    }

}

export default PlayerGrid;