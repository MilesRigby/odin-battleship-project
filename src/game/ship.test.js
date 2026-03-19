import Ship from './ship.js';

describe('Ship game object', () => {

    // Varying ship sizes for different test cases
    // Restriction: adjacent values should never be equal to ensure subsequent tests of the
    // same feature (to ensure all valid inputs are handled) do not use the same values
    // Also should not contain ones, to allow checking that one action does not sink the ship
    const shipSizes = [4, 3, 5, 2, 3, 4, 5, 2, 3, 2, 4, 2]
    let shipIndex = 0;

    // Test objects 
    let shipSize;
    let ship;

    // Construct a new ship instance for each test, keeping track of the ship's size
    beforeEach(() => {
        shipSize = shipSizes[shipIndex];
        ship = Ship(shipSize);

        shipIndex++;
        if (shipIndex === shipSizes.length) {shipIndex = 0;}
    });

    it('is an object', () => {
        expect(ship).toEqual(expect.any(Object));
    });

    it ('has a function, hit()', () => {
        expect(ship.hit).toEqual(expect.any(Function));
    });

    it ('has a function, isSunk()', () => {
        expect(ship.isSunk).toEqual(expect.any(Function));
    });
/*
    it ('', () => {

    });
/*
    it ('', () => {

    });
/*
    it ('', () => {

    });
/*
    it ('', () => {

    });
    */

});