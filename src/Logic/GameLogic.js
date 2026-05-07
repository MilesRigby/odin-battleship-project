import eventsSys from '../Events/events.js';

const GameLogic = (events = eventsSys) => {

    events.listen('setup_completed', () => {
        events.emit('turn_started', {activePlayer: 0});
    });

    events.listen('turn_ended', ({activePlayer = 0} = {}) => {
        events.emit('turn_started', {activePlayer: 1 - activePlayer});
    });

    events.emit('game_started');

}

export default GameLogic;