import eventsSys from '../Events/events.js'

const TurnHandler = ({events = eventsSys} = {}) => {

    let players;
    let currentTurn = 0;
    let turnActive = false;

    events.listen('player_objects_constructed', ({playerOne, playerTwo} = {}) => {
        players = [];
        
        players.push(playerOne);
        players.push(playerTwo);
    });

    events.listen('turn_started', ({playerNo = 0} = {}) => {

        const player = players[playerNo];
        const target = players[1-playerNo];

        console.log(playerNo)

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
            endTurn(target, playerNo);
        }, 1000);

    });

    events.listen('space_clicked', ({pos = {x: 0, y: 0}, boardNo = 0} = {}) => {

        const player = players[currentTurn];
        const target = players[1-currentTurn];

        if (!turnActive) return;
        if (currentTurn === boardNo) return;

        if (target.board.receiveAttack(pos)) {
            turnActive = false;
            events.emit('board_state_changed', {boardState: target.board.getBoardState(), board: boardNo});
            endTurn(target, currentTurn);
        }

    });

    const endTurn = (target, playerNo) => {
        if (target.board.allSunk()) {
            events.emit('player_won', {player: playerNo});
        } else {
            events.emit('turn_ended', {activePlayer: playerNo});
        }
    }

}

export default TurnHandler;