import ContentBuilder from "./ContentBuilder.js";
import GameBoardUI from "./gameBoardUI.js";

const contentObject = {

    "div": { attributes: { "id": "page-content" }, children: [
        {"div": { attributes: { "className": "player" }, children: [
            {"h3": { attributes: { "className": "player-name" }, children: []}},
            {"div": { attributes: { "className": "game-board" }, children: GameBoardUI()}}
        ]}},
        {"div": { attributes: { "className": "player" }, children: [
            {"h3": { attributes: { "className": "player-name" }, children: []}},
            {"div": { attributes: { "className": "game-board" }, children: GameBoardUI()}}
        ]}},
    ]}

}

const page = () => {

    const pageContent = ContentBuilder(contentObject);

    const playerUIs = pageContent.getElementsByClassName("player");
    const boards = [ playerUIs[0].getElementsByClassName("game-board")[0], playerUIs[1].getElementsByClassName("game-board")[0] ];

    const DisplayPlayerName = (player, playerName) => {
        playerUIs[player].getElementsByClassName("player-name")[0].innerText = playerName;
    }

    const SetBoardTargetLogic = (Logic, player) => {
        const cells = boards[player].getElementsByClassName("board-cell");
        for ( let i=0; i < cells.length; i++) {
            cells[i].addEventListener('click', () => {
                Logic({x: i % 10, y: Math.floor(i/10)}, player);
            });
        }
    }

    const UpdateBoard = (player, boardState) => {
        const board = boards[player];
        const cells = board.getElementsByClassName("board-cell");

        for ( let col=0; col < boardState.length; col++ ) { 
            for ( let row=0; row < boardState[col].length; row++ ) {
                const boardVal = boardState[col][row];

                const cell = cells[col + 10*row];

                if (boardVal > 0) { cell.dataset.state = "ship"; }
                if (boardVal === -1) { cell.dataset.state = "miss"; }
                if (boardVal === -2) { cell.dataset.state = "hit"; }
                // State cannot change to miss after a space is targeted

            }
        }
    }

    return {
        pageContent,
        DisplayPlayerName,
        SetBoardTargetLogic,
        UpdateBoard,
    }

}

export default page;