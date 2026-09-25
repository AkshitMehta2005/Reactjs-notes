import { useState, useEffect } from "react";
import Context from "./pixabayContext";

const pixabayState = (props) => {
    const [Imagedata, setImagedata] = useState([])

    useEffect(() => {
    let takeFromApi = async () => {
      let Api_Key = "47772084-988131670aa66469903dc4ba2";
      let fetchApi = await fetch(
        `https://pixabay.com/api/?key=${Api_Key}&q=london&image_type=photo&pretty=true&per_page=100`
      );

      let data = await fetchApi.json();
      setImagedata(data.hits)
      console.log(data.hits);
    };

    takeFromApi();
  }, []);
  return <Context.Provider value={{
    Imagedata
  }}>{props.children}</Context.Provider>;
};

export default pixabayState;
