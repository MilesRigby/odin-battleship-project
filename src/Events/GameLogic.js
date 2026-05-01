import eventsSys from './events.js';

const GameLogic = (events = eventsSys) => {

    events.listen('player_types_selected', ({playerOneType, playerTwoType}) => {
        if (playerOneType === 'real' && playerTwoType === 'real') {
            events.emit('player_ship_placement_required', {player: 'Player 1', length: 0});
        } else {
            events.emit('player_ship_placement_required', {player: '', length: 0});
        }
    });

    events.emit('game_started');

}

export default GameLogic;