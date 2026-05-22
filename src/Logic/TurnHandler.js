import eventsSys from '../Events/events.js'

const TurnHandler = ({events = eventsSys} = {}) => {

    let players;

    events.listen('player_objects_created', ({playerOne, playerTwo} = {}) => {
        players = [];

        players.push(playerOne);
        players.push(playerTwo);
    });

    events.listen('turn_started', ({playerNo = 0} = {}) => {

        const target = players[1-playerNo]

        while (true) {
            if (target.board.receiveAttack({x: Math.floor(Math.random()*10), y: Math.floor(Math.random()*10)})) break;
        }

    });

}

export default TurnHandler;