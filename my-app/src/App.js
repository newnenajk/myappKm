import React from 'react';
import {BrowserRouter ,Routes,Route,} from "react-router-dom";
import { HomeIndex,About ,Blog, Contact,Footer } from './container';
import { Navber } from './components';
import './App.scss';

 const App = () => {
  return (
    <div className='App'>
       <BrowserRouter>
       <Navber/>
        <div className="pages">
          <Routes>
            <Route exact="true" path="/" element={<HomeIndex/>} />
            <Route path="/about"  element={<About/>} />
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>  
       </BrowserRouter>
      
      <Footer/>
    </div>
  );
}
export default App;

