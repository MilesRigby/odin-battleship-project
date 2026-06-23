import ConstructHTMLFromObject from "../ContentBuilder.js";

import playerSelectPanel from "./playerSelectPanel.js";
import handoverPanel from "./handoverPanel.js";

const BuildDynamicContent = () => {

    return ConstructHTMLFromObject({'div': {attributes: {"id": "dynamic-content"}, children: []}});

}


export default BuildDynamicContent;