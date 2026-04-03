import "./styles.css";
import pageConstructor from './UI/pageContent.js';
import GameEvents from "./Events/gameEvents.js";

const page = pageConstructor();

document.body.appendChild(page.content.pageContent);

const gameEvents = GameEvents(page);

gameEvents.setup(await new Promise((resolve) => {
    page.temps.getPlayerTypes(resolve);
}));