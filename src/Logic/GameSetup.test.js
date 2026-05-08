import GameSetup from './GameSetup.js'

import { eventsConstructor } from '../Events/events.js'

describe('Game setup logic', () => {

    let events;

    beforeEach(() => {
        events = eventsConstructor();
    });

    describe('on event:player_types_selected', () => {

        it('creates Player objects using the provided player types', () => {
            const MockPlayerConstructor = jest.fn();
            GameSetup({events: events, Player: MockPlayerConstructor});

            const MockPlayerOneType = 'kuj34y6gbjh';
            const MockPlayerTwoType = '4ijky6gewbk';
            events.emit('player_types_selected', {playerOneType: MockPlayerOneType, playerTwoType: MockPlayerTwoType});

            expect(MockPlayerConstructor.mock.calls[0][0]).toBe(MockPlayerOneType);
            expect(MockPlayerConstructor.mock.calls[1][0]).toBe(MockPlayerTwoType);
        });

        describe('emits event:ship_placement_initialised with the first player object created', () => {

            test.each([
                [1, {ksjne: 'ekjsbeskjt'}],
                [2, {kjebg: 'gfubnrwesj'}]
            ])('case %i', (_case, testObject) => {
                const MockPlayerOne = testObject;
                const MockPlayerTwo = {};
                const MockCallback = jest.fn();
                const MockPlayerConstructor = jest.fn()
                    .mockImplementationOnce(() => MockPlayerOne)
                    .mockImplementationOnce(() => MockPlayerTwo);
                GameSetup({events: events, Player: MockPlayerConstructor});
                events.listen('ship_placement_initialised', MockCallback);

                events.emit('player_types_selected');

                expect(MockCallback.mock.calls[0][0].playerObj).toEqual(MockPlayerOne);
            });

        });

        it('emits event:ship_placement_initialised with the first player object created', () => {
            const MockCallback = jest.fn();
            GameSetup({events: events});
            events.listen('ship_placement_initialised', MockCallback);

            events.emit('player_types_selected');

            expect(MockCallback.mock.calls[0][0].shipLength).toEqual(2);
        });

    });

    describe('on event:ship_placed', () => {

        let MockPlayerObject;

        beforeEach(() => {
            MockPlayerObject = {gameboard: {addShip: jest.fn(), getBoardState: jest.fn()}}
            GameSetup({events: events});
        });

        describe('calls addShip on the received player object\'s gameboard', () => {

            test('confirm emit', () => {            
                events.emit('ship_placed', {playerObj: MockPlayerObject});

                expect(MockPlayerObject.gameboard.addShip).toHaveBeenCalled();
            });

            describe('called with received position, length, and orientation', () => {
                
                test.each([
                    [1, {x: 2, y: 5}, 3, 2],
                    [2, {x: 7, y: 3}, 4, 0]
                ])('case %i', (_case, pos, length, orientation) => {            
                    events.emit('ship_placed', {
                        playerObj: MockPlayerObject, 
                        pos: pos,
                        shipLength: length,
                        orientation: orientation
                    });

                    expect(MockPlayerObject.gameboard.addShip.mock.calls[0][0]).toEqual(pos);
                    expect(MockPlayerObject.gameboard.addShip.mock.calls[0][1]).toEqual(length);
                    expect(MockPlayerObject.gameboard.addShip.mock.calls[0][2]).toEqual(orientation);
                });

            });

        });

        describe('ship placement is invalid', () => {

            describe('emits event:ship_placement_initialised with same data as previously', () => {

                // The switch from i<ships to i<=ships is not a bug, it accounts for the fact that one event
                // was already triggered by the setup's player_types_selected listener
                test.each([ [0], [3], [5], [7] ])
                ('after %i ships placed', (ships) => {
                    MockPlayerObject.gameboard.addShip.mockImplementation(() => false);
                    for (i=0; i<ships; i++) { MockPlayerObject.gameboard.addShip.mockImplementationOnce(() => true) };
                    const MockCallback = jest.fn();
                    events.listen('ship_placement_initialised', MockCallback);

                    events.emit('player_types_selected');
                    for (i=0; i<=ships; i++) { events.emit('ship_placed', {playerObj: MockPlayerObject}) }; 

                    expect(MockCallback.mock.calls.at(-2)).toEqual(MockCallback.mock.calls.at(-1));
                });

            });

            it('doesn\'t emit event:board_state_changed', () => {
                MockPlayerObject.gameboard.addShip.mockImplementation(() => false);
                const MockCallback = jest.fn();
                events.listen('board_state_changed', MockCallback);

                events.emit('ship_placed', {playerObj: MockPlayerObject});

                expect(MockCallback).not.toHaveBeenCalled();
            });

        });

        describe('emits event:board_state_changed if ship placement is valid', () => {

            test('confirm emit', () => {
                MockPlayerObject.gameboard.addShip.mockImplementation(() => true);
                const MockCallback = jest.fn();
                events.listen('board_state_changed', MockCallback);

                events.emit('ship_placed', {playerObj: MockPlayerObject});

                expect(MockCallback).toHaveBeenCalled();
            });

            describe('sends state of player\'s gameboard', () => {

                test.each([
                    [1, [[0, 5, 3], [2, 7, 2], [7, 2, 5]]],
                    [2, [[4, 8, 1], [3, 9, 1], [0, 8, 6]]]
                ])('case %i', (_case, MockGameBoard) => {
                    MockPlayerObject.gameboard.addShip.mockImplementation(() => true);
                    MockPlayerObject.gameboard.getBoardState.mockImplementation(() => MockGameBoard);
                    const MockCallback = jest.fn();
                    events.listen('board_state_changed', MockCallback);

                    events.emit('ship_placed', {playerObj: MockPlayerObject});

                    expect(MockCallback).toHaveBeenCalledWith(expect.objectContaining({boardState: MockGameBoard}));
                });

            });

        });

    });

});