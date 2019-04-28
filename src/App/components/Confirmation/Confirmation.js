import React, { Component } from 'react';
import './style.css'
import '../../App.css'
import PrefBox from '../PrefBox/PrefBox';

class Confirmation extends Component {
      constructor(props) {
        super(props);
        this.state = {  }
      }
      
      selectedArray = ['Jazz', 'Italian', 'Wine', 'Dance', 'Cocktails', 'Beer']
     
     
    // 'Restaurant', 'NightClub'
    
      render() { 
        return ( 
          <div className= 'preference-container'>
            <h1 className='card-title'>Ready to Send?</h1>
            <div>
            <PrefBox prefList={this.selectedArray } defaultSelected={false}/>
            </div>
          </div>
         );
      }
  }
     

export default Confirmation