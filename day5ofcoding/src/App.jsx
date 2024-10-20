import { useState } from 'react'


function App() {
const [color, setcolor] = useState("red")


  return (
    <>
     <div className='w-full h-screen '
     style={{backgroundColor: color}}
     >
<div className='w-full h-10 flex justify-center  '>
  <div className='px-4 my-10 flex  justify-around rounded-3xl gap-3 '>
    <button 
    onClick={()=>setcolor("white")}
    className='w-20 h-10 rounded-lg bg-white border-2 border-gray-900'>White</button>
    <button 
        onClick={()=>setcolor("blue")}
    className='w-20 h-10 rounded-lg bg-blue-500 border-2 border-gray-900'>Blue</button>
    <button 
        onClick={()=>setcolor("yellow")}
    className='w-20 h-10 rounded-lg bg-yellow-300 border-2 border-gray-900'>Yellow</button>
    <button 
        onClick={()=>setcolor("green")}
    className='w-20 h-10 rounded-lg bg-green-700 border-2 border-gray-900'>Green</button>
    <button 
        onClick={()=>setcolor("orange")}
    className='w-20 h-10 rounded-lg bg-orange-400 border-2 border-gray-900'>Orange</button>
    <button 
        onClick={()=>setcolor("gray")}
    className='w-20 h-10 rounded-lg bg-gray-400 border-2 border-gray-900'>Gray</button>
    <button 
        onClick={()=>setcolor("purple")}
    className='w-20 h-10 rounded-lg bg-purple-400 border-2 border-gray-900'>Purple</button>
    
    <button 
        onClick={()=>setcolor("black")}
    className='w-20 h-10 rounded-lg bg-black text-white border-2 border-gray-900'>Black</button>
    
  </div>
</div>
     </div>
    </>
  )
}

export default App

// or else we can do 
// import { useState } from 'react';

// function App() {
//   const [color, setColor] = useState("#ff0000");

//   return (
//     <div className="w-full h-screen" style={{ backgroundColor: color }}>
//       <div className="w-full h-10 flex justify-center bottom-20 fixed">
//         <input
//           type="color"
//           value={color}
//           onChange={(e) => setColor(e.target.value)}
//           className="w-20 h-10 border-2 border-gray-900"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
