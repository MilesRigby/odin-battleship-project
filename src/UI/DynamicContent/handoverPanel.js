import './handover-panel.css';

import events from '../../Events/events.js';
import ConstructHTMLFromObject from '../ContentBuilder.js';

const playerTypes = [];
let bothHuman;

let player;

const handoverPanel = ConstructHTMLFromObject({

    "div": {attributes: {"id": "handover-panel", "className": "panel"}, children: [
        { "p": {attributes: {"className": "header", "textContent": "Please pass to next player"}, children: []}},
        { "button": {attributes: {"className":"close-panel", "textContent": "Start Turn"}, children: []} }
    ]}

});

handoverPanel.querySelector('.close-panel').addEventListener('click', (e) => {
    e.preventDefault();

    handoverPanel.remove();
    events.emit('handover_complete', {player: player, type: playerTypes[player], oppType: playerTypes[1-player]});
});

events.listen('player_types_selected', ({playerOneType = 'real', playerTwoType = 'real'} = {}) => {
        playerTypes.push(playerOneType);
        playerTypes.push(playerTwoType);

        bothHuman = (playerOneType === 'real' && playerTwoType === 'real');
});

events.listen('turn_started', ({playerNo = 0} = {}) => {
    player = playerNo;

    if (bothHuman) {
        const dynamicContent = document.querySelector("#dynamic-content");
        dynamicContent.appendChild(handoverPanel);
    } else {
        events.emit('handover_complete', {player: player, type: playerTypes[player], oppType: playerTypes[1-player]});
    }
});


export default handoverPanel;