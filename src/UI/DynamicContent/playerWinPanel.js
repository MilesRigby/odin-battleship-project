import "./playerWinPanel.css";

import events from "../../Events/events.js";
import ConstructHTMLFromObject from "../ContentBuilder.js";

const playerWinPanel = ConstructHTMLFromObject({

    "div": {attributes: {"id": "player-win-panel", "className": "panel"}, children: [
        { "p": {attributes: {"className": "header"}, children: []}}
    ]}

});

const names = [];

events.listen('player_names_determined', ({playerNames = []} = {}) => names.push(...playerNames));

events.listen('player_won', ({player = 0} = {}) => {

    playerWinPanel.querySelector('.header').textContent = "Congratualtions " + names[player] + "!";

    document.querySelector('#dynamic-content').appendChild(playerWinPanel);

});

export default playerWinPanel;