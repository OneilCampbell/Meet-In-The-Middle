import React from 'react';
import './style.css'
import '../../App.css'


const Header = (props) => {
  return ( 
    <header className="globalHeader">
    <img className='header-logo' src="https://i.imgur.com/QHczvwC.png" alt="Meet in the Middle"/>
     <button className='header-menu-button' type="submit">
      <img className='header-nav-image' src="https://i.imgur.com/jtdADV7.png" alt="submit" />
      </button>
  </header>
   );
}
 
export default Header;