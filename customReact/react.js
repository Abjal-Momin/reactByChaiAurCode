// Create a function to render it 
function customRender(reactElement, mainContainer) {
  const DomElement = document.createElement(reactElement.type);
  // Element Created
  DomElement.innerHTML = reactElement.Children;
  // child is addded
  for (const prop in reactElement.props) {
    // adding attributes by loop
    if (prop === "children") continue;
    DomElement.setAttribute(prop, reactElement.props[prop]);
  }

  mainContainer.appendChild(DomElement);
}

// create custom a tag with object
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  Children: "Click to visit Google",
};

// get root location
const mainContainer = document.getElementById("root");

// pass both variables to function
customRender(reactElement, mainContainer);
