import React from 'react';
import DescriptionTag from '../DescriptionTag/DescriptionTag';
import './style.css'
import '../../App.css'


const PrefBox = (props) => {
  
  const prefList = props.prefList.map((pref, index)=>{
    return <DescriptionTag pref={pref} {...props} id= {'item'+index} />
  })
  
  return ( 
    <div className='prefbox-container'>
      {prefList}
    </div>
   );
}
 
export default PrefBox;