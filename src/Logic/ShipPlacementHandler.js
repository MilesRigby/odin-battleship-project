import eventsSys from '../Events/events.js'

const ShipPlacementHandler = ({events = eventsSys} = {}) => {

    events.listen('ship_placement_initialised', () => {
        events.emit('ship_placed');
    });

}

export default ShipPlacementHandler;