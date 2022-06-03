import React  from 'react';/*  , {useState, useEffect} */
import { NavLink } from "react-router-dom";
import { images } from '../../contents';
import { FaBars , FaTimes} from 'react-icons/fa';
import './Navber.scss';
const Navber = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div >
    <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
     <nav className="navbar" onClick={e => e.stopPropagation()}>
       <div className="nav-container">
       <div className="hover14 column">
           <div>
              <figure>
                <img src={images.logo}/>
              </figure>
            {/*   <span>กรมธนารักษ์</span> */}
          </div>
        </div>
       {/* <img src={images.logo} alt="logo" /> */}
      
         <NavLink exact="true" to="/" className="nav-logo">  กรมธนารักษ์ </NavLink>
         <div className="logo-lightning" ></div> 
         <ul className={click ? "nav-menu active" : "nav-menu"}>
           <li className="nav-item">
             <NavLink exact="true" to="" activeclassname="active" className="nav-links" onClick={click ? handleClick : null} >
               Home
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink exact="true" to="/about" activeclassname="active" className="nav-links" onClick={click ? handleClick : null}>
               About
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink exact="true" to="/blog" activeclassname="active" className="nav-links" onClick={click ? handleClick : null}>
               Blog
             </NavLink>
           </li>
           <li className="nav-item">
              <NavLink exact="true" to="/contact" activeclassname="active" className="nav-links"  onClick={click ? handleClick : null} > 
              Contact Us
              </NavLink>
           </li>
         </ul>
         <div className="nav-icon" onClick={handleClick}>
         {click ? <FaTimes/> :<FaBars/>}
         </div>
       </div>
     </nav>
   </ div>
  );
}

export default Navber;

