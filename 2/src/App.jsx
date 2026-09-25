import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import for Router
import About from './pages/About';
import Help from './pages/Help';
import Home from './pages/Home';
import Cources from './pages/cources';
import Cources_Detail from './pages/cources_Detail';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      {/* If you want to use other components like UseEffect, FetchDataApi, Forms, uncomment them here */}
      {/* <UseEffect /> */}
      {/* <FetchDataApi /> */}
      {/* <Forms /> */}
      
      {/* Routing setup */}
      <Router>
        <Routes>
          {/* Define routes for different pages */}
           <Route path="/" element={<Home></Home>} />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Cources" element={<Cources />} />
          <Route path="/Cources/:id" element={<Cources_Detail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
