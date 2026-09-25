import React from 'react'

const person1 = ({name,age}) => {
  return (
    <>
    <h1>Name:- {name}</h1>
    {age>18?(<>you can drive</>):(<>you can not drive</>)}
    </>
  )
}

export default person1