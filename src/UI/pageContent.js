import ContentBuilder from "./ContentBuilder.js";
import GameBoardUI from "./gameBoardUI.js";

const contentObject = {

    "div": { attributes: { "id": "page-content" }, children: [

        {"div": { attributes: { "className": "player" }, children: [
            {"p": { attributes: { "className": "player-name" }, children: []}},
            {"div": { attributes: { "className": "game-board", "data-active": "false" }, children: GameBoardUI()}}
        ]}},
        {"div": { attributes: { "className": "player" }, children: [
            {"p": { attributes: { "className": "player-name" }, children: []}},
            {"div": { attributes: { "className": "game-board", "data-active": "false" }, children: GameBoardUI()}}
        ]}},

        {"div": { attributes: { "className": "handover-background", "hidden": "true" }, children: [
            {"div": { attributes: { "className": "handover-disp" }, children: [
                {"p": { attributes: { "className": "handover-text"}, children: []}},
                {"button": { attributes: { "className": "handover-button" }, children: []}}
            ]}}
        ]}},

        {"div": { attributes: { "className": "victory-disp", "hidden": "true" }, children: [
            {"p": { attributes: { "className": "victory-text"}, children: []}}
        ]}},

        {"form": { attributes: { "className": "ship-form", "hidden": "true" }, children: [
            {"p": { attributes: { "className": "ship-form-head" }, children: []}},
            {"label": { attributes: { "for": "ship-x-pos" }, children: []}},
            {"input": { attributes: { "id": "ship-x-pos", "type": "text", "name": "xPos", "placeholder": "x: 1-10" }, children: []}},
            {"label": { attributes: { "for": "ship-y-pos" }, children: []}},
            {"input": { attributes: { "id": "ship-y-pos", "type": "text", "name": "yPos", "placeholder": "y: 1-10" }, children: []}},
            {"label": { attributes: { "for": "ship-orientation" }, children: []}},
            {"input": { attributes: { "id": "ship-orientation", "type": "text", "name": "orientation", "placeholder": "1-4 (N/E/S/W)" }, children: []}},
            {"button": { attributes: { "type": "submit", "hidden": "true" }, children: [] }}
        ]}},

        {"form": { attributes: { "className": "player-select-form" }, children: [
            {"p": { attributes: { "innerText": "Select Players" }, children: [] }},
            {"div": { attributes: { "className": "player-select-options" }, children: [
                {"div": { attributes: { "className": "select-field" }, children: [
                    {"label": { attributes: { "for": "player-1-type", "innerText": "Player 1" }, children: []}},
                    {"select": { attributes: { "id": "player-1-type", "name": "player-1-type" }, children: [
                        {"option": { attributes: { "value": "real", "innerText": "Human" }, children: []}},
                        {"option": { attributes: { "value": "computer", "innerText": "Computer" }, children: []}}
                    ]}}
                ]}},
                {"div": {attributes: { "className": "select-field" }, children: [
                    {"label": { attributes: { "for": "player-2-type", "innerText": "Player 2" }, children: []}},
                    {"select": { attributes: { "id": "player-2-type", "name": "player-2-type" }, children: [
                        {"option": { attributes: { "value": "real", "innerText": "Human" }, children: []}},
                        {"option": { attributes: { "value": "computer", "innerText": "Computer" }, children: []}}
                    ]}}
                ]}}
            ]}},
            {"button": { attributes: { "type": "submit", "innerText": "Start" }, children: []}}
        ]}}

    ]}

}

const page = () => {

    const pageContent = ContentBuilder(contentObject);

    const playerUIs = pageContent.getElementsByClassName("player");
    const boards = [ playerUIs[0].getElementsByClassName("game-board")[0], playerUIs[1].getElementsByClassName("game-board")[0] ];

    const playerTypeForm = pageContent.getElementsByClassName('player-select-form')[0];
    const getPlayerTypes = (dataSender) => {
        playerTypeForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(event.target);
            
            const data = [];
            for ( let [ key, value ] of formData.entries() ) {
                data.push(value);
            }

            playerTypeForm.setAttribute("hidden", true);

            dataSender(data);
        })
    }

    const DisplayPlayerName = (player, playerName) => {
        playerUIs[player].getElementsByClassName("player-name")[0].innerText = playerName;
    }

    const handover = pageContent.getElementsByClassName("handover-background")[0];
    const SetupHandover = (StartNextPlayerTurn) => {
        const disp = handover.getElementsByClassName("handover-disp")[0];
        disp.getElementsByClassName("handover-text")[0].innerText = "Turn End";
    
        const button = disp.getElementsByClassName("handover-button")[0];

        button.innerText = "Continue";
        button.addEventListener("click", () => {
            handover.setAttribute("hidden", true);
            StartNextPlayerTurn();
        });
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

    const DisplayShips = (player, shouldDisplay) => {
        boards[player].dataset.active = shouldDisplay;
    }

    const DisplayTurnHandover = () => {
        handover.removeAttribute("hidden");
    }


    const victoryDisp = pageContent.getElementsByClassName("victory-disp")[0];
    const victoryText = victoryDisp.getElementsByClassName("victory-text")[0];

    const DisplayVictory = (player, real) => {
        const playerName = playerUIs[player].getElementsByClassName("player-name")[0].textContent;
        let message;

        if (real) { message = "Congratulations " + playerName + "!"; }
        else { message = playerName + " wins." }

        victoryText.textContent = message;
        victoryDisp.removeAttribute("hidden");
    }


    const shipPosForm = pageContent.getElementsByClassName("ship-form")[0];
    let sendShipData;
    shipPosForm.addEventListener("submit", (event) => {
        
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {};
        for (let [ key, value ] of formData.entries() ) {
            data[key] = value;
        }
        
        const shipData = [{ x: data.xPos - 1, y: data.yPos - 1 }, data.orientation ];
        sendShipData(shipData);

        shipPosForm.setAttribute("hidden", true);
        
    });

    const shipMessageField = shipPosForm.getElementsByClassName("ship-form-head")[0];
    const DisplayShipPosForm = (dataSender, player, length) => {
        sendShipData = dataSender;
        const playerName = playerUIs[player].getElementsByClassName("player-name")[0].textContent
        const shipPosMessage = playerName + ", place ship of length " + length;

        shipMessageField.textContent = shipPosMessage;
        shipPosForm.removeAttribute("hidden");
    }

    return {
        content: { pageContent },
        setup: {
            DisplayPlayerName,
            SetupHandover,
            SetBoardTargetLogic
        },
        runtime: {
            UpdateBoard,
            DisplayShips
        },
        temps: {
            DisplayTurnHandover,
            DisplayVictory,
            DisplayShipPosForm,
            getPlayerTypes
        }
    }

}

export default page;