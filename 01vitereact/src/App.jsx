import Chai from "./chai"

function App() {
const Name = "Dinay Singh Nakoti"
  return (
  <div>

<h1>SHOWING THIS THROUGH VITE + REACT | Dinay </h1> 
<h2>0. in vite we should use .jsx not .js</h2> 
<h2>1. in vite we should always start function name with uppercase</h2> 
<h2>2. you can only return one element</h2>
<h2>3. We can use empty element and we called them <strong>fragment</strong></h2>
<h1> 3.If we use vite method there will be by default script added in html file.it will not added by package-lock.json </h1>
<Chai/>
<h1>My Name Is {Name} </h1>
{/*When we use variable we can use like this within curly brases {Name} but  this is Evaluated Expresion and we can evaluate under curly brases   */}
</div>
  )
}

export default App