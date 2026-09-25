import React from 'react'

const FilterProduct = () => {
  const products =[ 
    {id:1,name:"Iphone 15",price:15000,catagory:"mobile"},
    {id:2,name:"Acer",price:15000,catagory:"laptop"},
    {id:3,name:"Iphone 13",price:15000,catagory:"mobile"},
    {id:4,name:"samsung A15",price:15000,catagory:"tablet"},
  ] 
  const filterMobile = products.filter((data) => data.catagory === "mobile");
  return (
    <>
    <div><h1>Filtered product</h1></div>
   

    {filterMobile.map((data)=>(
        <div key={data.id}>
          <h1>Name:- {data.name}</h1>
          <h2>Name:- {data.price}</h2>

          <br />
        </div>
    ))}
    </>
    
  )
}

export default FilterProduct