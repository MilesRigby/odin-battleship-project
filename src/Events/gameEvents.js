import Player from '../Objects/player.js';

// Temporary hard coded ship placements for UI testing
const shipPlacements = [
    [ {x: 4, y: 1}, 1 ],
    [ {x: 7, y: 5}, 2 ],
    [ {x: 1, y: 2}, 0 ],
    [ {x: 3, y: 4}, 3 ], // Clashes with above ship, should not get placed resulting in five identical ship placements per board
    [ {x: 8, y: 8}, 3 ],
    [ {x: 3, y: 8}, 2 ],
];

const GameEvents = (UIController) => {

    const players = [
        Player('real'),
        Player('computer')
    ];

    let currentPlayer = 0;

    let player = players[currentPlayer];
    let opponent = players[1 - currentPlayer];

    const shipLengths = [2, 3, 3, 4, 5];

    const setup = async () => {

        UIController.SetupHandover(_StartTurn);

        for (let playerIndex = 0; playerIndex < players.length; playerIndex++) {
            const player = players[playerIndex];
            const opponent = players[1-playerIndex];

            const playerName = (player.type === 'real' ? 'Player': 'Computer') + 
                               (player.type === opponent.type ? ` ${playerIndex + 1}` : '');

            UIController.DisplayPlayerName(playerIndex, playerName);

            UIController.DisplayShips(playerIndex, !(player.type !== 'real' && opponent.type === 'real') );

            for (const shipLength of shipLengths) {
                await _addShip(player, shipLength);
                UIController.UpdateBoard(playerIndex, player.board.getBoardState())
            }

            UIController.DisplayShips(playerIndex, opponent.type !== 'real');

            if (player.type !== 'real') {
                UIController.SetBoardTargetLogic(cb_TargetSpace, playerIndex);
            }

        }

        _StartTurn();
    }

    const _addShip = async (player, shipLength) => {
        while (true) {
            const shipPlacement = await _getShipPlacement();
            if ( player.board.addShip(shipPlacement[0], shipLength, shipPlacement[1]) ) break;
        }
    }

    let shipNum = 0;
    const _getShipPlacement = () => {
        const shipPlacement = shipPlacements[shipNum];
        shipNum = (shipNum + 1) % shipPlacements.length;
        return new Promise((resolve) => {
            resolve(shipPlacement);
        });
    }

    const cb_TargetSpace = (pos, board) => {
        if ( board !== 1 - currentPlayer ) { return; }

        const targetBoard = players[board].board;
        if ( targetBoard.receiveAttack(pos) ) {
            UIController.UpdateBoard(board, targetBoard.getBoardState())

            if (targetBoard.allSunk()) { _PlayerWin(); }
            else { _EndTurn(); }

            return true;
        }

        return false;
    }

    const _StartTurn = async () => {
        UIController.DisplayShips(currentPlayer, !(player.type !== 'real' && opponent.type === 'real') );

        if ( player.type !== 'real' ) {
            await new Promise((resolve) => setTimeout(() => {resolve()}, 1000));
            
            while ( true ) {
                const pos = {
                    x: Math.floor(Math.random() * 10),
                    y: Math.floor(Math.random() * 10)
                }
                
                if ( cb_TargetSpace(pos, 1 - currentPlayer) ) {
                    break;
                }
            }
        }
    }

    const _EndTurn = () => {
        UIController.DisplayShips(currentPlayer, opponent.type !== 'real');
        currentPlayer = 1 - currentPlayer;
        player = players[currentPlayer];
        opponent = players[1 - currentPlayer];

        if ( player.type === 'real' && opponent.type === 'real' ) {
            UIController.DisplayTurnHandover();
        }

        if ( player.type !== 'real' ) {
            _StartTurn();
        }
    }

    const _PlayerWin = () => {
        currentPlayer = 2;
    }

    return {setup}

};

export default GameEvents;