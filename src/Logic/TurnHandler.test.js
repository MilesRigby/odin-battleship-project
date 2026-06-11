import TurnHandler from './TurnHandler.js'

import { eventsConstructor } from '../Events/events.js'
import { isWebTarget } from 'webpack-dev-server';

describe('Single turn logic', () => {

    let events;

    jest.spyOn(global, 'setTimeout').mockImplementation((cb) => cb());

    beforeEach(() => {
        events = eventsConstructor();
        TurnHandler({events: events});
    });

    describe('on event:turn_started', () => {

        let MockCallbacks;
        let MockPlayerObjectOne;
        let MockPlayerObjectTwo;
        let MockBoardObjects;

        describe('player type: computer', () => {

            beforeEach(() => {
                MockBoardObjects = [{}, {}];
                MockCallbacks = [jest.fn().mockReturnValue(true), jest.fn().mockReturnValue(true)];
                MockPlayerObjectOne = {type: 'computer', board: {receiveAttack: MockCallbacks[0], getBoardState: () => MockBoardObjects[0], allSunk: () => false}};
                MockPlayerObjectTwo = {type: 'computer', board: {receiveAttack: MockCallbacks[1], getBoardState: () => MockBoardObjects[1], allSunk: () => false}};

                events.emit('player_objects_constructed', {playerOne: MockPlayerObjectOne, playerTwo: MockPlayerObjectTwo});
            });

            describe('calls receiveAttack on opposing player gameboard', () => {

                test.each([[0, 1], [1, 0]])('confirm call, player %i', (playerTurn, targetNo) => {
                    events.emit('turn_started', {playerNo: playerTurn});

                    expect(MockCallbacks[targetNo]).toHaveBeenCalled();
                });

                describe('calls with random coordinates', () => {

                    test.each([
                        [1, 0.15, 1, 0.75, 7],
                        [2, 0.35, 3, 0.55, 5]
                    ])('case %i', (_case, rand1, x, rand2, y) => {
                        jest.spyOn(global.Math, 'random')
                            .mockImplementationOnce(() => rand1)
                            .mockImplementationOnce(() => rand2);

                        events.emit('turn_started', {playerNo: 0});

                        expect(MockCallbacks[1].mock.calls[0][0]).toEqual({x: x, y: y});
                    });

                });

                describe('tries until receiveAttack returns true (successful attack)', () => {

                    test.each([
                        [1, 3],
                        [2, 7]
                    ])('case %i', (_case, finalCallNo) => {
                        for (let i = 0; i < finalCallNo - 1; i++) MockCallbacks[1].mockImplementationOnce(() => false);

                        events.emit('turn_started', {playerNo: 0});

                        expect(MockCallbacks[1].mock.calls.length).toEqual(finalCallNo);
                    });

                });

            });

            describe('emits event:board_state_changed for enemy player', () => {

                let MockCallback;

                beforeEach(() => {
                    MockCallback = jest.fn();
                    events.listen('board_state_changed', MockCallback);
                });

                test('confirm emit', () => {
                    events.emit('turn_started', {playerNo: 0});

                    expect(MockCallback).toHaveBeenCalled();
                });

                it('sends the game board of the opponent', () => {
                    events.emit('turn_started', {playerNo: 0});

                    expect(MockCallback.mock.calls[0][0].boardState).toBe(MockBoardObjects[1]);
                });

                describe('sends the number of the board to be updated (the opponent\'s)', () => {

                    test.each([
                        [0, 1],
                        [1, 0]
                    ])('playerNo = %i', (playerNo, opponentNo) => {
                        events.emit('turn_started', {playerNo: playerNo});

                        expect(MockCallback.mock.calls[0][0].board).toBe(opponentNo);
                    });
                    
                });

            });

            describe('emits event:turn_ended with player number', () => {

                test.each([ [0], [1] ])('player %i', (playerNo) => {
                    const MockCallback = jest.fn();
                    events.listen('turn_ended', MockCallback);
                    events.emit('turn_started', {playerNo: playerNo});

                    expect(MockCallback.mock.calls[0][0].activePlayer).toBe(playerNo);
                });

            });

        });

        describe('player type: real', () => {

            beforeEach(() => {
                MockCallbacks = [jest.fn().mockReturnValue(true), jest.fn().mockReturnValue(true)];
                MockPlayerObjectOne = {type: 'real', board: {receiveAttack: MockCallbacks[0]}};
                MockPlayerObjectTwo = {type: 'real', board: {receiveAttack: MockCallbacks[1]}};

                events.emit('player_objects_constructed', {playerOne: MockPlayerObjectOne, playerTwo: MockPlayerObjectTwo});
            });

            it('does not call receiveAttack', () => {
                events.emit('turn_started', {playerNo: 0});

                expect(MockCallbacks[1]).not.toHaveBeenCalled();
            });

            it('does not emit event:board_state_changed', () => {
                const MockCallback = jest.fn();
                events.listen('board_state_changed', MockCallback);

                events.emit('turn_started', {playerNo: 0});

                expect(MockCallback).not.toHaveBeenCalled();
            });

            it('does not emit event:turn_ended', () => {
                const MockCallback = jest.fn();
                events.listen('turn_ended', MockCallback);

                events.emit('turn_started', {playerNo: 0});

                expect(MockCallback).not.toHaveBeenCalled();
            });

        });

    });

    describe('on event:space_clicked', () => {

        let MockCallback;
        let MockBoardObjects;

        beforeEach(() => {
            MockCallback = jest.fn();

            MockReceiveAttacks = [
                jest.fn(pos => JSON.stringify(pos) === JSON.stringify({x: 7, y: 3})), 
                jest.fn(pos => JSON.stringify(pos) === JSON.stringify({x: 7, y: 3}))
            ];
            MockBoardObjects = [
                {board1: 1},
                {board2: 2}
            ]
            MockPlayerObjects = [
                {type: 'real', board: {receiveAttack: MockReceiveAttacks[0], getBoardState: () => MockBoardObjects[0], allSunk: () => false}},
                {type: 'real', board: {receiveAttack: MockReceiveAttacks[1], getBoardState: () => MockBoardObjects[1], allSunk: () => false}}
            ]
            events.emit('player_objects_constructed', { playerOne: MockPlayerObjects[0], playerTwo: MockPlayerObjects[1] });
        });

        describe('does not call receiveAttack when there is no active turn', () => {

            test('before first turn', () => {
                events.emit('space_clicked', {pos: {x: 7, y: 3}, boardNo: 1});

                expect(MockReceiveAttacks[1]).not.toHaveBeenCalled();
            });

            test('between end of a turn and start of next', () => {
                MockPlayerObjects[0].type = 'computer';
                MockReceiveAttacks[1].mockImplementationOnce(() => true);
                events.emit('turn_started');

                events.emit('space_clicked', {pos: {x: 7, y: 3}, boardNo: 1});

                expect(MockReceiveAttacks[0]).not.toHaveBeenCalled();
            });

        });

        it('does not call receiveAttack when the board and active player turn number are equal', () => {
            events.emit('turn_started');

            events.emit('space_clicked', {pos: {x: 7, y: 3}, boardNo: 0});

            expect(MockReceiveAttacks[0]).not.toHaveBeenCalled();
        });

        it('does not emit events board_state_changed and turn_ended when an invalid position is targeted', () => {
            events.emit('turn_started');
            events.listen('board_state_changed', MockCallback);
            events.listen('turn_ended', MockCallback);

            events.emit('space_clicked', {pos: {x: 7, y: 5}, boardNo: 1});

            expect(MockCallback).not.toHaveBeenCalled();
        });

        describe('player turn is active and position is valid', () => {

            let pos;

            beforeEach(() => {
                pos = {x: 7, y: 3}
            });

            describe('emits event:board_state_changed', () => {

                describe('sends opposing player game board', () => {

                    test.each([
                        [0, 1],
                        [1, 0]
                    ])('player %i\'s turn', (player, target) => {
                        events.emit('turn_started', {playerNo: player});
                        events.listen('board_state_changed', MockCallback);

                        events.emit('space_clicked', {pos: pos, boardNo: target});

                        expect(MockCallback.mock.calls[0][0].boardState).toBe(MockBoardObjects[target]);
                    });
                
                });

            });

        });

    });

});