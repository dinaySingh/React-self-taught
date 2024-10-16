import { useState } from 'react'
import './App.css'


// WE use hook to cahnge multiple UI in a same time 

function App() {
  // by default it will create const but we have to change value again again so we write let 
  // const [counter, setcounter] = useState(10)

  // its not mandatory to write setxyz we can write anything but for simplify we use set 
  let [counter, setcounter] = useState(3)
// let counter = 15

const addvalue = ()=>{
  // console.log("value", Math.floor(Math.random()*10) , counter)
  counter += 1
  if(counter <= 20 ){
    setcounter(counter)
  }else {
    alert("You have reached max value")
  }
}

const removeValue = ()=>{
  if(counter >= 1){
    setcounter(counter - 1)
  }else{
    alert("you reached minimum value")
  }
}
  return (
    <>
     <h1>Learning React Day {counter} </h1>
     {/* <h2>Counter value: {counter}</h2> */}
     <button
     onClick={addvalue}
     >Next Day</button>
     <button
     onClick={removeValue}
     >Previous Day</button>
    </>
  )
}

export default App
