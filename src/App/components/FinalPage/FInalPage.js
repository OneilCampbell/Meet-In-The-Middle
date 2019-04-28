import React, { Component } from "react";
import "./style.css";
import VenueListing from "../VenueListing/VenueListing";
import final from '../../../Assets/Images/celebration.png'


const FinalPage = () => {
  return ( 
    <div className="final-container">
      <h1 className='final-title'>Finished!</h1>
      <img className={'final-image'} src={final} alt='final image' />
    </div>
   );
}
 
export default FinalPage;