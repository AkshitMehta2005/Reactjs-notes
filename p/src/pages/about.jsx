import React from 'react'
import {useNavigate} from 'react-router-dom'
const about = () => {
    const NavigateTo = useNavigate()
    const handler = ()=>{
     NavigateTo('/')
    }
    const back = ()=>{
        NavigateTo(-1)
    }
  return (
    <div>
        about
        <button onClick={handler}>Home</button>
        <button onClick={back}>Back</button>

    </div>
  )
}

export default about