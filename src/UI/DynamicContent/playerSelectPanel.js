import "./player-select-panel.css";

import events from "../../Events/events.js";
import ConstructHTMLFromObject from "../ContentBuilder.js";

const playerSelectPanel = ConstructHTMLFromObject(

    { "div": {attributes: {"id": "player-select-panel"}, children: [
        { "p": {attributes: {"className": "header", "textContent": "Select Players"}, children: []} },

        { "form": {attributes: {"id": "player-types-form"}, children: [

            {"div": {attributes: {"className": "input-fields"}, children: [

                { "div": {attributes: {}, children: [
                    { "label": { attributes: {"className": "label", "for": "player-one-type"}, children: []} },
                    { "select": { attributes: {"id": "player-one-type", "className": "drop-down", "name": "player-one-type"}, children: [
                        { "option": { attributes: {"value": "real", "textContent": "Human"}, children: [] } },
                        { "option": { attributes: {"value": "computer", "textContent": "Computer"}, children: [] } }
                    ]}}
                ]}},

                { "div": {attributes: {}, children: [
                    { "label": { attributes: {"className": "label", "for": "player-two-type"}, children: []} },
                    { "select": { attributes: {"id": "player-two-type", "className": "drop-down", "name": "player-two-type"}, children: [
                        { "option": { attributes: {"value": "real", "textContent": "Human"}, children: [] } },
                        { "option": { attributes: {"value": "computer", "textContent": "Computer"}, children: [] } }
                    ]}}
                ]}}

            ]}},

            { "button": { attributes: {"className": "submit-button", "type": "submit", "textContent": "Play"}, children: [] } }

        ]}}

    ]}}

);

playerSelectPanel.querySelector('#player-types-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const playerOneType = data.get('player-one-type');
    const playerTwoType = data.get('player-two-type');

    if (playerOneType && playerTwoType) {
        playerSelectPanel.remove();
        events.emit('player_types_selected', {playerOneType: playerOneType, playerTwoType: playerTwoType});
    }
});

events.listen('game_started', () => {
    const dynamicContent = document.querySelector("#dynamic-content");
    dynamicContent.appendChild(playerSelectPanel);
})


export default playerSelectPanel;