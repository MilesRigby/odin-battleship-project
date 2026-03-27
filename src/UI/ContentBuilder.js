// Constructs DOM objects from javascript objects of the above format
const ConstructHTMLFromObject = (object) => {

    // Retrieve element name ("p", "div", "input", etc)
    const elementName = Object.keys(object)[0];

    // Create element requested
    const element = document.createElement(elementName);

    // Retrieve list of attributes to assign
    const attributes = object[elementName].attributes;

    // Assign all provided attributes and their values, e.g. element.id, element.className, element.innerText, etc
    for (const [attribute, assignment] of Object.entries(attributes)) {
        if (attribute.startsWith("data-")) {
            element.setAttribute(attribute, assignment);
        } else {
            element[attribute] = assignment;
        }
    }

    // Retrieve child elements
    const children = object[elementName].children;

    // Create all required child elements using recursive calls and append them to the element
    for (let i=0; i<children.length; i++) {
        const child = ConstructHTMLFromObject(children[i]);
        element.appendChild(child);
    }

    // Return constructed element tree for use in the DOM
    return element;

}

export default ConstructHTMLFromObject;