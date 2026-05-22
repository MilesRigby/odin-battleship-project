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

        describe('emits event:player_objects_initialised, sending both player objects', () => {

            test.each([
                [1, {ksjne: 'ekjsbeskjt'}, {ksej: 'sekjgbr'}],
                [2, {kjebg: 'gfubnrwesj'}, {leskng: 'seogjbr'}]
            ])('case %i', (_case, testObjectOne, testObjectTwo) => {
                const MockPlayerOne = testObjectOne;
                const MockPlayerTwo = testObjectTwo;
                const MockCallback = jest.fn();
                const MockPlayerConstructor = jest.fn()
                    .mockImplementationOnce(() => MockPlayerOne)
                    .mockImplementationOnce(() => MockPlayerTwo);
                GameSetup({events: events, Player: MockPlayerConstructor});
                events.listen('player_objects_constructed', MockCallback);

                events.emit('player_types_selected');

                expect(MockCallback.mock.calls[0][0].playerOne).toEqual(MockPlayerOne);
                expect(MockCallback.mock.calls[0][0].playerTwo).toEqual(MockPlayerTwo);
            });

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

        it('emits event:ship_placement_initialised with a ship length of 2', () => {
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
            MockPlayerObject = {board: {addShip: jest.fn(), getBoardState: jest.fn()}}
            GameSetup({events: events});
        });

        describe('calls addShip on the received player object\'s board', () => {

            test('confirm emit', () => {            
                events.emit('ship_placed', {playerObj: MockPlayerObject});

                expect(MockPlayerObject.board.addShip).toHaveBeenCalled();
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

                    expect(MockPlayerObject.board.addShip.mock.calls[0][0]).toEqual(pos);
                    expect(MockPlayerObject.board.addShip.mock.calls[0][1]).toEqual(length);
                    expect(MockPlayerObject.board.addShip.mock.calls[0][2]).toEqual(orientation);
                });

            });

        });

        describe('ship placement is invalid', () => {

            describe('emits event:ship_placement_initialised with same data as previously', () => {

                // The switch from i<ships to i<=ships is not a bug, it accounts for the fact that one event
                // was already triggered by the setup's player_types_selected listener
                test.each([ [0], [3], [5], [7] ])
                ('after %i ships placed', (ships) => {
                    MockPlayerObject.board.addShip.mockImplementation(() => false);
                    for (i=0; i<ships; i++) { MockPlayerObject.board.addShip.mockImplementationOnce(() => true) };
                    const MockCallback = jest.fn();
                    events.listen('ship_placement_initialised', MockCallback);

                    events.emit('player_types_selected');
                    for (i=0; i<=ships; i++) { events.emit('ship_placed', {playerObj: MockPlayerObject}) }; 

                    expect(MockCallback.mock.calls.at(-2)).toEqual(MockCallback.mock.calls.at(-1));
                });

            });

            it('doesn\'t emit event:board_state_changed', () => {
                MockPlayerObject.board.addShip.mockImplementation(() => false);
                const MockCallback = jest.fn();
                events.listen('board_state_changed', MockCallback);

                events.emit('ship_placed', {playerObj: MockPlayerObject});

                expect(MockCallback).not.toHaveBeenCalled();
            });

        });

        describe('when ship placement is valid', () => {

            let MockCallback;

            beforeEach(() => {
                MockPlayerObject.board.addShip.mockImplementation(() => true);
                MockCallback = jest.fn();
            });

            describe('emits event:board_state_changed', () => {

                beforeEach(() => {
                    events.listen('board_state_changed', MockCallback);
                });

                test('confirm emit', () => {
                    events.emit('ship_placed', {playerObj: MockPlayerObject});

                    expect(MockCallback).toHaveBeenCalled();
                });

                describe('sends state of player\'s board', () => {

                    test.each([
                        [1, [[0, 5, 3], [2, 7, 2], [7, 2, 5]]],
                        [2, [[4, 8, 1], [3, 9, 1], [0, 8, 6]]]
                    ])('case %i', (_case, MockGameBoard) => {
                        MockPlayerObject.board.getBoardState.mockImplementation(() => MockGameBoard);

                        events.emit('ship_placed', {playerObj: MockPlayerObject});

                        expect(MockCallback).toHaveBeenCalledWith(expect.objectContaining({boardState: MockGameBoard}));
                    });

                });

                describe('sends number of player board (0 or 1), switching to board 1 for the sixth placed ship', () => {

                    test.each([ [2, 0], [5, 0], [6, 1], [8, 1] ])('placing ship %i on board %i', (shipsPlaced, boardUpdated) => {
                        for (i=0; i<shipsPlaced; i++) {
                            events.emit('ship_placed', {playerObj: MockPlayerObject});
                        }

                        expect(MockCallback).toHaveBeenLastCalledWith(expect.objectContaining({board: boardUpdated}))
                    });

                });

            });

            describe('emits event:ship_placement_initialised until 10th ship placed', () => {

                beforeEach(() => {
                    events.listen('ship_placement_initialised', MockCallback);
                });

                test('confirm call', () => {
                    events.emit('ship_placed', {playerObj: MockPlayerObject});

                    expect(MockCallback).toHaveBeenCalled();
                });

                test('unless 10th ship placed', () => {
                    for (i=0; i<9; i++) events.emit('ship_placed', {playerObj: MockPlayerObject});
                    const ninethCall = MockCallback.mock.calls[8];
                    console.log(MockCallback.mock.calls);
                    events.emit('ship_placed', {playerObj: MockPlayerObject});

                    expect(MockCallback.mock.calls.at(-1)).toBe(ninethCall);
                });

                describe('sends player 1 object after first 4 successful ships, then sends player 2', () => {

                    test.each([
                        ['real', 'computer', 1, 'real'],
                        ['computer', 'computer', 3, 'computer'],
                        ['real', 'computer', 5, 'computer'],
                        ['computer', 'real', 8, 'real']
                    ])('Types %s and %s, %i ship(s)', (playerOneType, playerTwoType, shipsToAdd, expectedPlayerType) => {
                        events.emit('player_types_selected', {playerOneType: playerOneType, playerTwoType: playerTwoType});

                        for (i=0; i<shipsToAdd; i++) events.emit('ship_placed');

                        expect(MockCallback.mock.calls.at(-1)[0].playerObj.type).toBe(expectedPlayerType);
                    });

                });

                it('sends ship lengths 2,3,3,4,5 in order for each player (i.e. twice)', () => {
                    shipOrder = [2, 3, 3, 4, 5, 2, 3, 3, 4, 5];

                    events.emit('player_types_selected');
                    for (i=0; i<10; i++) events.emit('ship_placed');

                    expect(MockCallback.mock.calls.map((call) => call[0].shipLength)).toEqual(shipOrder);
                });

            });

            describe('after 10th ship placed, emits event:setup_complete', () => {

                beforeEach(() => {
                    events.listen('setup_completed', MockCallback);
                });

                test('confirm call after 10th ship', () => {
                    for (i=0; i<9; i++) events.emit('ship_placed');
                    expect(MockCallback).not.toHaveBeenCalled();

                    events.emit('ship_placed');
                    expect(MockCallback).toHaveBeenCalled();
                });

                describe('send player objects with event', () => {

                    test.each([
                        ['real', 'computer'],
                        ['computer', 'computer'],
                        ['real', 'real']
                    ])('retrieve objects for player of types: %s, %s', (playerOneType, playerTwoType) => {
                        events.emit('player_types_selected', {playerOneType: playerOneType, playerTwoType: playerTwoType});
                        
                        for (i=0; i<10; i++) events.emit('ship_placed');

                        expect(MockCallback.mock.calls[0][0].playerOneObject.type).toBe(playerOneType);
                        expect(MockCallback.mock.calls[0][0].playerTwoObject.type).toBe(playerTwoType);
                    });

                });
            
            });

        });

    });

});