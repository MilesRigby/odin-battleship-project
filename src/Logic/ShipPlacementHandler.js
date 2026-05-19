import eventsSys from '../Events/events.js'

const ShipPlacementHandler = ({events = eventsSys} = {}) => {

    events.listen('ship_placement_initialised', ({playerObj = {type: 'real'}, length} = {}) => {
        if (playerObj.type === 'real') {

            events.emit('player_ship_placement_initialised', {playerObj: playerObj, length: length});

        } else {

            const pos = {
                x: Math.floor(Math.random()*10),
                y: Math.floor(Math.random()*10)
            }
            const orientation = Math.floor(Math.random()*4);

            setTimeout(() => {
                events.emit('ship_placed', {playerObj: playerObj, pos: pos, orientation: orientation, length: length} );
            }, 1000);
            
        }
    });

    events.listen('ship_coords_selected', () => {
        events.emit('ship_placed');
    });

}

export default ShipPlacementHandler;