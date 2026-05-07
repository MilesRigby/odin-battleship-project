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

        it('emits event:ship_placement_initialised with the first player object created', () => {
            const MockPlayerOne = {};
            const MockPlayerTwo = {};
            const MockCallback = jest.fn();
            const MockPlayerConstructor = jest.fn()
                .mockImplementation(() => MockPlayerOne)
                .mockImplementation(() => MockPlayerTwo);
            GameSetup({events: events, Player: MockPlayerConstructor});
            events.listen('ship_placement_initialised', MockCallback);

            events.emit('player_types_selected');

            expect(MockCallback.mock.calls[0][0].playerObj).toEqual(MockPlayerOne);
        });

        it('emits event:ship_placement_initialised with the first player object created', () => {
            const MockCallback = jest.fn();
            GameSetup({events: events});
            events.listen('ship_placement_initialised', MockCallback);

            events.emit('player_types_selected');

            expect(MockCallback.mock.calls[0][0].shipLength).toEqual(2);
        });

    });

});