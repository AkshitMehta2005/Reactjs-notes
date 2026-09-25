import React from 'react'

const Event = () => {
    const HandleClick = ()=>{
        alert('Button is clicked')
    } 

    const addition = (a)=>{
        alert(a+10)
    }
  return (
    <div>
        
        <h1>Event</h1>
        <button onClick={HandleClick}>click</button>
        {/* for paramerterised event use call back to prevent from prerender */}
        <button onClick={()=>addition(10)}>Add</button> 
        
    </div>
  )
}

export default Event