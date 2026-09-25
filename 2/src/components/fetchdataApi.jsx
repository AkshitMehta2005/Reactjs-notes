import React, { useState,useEffect } from 'react';

const FetchDataApi = () => {

    const [Arr, setArr] = useState([])
  useEffect(() => {
    const datafetch = async () => {
      const fetchapi = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await fetchapi.json();
      setArr(data)
      console.log(data);
    };

    datafetch();
  }, []);

  return (
    <div>
        <h1>Fetch data</h1>

        <br />
        
      {
        Arr.map((e)=>(
            <div style={{borderRadius:"10px" , border:"5px solid grey",margin:"10px"}} key={e.id}>
             <h1>Title:- {e.title}</h1> 
             <h2>Completed: {e.completed ? "Yes" : "No"}</h2> {/* Boolean converted */}
             
            </div>
        ))
      }
    </div>
  );
};

export default FetchDataApi;
