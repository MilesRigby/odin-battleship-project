import './staticContentArea.css';

import ConstructHTMLFromObject from "../ContentBuilder.js";

import BuildBoards from "./BuildBoards.js";
import BuildPlayerNames from './PlayerNames.js';

const BuildStaticContent = () => {

    const staticContent = ConstructHTMLFromObject({ "div": { attributes: {"id":"static-content"}, children: []} });

    staticContent.appendChild(BuildPlayerNames());
    staticContent.appendChild(BuildBoards());

    return staticContent;

}

export default BuildStaticContent;