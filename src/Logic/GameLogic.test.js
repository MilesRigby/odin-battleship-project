import GameLogic from "./GameLogic.js";

import { eventsConstructor } from "../Events/events.js";


describe('Game logic handler', () => {

    let events;

    beforeEach(() => {
        events = eventsConstructor();
        GameLogic(events);
    });

    describe('on event:setup_completed', () => {

        let MockCallback;

        beforeEach(() => {
            MockCallback = jest.fn();
            events.listen('turn_started', MockCallback);

            events.emit('setup_completed');
        });

        it('emits event:turn_started', () => {
            expect(MockCallback).toHaveBeenCalled();
        });

        it('emits event:turn_started, specifying it\'s player 0\'s turn', () => {
            expect(MockCallback.mock.calls[0][0].activePlayer).toBe(0);
        });

    });

    describe('on event:turn_ended', () => {

        let MockCallback;

        beforeEach(() => {
            MockCallback = jest.fn();
            events.listen('turn_started', MockCallback);
        });

        it('emits event:turn_started', () => {
            events.emit('turn_ended');

            expect(MockCallback).toHaveBeenCalled();
        });

        it('emits event:turn_started for player 1 after player 0\'s turn ends', () => {
            events.emit('turn_ended', {activePlayer: 0});

            expect(MockCallback.mock.calls[0][0].activePlayer).toBe(1);
        });

        it('emits event:turn_started for player 0 after player 1\'s turn ends', () => {
            events.emit('turn_ended', {activePlayer: 1});

            expect(MockCallback.mock.calls[0][0].activePlayer).toBe(0);
        });

    });

});