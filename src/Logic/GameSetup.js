import eventsSys from '../Events/events.js'
import PlayerConstructor from '../Objects/player.js';

const GameSetup = ({events = eventsSys, Player = PlayerConstructor} = {}) => {

    let currentPlayer = 0;
    let shipsPlaced = 0;

    let playerOne;

    events.listen('player_types_selected', ({playerOneType = 'real', playerTwoType = 'real'} = {}) => {
        playerOne = Player(playerOneType);
        Player(playerTwoType);

        events.emit('ship_placement_initialised', {playerObj: playerOne, shipLength: 2});
    });

    events.listen('ship_placed', ({playerObj = Player('real'), pos = {x: 0, y: 0}, shipLength = 1, orientation = 0} = {}) => {
        if (playerObj.gameboard.addShip(pos, shipLength, orientation)) {
            if (++shipsPlaced === 6) currentPlayer++;
            events.emit('board_state_changed', {boardState: playerObj.gameboard.getBoardState(), board: currentPlayer});
        }
        events.emit('ship_placement_initialised', {playerObj: playerOne, shipLength: 2});
    });

}

export default GameSetup;