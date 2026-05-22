import eventsSys from '../Events/events.js'

const TurnHandler = ({events = eventsSys} = {}) => {

    let players;

    events.listen('player_objects_created', ({playerOne, playerTwo} = {}) => {
        players = [];

        players.push(playerOne);
        players.push(playerTwo);
    });

    events.listen('turn_started', ({playerNo = 0} = {}) => {

        const player = players[playerNo];
        const target = players[1-playerNo];

        if (player.type === 'real') return;

        while (true) {
            if (target.board.receiveAttack({x: Math.floor(Math.random()*10), y: Math.floor(Math.random()*10)})) break;
        }

        events.emit('board_state_changed', {boardState: target.board.getBoardState(), board: 1-playerNo});

        events.emit('turn_ended', {activePlayer: playerNo});

    });

}

export default TurnHandler;