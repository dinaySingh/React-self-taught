import { useState } from 'react'
import './App.css'


// WE use hook to cahnge multiple UI in a same time 

function App() {
  // by default it will create const but we have to change value again again so we write let 
  // const [counter, setcounter] = useState(10)

  // its not mandatory to write setxyz we can write anything but for simplify we use set 
  const [counter, setcounter] = useState(3)
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

// FOR INTERVIEW PRACTICE 
// TELL ME WHAT HAPPENDED NEXT AND WHY

    // setcounter(counter - 1)
    // setcounter(counter - 1)
    // setcounter(counter - 1)
    // setcounter(counter - 1)

    // ANSWER: SO IN THIS SENARIO IT WILL NOT UPDATE 4 TIMES BECAUSE OF FIBER (IN FIBER IT WILL UPDATE IN BACHES{IN SIMPLE LANG BULK}) SO IT CHECK AMD KNOW THAT THIS IS SAME WORK WE ARE DOING AGAIN AGAIN SO rEACT WILL PUSH ONLY  ONE TIME 
    // BUT IF WE NEED TO UPDATE VALUE LIKE THIS WE CAN WRITE CODE LIKE 
    // setcounter((PRECOUNTER)=> PRECOUNTER - 1)
    // WE CAN WRITE ANY NAME BUT FOR UNDERSTANDING WE USE PRECOUNTER ---IT WILL CHANGE SET___ STATE 

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
