import Ship from './ship.js';

describe('Ship game object', () => {

    // Varying ship sizes for different test cases
    const shipSizes = [1, 3, 5, 2, 3, 4, 5, 2, 3, 2, 4, 2]
    let shipIndex = 0;

    // Test objects 
    let shipSize;
    let ship;

    // Construct a new ship instance for each test, keeping track of the ship's size
    beforeEach(() => {
        shipSize = shipSizes[shipIndex];
        ship = Ship(shipSize);

        shipIndex++;
    });

    it('exists', () => {
        expect(ship).toBeDefined();
    });

});