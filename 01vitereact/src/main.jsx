import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp(){
  return(
    <div>
      <h1>Hello Guys Dinay Here </h1>
    </div>
  )
}
const AnotherElement = (
  <a href="https:/google.com" target='_blank'> Vist Google</a>
)

// const reactElement = {
//   type: "a",
//   props: {
//       href: "https://chatgpt.com/c/67057f19-3278-800b-bbfe-279c4222a2af",
//       target: "_blank",
//   },
//   children: "click me to visit google"
// }
// we can't provide this directly to react we have to provide proper rules for that for example

const ReactElement = React.createElement(
  'a',
  {href: "https://Instagram.com",target:"_blank"},
  'Click here to open insta'
)
// we have to give parameters to React.createElements and this is fixed 1.type,2.key,3.ref 4.props now we can call this directly


createRoot(document.getElementById('root')).render(

  <App/>
    // <MyApp />

// MyApp()
// react is just a javascript at the end of the day so we can call the  as MyApp() but for better understanding and better comunication in group we use <MyApp> (funtion name should be uppercase)

// AnotherElement

// ReactElement
)

