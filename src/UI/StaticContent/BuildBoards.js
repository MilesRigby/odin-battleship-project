
import './player-boards.css'
import PlayerGrid from "./PlayerGrid.js";
import ConstructHTMLFromObject from "../ContentBuilder.js";

import events from '../../Events/events.js';

const BuildBoards = () => {
    const playerBoards = ConstructHTMLFromObject( { "div": { attributes: {"id":"player-boards"}, children: []}} );

    // Stores UI board elements with their functionality
    const boards = [];

    // indicates ship placement stage vs gameplay
    let stage = 'placement';

    // data relevant to placing a new ship
    let playerNo = 1;
    let playerObject;
    let shipLength = 3;
    let orientation = 0;

    // Create boards
    boards.push(PlayerGrid());
    boards.push(PlayerGrid());

    // Setup boards' behaviour
    boards[0].setupEvents(0);
    boards[1].setupEvents(1);

    // Add boards to DOM tree
    playerBoards.appendChild(boards[0].gridElement);
    playerBoards.appendChild(boards[1].gridElement);

    // Updates board when ships are placed or spaces are attacked
    events.listen('board_state_changed', ({boardState, board} = {}) => {
        boards[board].updateGridState(boardState);
    });

    // Moves to gameplay mode when setup ends
    events.listen('setup_completed', () => {
        stage = 'gameplay';
    });

    // Establishes behaviour for when a ship is to be placed
    events.listen('player_ship_placement_initialised', ({player, playerObj, length} = {}) => {
        playerNo = player;
        playerObject = playerObj;
        shipLength = length;
    });

    let ghostShipPos;

    // Allows modification of the orientation of placed ships
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (keyName === 'e') orientation = (orientation + 1) % 4;
        if (keyName === 'q') orientation = (orientation + 3) % 4;
        if (ghostShipPos) boards[playerNo].createShipPlacementGhost(ghostShipPos, shipLength, orientation);
    });

    // Places ghost ships when a grid cell is moused over
    events.listen('cell_moused_over', ({board, pos} = {}) => {
        if (stage !== 'placement' || board !== playerNo) return;
        ghostShipPos = pos;
        boards[board].createShipPlacementGhost(ghostShipPos, shipLength, orientation);
    });

    // Attempts to place ships when a tile is clicked
    events.listen('cell_clicked' , ({board, pos} = {}) => {
        if (stage === 'placement' && board === playerNo) { events.emit('ship_coords_selected', {playerObj: playerObject, pos: pos, length: shipLength, orientation: orientation}); }
        else events.emit('space_clicked', {pos: pos, boardNo: board});
    });

    return playerBoards;
}

// I believe this only needs to be updated to control the active state of the boards now


export default BuildBoards;