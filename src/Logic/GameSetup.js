import eventsSys from '../Events/events.js'
import PlayerConstructor from '../Objects/player.js';

const GameSetup = ({events = eventsSys, Player = PlayerConstructor} = {}) => {

    events.listen('player_types_selected', ({playerOneType = 'real', playerTwoType = 'real'} = {}) => {
        Player(playerOneType);
        Player(playerTwoType);
    });

}

export default GameSetup;