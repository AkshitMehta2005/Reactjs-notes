import React from 'react'
import { useEffect,useState } from 'react'
const op = () => {
  
  

    

  const [counter,SetCounter] = useState(0);


  useEffect(() => {
    
      document.title = counter
      console.log("Useffect is running")
  }, [counter])
  return (
    <div>
        {counter}

        <button onClick={()=>{SetCounter(counter+1)}}>Increment</button>
        <button onClick={()=>{SetCounter(counter-1)}}>Decrement</button>
    </div>
  )
}

export default op