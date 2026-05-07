import eventsSys from '../Events/events.js'
import PlayerConstructor from '../Objects/player.js';

const GameSetup = ({events = eventsSys, Player = PlayerConstructor} = {}) => {

    events.listen('player_types_selected', ({playerOneType = 'real', playerTwoType = 'real'} = {}) => {
        const playerOne = Player(playerOneType);
        Player(playerTwoType);

        events.emit('ship_placement_initialised', {playerObj: playerOne, shipLength: 2});
    });

    events.listen('ship_placed', ({playerObj = Player('real')} = {}) => {
        playerObj.gameboard.addShip();
    });

}

export default GameSetup;