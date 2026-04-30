import eventsSys from './events.js';

const GameLogic = (events = eventsSys) => {

    events.emit('game_started');

}

export default GameLogic;