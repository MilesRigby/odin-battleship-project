import eventsSys from '../Events/events.js'

const TurnHandler = ({events = eventsSys} = {}) => {

    events.listen('turn_started', ({playerObj = {type: 'real'}} = {}) => {

        playerObj.board.receiveAttack();

    });

}

export default TurnHandler;