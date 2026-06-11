import "./styles.css";

import events from './Events/events.js';//

import BuildStaticContent from "./UI/StaticContent/staticContent.js";
import AddLogic from "./Logic/LogicImports.js";

const pageContent = document.querySelector('#page-content');

pageContent.appendChild(BuildStaticContent());

AddLogic();

events.emit('player_types_selected', {playerOneType: 'real', playerTwoType: 'real'})//