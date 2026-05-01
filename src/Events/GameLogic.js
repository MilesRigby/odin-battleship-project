import eventsSys from './events.js';
import Player from '../Objects/player.js';

const GameLogic = (events = eventsSys) => {

    events.listen('player_types_selected', ({playerOneType, playerTwoType}) => {
        const playerOne = Player(playerOneType);
        const playerTwo = Player(playerTwoType);

        if (playerOne.type !== 'real') {
            _populateGameBoard(playerOne);
            events.emit('board_state_changed', {board: 1, state: playerOne.board.getBoardState()});
        }
        if (playerTwo.type !== 'real') {
            _populateGameBoard(playerTwo);
            events.emit('board_state_changed', {board: 2, state: playerTwo.board.getBoardState()});
        }

        if (playerOne.type === 'real' && playerTwo.type === 'real') {
            events.emit('player_ship_placement_required', {player: 'Player 1', length: 0});
        } else if (playerOne.type === 'real' || playerTwo.type === 'real') {
            events.emit('player_ship_placement_required', {player: '', length: 0});
        }
    });

    const _populateGameBoard = (player) => {
        const shipLengths = [2, 3, 3, 4, 5];
        for ( const length of shipLengths ) {
            player.board.addShip({x: Math.floor(Math.random()*10), y: Math.floor(Math.random()*10)}, length, Math.floor(Math.random()*4));
        }
    }

    events.emit('game_started');

}

export default GameLogic;