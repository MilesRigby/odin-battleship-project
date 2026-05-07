import eventsSys from '../Events/events.js';
import Player from '../Objects/player.js';

const GameLogic = (events = eventsSys) => {

    events.listen('setup_completed', () => {
        events.emit('turn_started', {activePlayer: 0});
    });

}

export default GameLogic;