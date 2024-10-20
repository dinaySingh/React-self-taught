import { useCallback, useRef, useEffect, useState} from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numallow, setnumallow] = useState(false)
  const [specialChar, setspecialChar] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallow) str += "0123456789"
    if (specialChar) str += "!@#$%^&*_[]{};:',<>/?|"

    for (let i = 0; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(character)
      // charAt take value from which number word exist
    }
    setpassword(pass)

  }, [length, numallow, specialChar])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  }, [password])
  // The ? (optional chaining) ensures that if passwordRef is null or undefined, it won’t cause an error

  useEffect(() => {
    passwordGenerator()
  }, [length, specialChar, numallow, passwordGenerator]
  )

  return (

    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-slate-900">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setlength(e.target.value) }}
          />
          <label className='font-bold'>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numallow}
            id="numberInput"
            onChange={() => {
              setnumallow((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" className='font-bold'>Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={specialChar}
            id="characterInput"
            onChange={() => {
              setspecialChar((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput" className='font-bold'>Characters</label>
        </div>
        <div className="flex items-center gap-x-1">
          <button
            onClick={passwordGenerator}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg hover:bg-blue-900 hover:font-bold"
          >
            <i class="ri-refresh-line"> New</i>
          </button>
        </div>
      </div>
    </div>
  )
}
export default App
