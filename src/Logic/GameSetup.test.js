import GameSetup from './GameSetup.js'

import { eventsConstructor } from '../Events/events.js'

describe('Game setup logic', () => {

    describe('on event:player_types_selected', () => {

        it('creates Player objects using the provided player types', () => {
            const events = eventsConstructor();
            const MockPlayerConstructor = jest.fn();
            GameSetup({events: events, Player: MockPlayerConstructor});

            const MockPlayerOneType = 'kuj34y6gbjh';
            const MockPlayerTwoType = '4ijky6gewbk';
            events.emit('player_types_selected', {playerOneType: MockPlayerOneType, playerTwoType: MockPlayerTwoType});

            expect(MockPlayerConstructor.mock.calls[0][0]).toBe(MockPlayerOneType);
            expect(MockPlayerConstructor.mock.calls[1][0]).toBe(MockPlayerTwoType);
        });

    });

});