import eventsSys from '../Events/events.js'
import PlayerConstructor from '../Objects/player.js';

const GameSetup = ({events = eventsSys, Player = PlayerConstructor} = {}) => {

    let currentPlayer = 0;
    let shipsPlaced = 0;

    const players = [];
    const shipLengths = [2, 3, 3, 4, 5];

    events.listen('player_types_selected', ({playerOneType = 'real', playerTwoType = 'real'} = {}) => {
        players.push(Player(playerOneType));
        players.push(Player(playerTwoType));

        events.emit('ship_placement_initialised', {playerObj: players[0], shipLength: 2});
    });

    events.listen('ship_placed', ({playerObj = Player('real'), pos = {x: 0, y: 0}, shipLength = 1, orientation = 0} = {}) => {

        if (playerObj.board.addShip(pos, shipLength, orientation)) {
            events.emit('board_state_changed', {boardState: playerObj.board.getBoardState(), board: currentPlayer});
            if (++shipsPlaced === 5) currentPlayer++;

            if (shipsPlaced === 10) {
                events.emit('setup_completed', {playerOneObject: players[0], playerTwoObject: players[1]});    
                return;
            }
        }

        events.emit('ship_placement_initialised', {playerObj: players[currentPlayer], shipLength: shipLengths[shipsPlaced % 5]});
    });

}

export default GameSetup;