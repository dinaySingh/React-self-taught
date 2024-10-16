import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
let MyObject = {
  name : "Dinay",
  RollNo: 14
}

let MyArray = [1,2,3]
  return (
    <>
      <h1 className='text-red-400 bg-black text-4xl rounded '>Tailwind Learning</h1>

{/* <Card nameOfObject = {MyObject} myArray = {MyArray}/> */}
<Card name= "Vinay" tech="Node.js"/>
<Card name= "Dinay "/>
    </>
  )
}

export default App
