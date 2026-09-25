import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
   const navigateTo = useNavigate() 

   let homebtn = ()=>{
    navigateTo('/')
   }
   let previousBtn = ()=>{
    navigateTo(-1)
   }
  return (
    <div>
             
             <button onClick={homebtn}>Home Page</button>
             <button onClick={previousBtn}>Previous Page</button>

    </div>
  )
}

export default About