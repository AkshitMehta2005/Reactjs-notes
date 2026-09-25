import React from 'react'
import { useParams,Link } from 'react-router-dom'
const detailcources = () => {
    let arr = [
        {id:'PYTHON0001' , cource_name:"Python Stack",duration:"5 month"},
        {id:'MERN0002' , cource_name:"MERN Stack",duration:"4 month"},
        {id:'JAVA0003' , cource_name:"JAVA Stack",duration:"6    month"}
      ]  
   const {id} = useParams()

   const detail = arr.filter((data)=>(data.id===id));
  return (
    <div>
        
        {detail.map((e)=>(
            <div key={detail[0].id}>
              <h1>{detail[0].id}</h1>     
              <h1>{detail[0].cource_name}</h1>     
               <h1>{detail[0].duration}</h1>
            </div>
        ))}

        <button>
        <Link to={'/cources'}>
        All Cources
        </Link>n</button>
    </div>
  )
}

export default detailcources