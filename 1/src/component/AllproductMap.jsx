import React from 'react'

const AllproductMap = () => {
  const products =[ 
    {id:1,name:"Iphone 15",price:15000},
    {id:2,name:"Iphone 12",price:15000},
    {id:3,name:"Iphone 13",price:15000},
    {id:4,name:"Iphone 14",price:15000},
  ] 
  return (
    <>
    <div><h1>AllproductMap</h1></div>

    {products.map((data)=>(
        <div key={data.id}>
          <h1>Name:- {data.name}</h1>
          <h2>Name:- {data.price}</h2>

          <br />
        </div>
    ))}
    </>
    
  )
}

export default AllproductMap