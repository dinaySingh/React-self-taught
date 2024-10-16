
function customRender(reactElement, container){
// const domElement = document.createElement(reactElement.type)
// domElement.innerHTML = reactElement.children
// domElement.setAttribute('href', reactElement.props.href)
// domElement.setAttribute('href', reactElement.props.target)

// container.appendChild(domElement)

const domelement = document.createElement(reactElement.type)
for (const prop in reactElement.props) {
    // if (prop === 'chihdren')continue; 
    domelement.setAttribute(prop, reactElement.props[prop])
}
domelement.innerHTML = reactElement.children
container.appendChild(domelement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://chatgpt.com/c/67057f19-3278-800b-bbfe-279c4222a2af",
        target: "_blank",
    },
    children: "click me to visit google"
}
const mainContainer = document.querySelector("#root")


customRender(reactElement, mainContainer)
