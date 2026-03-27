import "./styles.css";
import pageConstructor from './UI/pageContent.js';
import GameEvents from "./Events/gameEvents.js";

const page = pageConstructor();

document.body.appendChild(page.pageContent);

const gameEvents = GameEvents(page);

gameEvents.setup();