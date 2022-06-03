import React, {useState, useEffect} from 'react'
import { FaAlignJustify } from 'react-icons/fa';
import './Navber.scss'
import { images } from '../../contents';

// class FaAlignJustify extends Component {
//   render() {
//     return <FaAlignJustify />  
//   }
// }

 const Navber = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {  setToggleMenu(!toggleMenu)};
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])
  return (  
    <nav>
   
      <div className=''>
        <a href="#">
          <img src={images.logo} alt="logo" />
        </a>
      </div> 
        {(toggleMenu || screenWidth > 900) && (
          <lu className="list">
            {['Home' , 'Abount us' , 'Contact', 'Sungin' ,'Register' ].map((item)=>(
              <li className='items' key={`link-${item}`}>
                <a className='text-center' href={`#${item}`}><nobr>{item}</nobr></a> 
              </li>
            ))}
          </lu>
        )}
      
      <button onClick={toggleNav} className="btn"><FaAlignJustify/></button>
    </nav>
  );
}

export default Navber;
