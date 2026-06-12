import ConstructHTMLFromObject from "../ContentBuilder.js";

import playerSelectPanel from "./playerSelectPanel.js";

const BuildDynamicContent = () => {

    return ConstructHTMLFromObject({'div': {attributes: {"id": "dynamic-content"}, children: []}});

}


export default BuildDynamicContent;