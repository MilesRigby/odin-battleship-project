import eventsSys from '../Events/events.js'

const TurnHandler = ({events = eventsSys} = {}) => {

    let players;
    let currentTurn = 0;
    let turnActive = false;

    events.listen('player_objects_created', ({playerOne, playerTwo} = {}) => {
        players = [];

        players.push(playerOne);
        players.push(playerTwo);
    });

    events.listen('turn_started', ({playerNo = 0} = {}) => {

        const player = players[playerNo];
        const target = players[1-playerNo];

        if (player.type === 'real') {
            currentTurn = playerNo;
            turnActive = true;
            return;
        }

        while (true) {
            if (target.board.receiveAttack({x: Math.floor(Math.random()*10), y: Math.floor(Math.random()*10)})) break;
        }

        setTimeout(() => {
            events.emit('board_state_changed', {boardState: target.board.getBoardState(), board: 1-playerNo});
            events.emit('turn_ended', {activePlayer: playerNo});
        }, 1000);

    });

    events.listen('space_clicked', ({pos = {x: 0, y: 0}, boardNo = 0} = {}) => {

        if (!turnActive) return;
        if (currentTurn === boardNo) return;

        if (players[boardNo].board.receiveAttack(pos)) {
            turnActive = false;
            events.emit('board_state_changed', {boardState: players[boardNo].board.getBoardState(), board: boardNo});
            events.emit('turn_ended');
        }

    });

}

export default TurnHandler;