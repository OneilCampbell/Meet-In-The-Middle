import React from 'react';

function guidGen(){
  const date = new Date()
  
  const datestring = (date.getTime() + parseInt(Math.random()*10)).toString().substr()
  const guid = datestring.substr(datestring.length-6, 6)
  return guid
}




const common = {
  guidGen: guidGen
}

export default common