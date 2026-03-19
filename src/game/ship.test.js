import Ship from './ship.js';

describe('Ship game object', () => {

    // An arbitrary ship size for tests that require a ship object but don't care how big it is
    const ARBITRARY_SIZE = 3;

    // Sizes for features which require testing multiple cases
    const sizes = [2, 4, 5];

    // Test objects 
    let ship;

    ship = Ship(ARBITRARY_SIZE);

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

    test.each(sizes) (
            
        "is sunk if hit enough times; ship size: %i",
        (size) => {
            ship = Ship(size);
            for (let i=1; i <= size; i++) { ship.hit(); }
            expect(ship.isSunk()).toBe(true);
        }
        
    )
/*
    it ('', () => {

    });
/*
    it ('', () => {

    });
    */

});