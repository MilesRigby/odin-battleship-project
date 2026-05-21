import eventsSys from '../Events/events.js'

const TurnHandler = ({events = eventsSys} = {}) => {

    events.listen('turn_started', ({playerObj = {type: 'real'}} = {}) => {

        while (true) {
            if (playerObj.board.receiveAttack({x: Math.floor(Math.random()*10), y: Math.floor(Math.random()*10)})) break;
        }

    });

}

export default TurnHandler;