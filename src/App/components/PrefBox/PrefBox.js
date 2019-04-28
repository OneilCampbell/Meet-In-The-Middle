import React from 'react';
import DescriptionTag from '../DescriptionTag/DescriptionTag';



const PrefBox = (props) => {
  
  const prefList = props.prefList.map((pref)=>{
    return <DescriptionTag pref={pref}/>
  })
  
  return ( 
    <div>
      {prefList}
    </div>
   );
}
 
export default PrefBox;