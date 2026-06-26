import './player-names.css';

import events from '../../Events/events.js';
import ConstructHTMLFromObject from "../ContentBuilder.js";

const PlayerName = () => { return {
    "p": { attributes: {"className":"player-name"}, children: [] }
}}

const BuildPlayerNames = () => {

    const playerNames = ConstructHTMLFromObject({
        "div": { attributes: {"id": "player-names"}, children: [
            PlayerName(),
            PlayerName()
        ]}
    });

    const nameFields = playerNames.querySelectorAll(".player-name");

    events.listen('player_objects_constructed', ({playerOne, playerTwo} = {}) => {
        const playerTypes = [playerOne.type, playerTwo.type];
        const displayNames = DetermineDisplayNames(playerTypes);

        nameFields[0].textContent = displayNames[0];
        nameFields[1].textContent = displayNames[1];
    });

    const DetermineDisplayNames = (types) => {
        const names = [];
        names[0] = (types[0] === 'real') ? 'Player': 'Computer';
        names[1] = (types[1] === 'real') ? 'Player': 'Computer';

        if(types[0] === types[1]) {
            names[0] = names[0] + ' 1';
            names[1] = names[1] + ' 2';
        }

        events.emit('player_names_determined', {playerNames: names});

        return names;
    }

    return playerNames;

}

export default BuildPlayerNames;