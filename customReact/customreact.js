import { Children } from "react"
function customRender(reactElement,container){
    /*
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHtml = reactElement.Children
    domElement.setAttribute('target',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElemnt)
    */

    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.Children
    for(const prop in reactElement.props){
        if(prop===Children) continue;
        domElement.setAttribute(props, reactElement.props[props])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props :{
        href :'https://google.com',
        target:'-blank'
    },
    Children:'Click me to visit google'
}
const mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer)
