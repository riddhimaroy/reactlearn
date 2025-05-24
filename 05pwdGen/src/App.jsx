// learn useCallback, useEffect, useRef

import {useCallback, useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAl, setNumAl] = useState(false)
  const [charAl, setChrAl] = useState(false)
  const [pwd, setPwd] = useState("")

  const pwdRef = useRef(null);

  const pwdGen = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    if(numAl) str = str + "1234567890"
    if(charAl) str = str + "!@#$%^&*()[]\{}|;':,./<>?"

    for(let i=0; i<length; i++)
    {
      let c = Math.floor(Math.random() * str.length + 1)
      pass = pass + str[c]
    }

    setPwd(pass);

  }, [length, numAl, charAl, setPwd])

  const copyPwd = useCallback(() =>{
    pwdRef.current?.select()
    window.navigator.clipboard.writeText(pwd)
  }, [pwd])

  //usecallback helps it to keep refreshing the function
  //everytime the deps change. its called only when the button is clicked

  useEffect(() => {
    pwdGen()
  }, [length, numAl, charAl])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg
      px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className = 'flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value = {pwd}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref ={pwdRef}
          >
            </input>
            <button 
            onClick = {copyPwd} 
            className = 'outline-none text-white text-center bg-blue-700 px-2 shrink-0'>copy</button>
        </div>
        <div className = 'flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
                type = "range"
                min = {6}
                max = {100}
                value = {length}
                className = 'cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}>
            </input>
            <label>Length: {length}</label>
            <input 
                type='checkbox'
                defaultChecked = {numAl}
                id = 'numberInput'
                onChange = {() => {
                  setNumAl((prev) => !prev);
                }}
                ></input>
                <label htmlFor='numberInput'>Number</label>
                <input 
                type='checkbox'
                defaultChecked = {charAl}
                id = 'charInput'
                onChange = {() => {
                  setChrAl((prev) => !prev);
                }}
                ></input>
                <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
