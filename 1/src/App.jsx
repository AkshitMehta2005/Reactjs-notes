import React from 'react'
import Product from './component/product'
import Person1 from './component/person1'
import Laptop from './component/laptop'
import Event from './component/Event'
import Counter from './component/Counter'
import AllproductMap from './component/AllproductMap'
import FilterProduct from './component/Filterproduct'
const App = () => {
  return (
    <div>
      {/* 1 */}
{/* 
      <Product title="Samsung galaxy" price={100000}></Product>
      <br />
      <Product title="Apple 15 pro" price={250000}></Product>
      <br /> */}

      {/* 2 conditional rendering */}

      {/* <Person1 name="akshit" age={19}></Person1> */}


      {/* <div>
        <Laptop name="Hp" price={12345} model="pavalien"></Laptop>
        <Laptop name="dell" price={140000} model="G15"></Laptop>
        <Laptop name="Acer" price={1234567876543234} model="Nitro 5 gaming"></Laptop>
      </div> */}


      {/* <div>
        <Event></Event>

      </div> */}

    {/* <div>
    <Counter></Counter>
    </div> */}
    
    <div>
      {/* if product is given in array use map  */}
    {/* <AllproductMap></AllproductMap> */}
    </div>
     
     {/* <div>
      <FilterProduct></FilterProduct>
     </div>
         */}



      

    </div>
  )
}

export default App