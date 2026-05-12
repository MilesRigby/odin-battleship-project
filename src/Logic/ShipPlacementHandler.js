import eventsSys from '../Events/events.js'

const ShipPlacementHandler = ({events = eventsSys} = {}) => {

    events.listen('ship_placement_initialised', ({playerObj, length} = {}) => {
        const pos = {
            x: Math.floor(Math.random()*10),
            y: Math.floor(Math.random()*10)
        }
        const orientation = Math.floor(Math.random()*4);

        events.emit('ship_placed', {playerObj: playerObj, pos: pos, orientation: orientation, length: length} );
    });

}

export default ShipPlacementHandler;