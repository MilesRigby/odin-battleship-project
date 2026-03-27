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

    const shipLengths = [2, 3, 3, 4, 5];

    const setup = async () => {

        UIController.SetupHandover(_StartTurn);

        for (let playerIndex = 0; playerIndex < players.length; playerIndex++) {
            const player = players[playerIndex];
            const playerName = (player.type === 'real' ? 'Player': 'Computer') + 
                               (player.type === players[1 - playerIndex].type ? ` ${playerIndex + 1}` : '');

            UIController.DisplayPlayerName(playerIndex, playerName);

            UIController.DisplayShips(playerIndex, 'true');

            for (const shipLength of shipLengths) {
                await _addShip(player, shipLength);
                UIController.UpdateBoard(playerIndex, player.board.getBoardState())
            }

            UIController.DisplayShips(playerIndex, 'false');

            UIController.SetBoardTargetLogic(cb_TargetSpace, playerIndex);

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
        }
    }

    const _StartTurn = () => {
        UIController.DisplayShips(currentPlayer, 'true');
    }

    const _EndTurn = () => {
        UIController.DisplayShips(currentPlayer, 'false');
        currentPlayer = 1 - currentPlayer;
        UIController.DisplayTurnHandover();
    }

    const _PlayerWin = () => {
        currentPlayer = 2;
    }

    return {setup}

};

export default GameEvents;