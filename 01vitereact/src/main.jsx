import { StrictMode } from 'react'
 import React from 'react'
import { createRoot } from 'react-dom/client'
 import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href:"https://google.com",target:'_blank'},
  'Click me to visit google!'

)
 

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
