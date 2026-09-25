import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './pages/about'
import Cources from './pages/cources'
import Detailcources from './pages/detailcources'
import Home from './pages/home'

const App = () => {
  return (
    <div>
       
       <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}/>
          <Route path='/cources' element={<Cources/>}/>
          <Route path='/cources/:id' element={<Detailcources/>}/>
           
        </Routes>
       </Router>

    </div>
  )
}

export default App