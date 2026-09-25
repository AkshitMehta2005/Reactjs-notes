import React from 'react'
import { useState } from 'react'
const Op = () => {
    const [counter, setCounter] = useState(0)
    
    const increment = ()=>{
        setCounter(counter+1);
    }
    const decrement = ()=>{
        setCounter(counter-1);
    }

  return (
    <div>
        {counter}
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Op