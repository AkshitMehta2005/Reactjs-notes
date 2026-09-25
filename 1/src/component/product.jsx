import React from 'react'

const product = (props) => {
  return (
    <div>
        {/* 1 */}

        <h1>Product</h1>

        <h2>Title:- {props.title}</h2>
        <h2>Price:- {props.price}</h2>


        

    </div>
  )
}

export default product