import React from 'react'
import { Link } from 'react-router-dom'
const cources = () => {
    let arr = [
        {id:'PYTHON0001' , cource_name:"Python Stack",duration:"5 month"},
        {id:'MERN0002' , cource_name:"MERN Stack",duration:"4 month"},
        {id:'JAVA0003' , cource_name:"JAVA Stack",duration:"6    month"}
      ]  
  return (
    <div>
        
       <h1>Cources</h1>
               <ul>
                   {arr.map((data)=>(
                       <div key={data.id}>
                         <li><Link to={`/cources/${data.id}`}>{data.cource_name}</Link></li>
                       </div>
                   ))}
               </ul>
       
    </div>
  )
}

export default cources