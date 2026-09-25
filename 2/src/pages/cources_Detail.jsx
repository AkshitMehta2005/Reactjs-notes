import React from 'react'
import { useParams } from 'react-router-dom'
import Cources from './cources'
import { Link } from 'react-router-dom'
const cources_Detail = () => {
    let arr = [
        {id:'PYTHON0001' , cource_name:"Python Stack",duration:"5 month"},
        {id:'MERN0002' , cource_name:"MERN Stack",duration:"4 month"},
        {id:'JAVA0003' , cource_name:"JAVA Stack",duration:"6    month"}
      ]
    const {id} = useParams()
    const dataFilter = arr.filter((data)=>(data.id===id));
    
  return (
    <div>
        <h1>{dataFilter[0].id}</h1>     
        <h1>{dataFilter[0].cource_name}</h1>     
        <h1>{dataFilter[0].duration}</h1>     
        
        <button >
            <Link to={"/Cources"}>All Cources</Link>
        </button>
    </div>
  )
}

export default cources_Detail