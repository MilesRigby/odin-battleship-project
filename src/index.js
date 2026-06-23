import "./styles.css";

import BuildDynamicContent from "./UI/DynamicContent/dynamicContent.js";
import BuildStaticContent from "./UI/StaticContent/staticContent.js";

import AddLogic from "./Logic/LogicImports.js";

const pageContent = document.querySelector('#page-content');
pageContent.appendChild(BuildStaticContent());
pageContent.appendChild(BuildDynamicContent());

AddLogic();