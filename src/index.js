import "./styles.css";

import BuildStaticContent from "./UI/StaticContent/staticContent.js";
import BuildDynamicContent from "./UI/DynamicContent/dynamicContent.js";

import AddLogic from "./Logic/LogicImports.js";

const pageContent = document.querySelector('#page-content');
pageContent.appendChild(BuildStaticContent());
pageContent.appendChild(BuildDynamicContent());

AddLogic();