import React from 'react'
import { useContext } from 'react'
import context from '../contextApi/pixabayContext';
const image = () => {
  const {Imagedata} = useContext(context);  
  return (
    <div>
        {Imagedata.map((image)=>(
            <div key={image.id}>
                <div className="item">
                    <img src={image.largeImageURL} alt="" />
                </div>
            </div>
        ))}
    </div>
  )
}

export default image