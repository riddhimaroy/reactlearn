//to learn hooks

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1)
  
  // let counter = 5

  const addValue = () => {
    console.log(counter);
    counter = counter + 1;
    setCounter(counter);
  }

  const subValue = () => {
    console.log(counter);
    if (counter>0){
      counter = counter - 1;
    }
    else
    {
      alert("too small");
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase</button>
      <br  />
      <br  />
      <button onClick = {subValue}>Decrease</button>
    </>
  )
}

export default App
