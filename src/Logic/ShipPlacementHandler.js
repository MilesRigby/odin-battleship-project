import eventsSys from '../Events/events.js'

const ShipPlacementHandler = ({events = eventsSys} = {}) => {

    events.listen('ship_placement_initialised', ({player = 0, playerObj = {type: 'real'}, shipLength} = {}) => {
        if (playerObj.type === 'real') {

            events.emit('player_ship_placement_initialised', {player: player, playerObj: playerObj, length: shipLength});

        } else {

            const pos = {
                x: Math.floor(Math.random()*10),
                y: Math.floor(Math.random()*10)
            }
            const orientation = Math.floor(Math.random()*4);

            events.emit('ship_placed', {playerObj: playerObj, pos: pos, orientation: orientation, shipLength: shipLength} );
            
        }
    });

    events.listen('ship_coords_selected', ({playerObj = {}, pos = {}, length, orientation} = {}) => {
        events.emit('ship_placed', {playerObj: playerObj, pos: pos, shipLength: length, orientation: orientation});
    });

}

export default ShipPlacementHandler;