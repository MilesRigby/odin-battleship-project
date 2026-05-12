import eventsSys from '../Events/events.js'

const ShipPlacementHandler = ({events = eventsSys} = {}) => {

    events.listen('ship_placement_initialised', ({playerObj} = {}) => {
        events.emit('ship_placed', {playerObj: playerObj});
    });

}

export default ShipPlacementHandler;