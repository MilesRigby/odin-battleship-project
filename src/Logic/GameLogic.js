import eventsSys from '../Events/events.js';
import Player from '../Objects/player.js';

const GameLogic = (events = eventsSys) => {

    events.listen('setup_completed', () => {
        events.emit('turn_started', {activePlayer: 0});
    });

    events.listen('turn_ended', () => {
        events.emit('turn_started');
    });

}

export default GameLogic;