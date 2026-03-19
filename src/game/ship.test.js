import Ship from './ship.js';

describe('Ship game object', () => {

    // An arbitrary ship size for tests that require a ship object but don't care how big it is
    const ARBITRARY_SIZE = 3;
    
    // Test objects 
    let ship;

    // Construct a new ship instance for each test, keeping track of the ship's size
    beforeEach(() => {
        ship = Ship(ARBITRARY_SIZE);
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

    it ('is not sunk if not yet hit', () => {
        expect(ship.isSunk()).toBe(false);
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