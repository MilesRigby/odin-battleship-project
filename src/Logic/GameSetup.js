import eventsSys from '../Events/events.js'
import PlayerConstructor from '../Objects/player.js';

const GameSetup = ({events = eventsSys, Player = PlayerConstructor} = {}) => {

    events.listen('player_types_selected', ({playerOneType = 'real', playerTwoType = 'real'} = {}) => {
        const playerOne = Player(playerOneType);
        Player(playerTwoType);

        events.emit('ship_placement_initialised', {playerObj: playerOne, shipLength: 2});
    });

    events.listen('ship_placed', ({playerObj = Player('real'), pos = {x: 0, y: 0}, shipLength = 1, orientation = 0} = {}) => {
        playerObj.gameboard.addShip(pos, shipLength, orientation);
    });

}

export default GameSetup;