import React from 'react';

function guidGen(){
  const date = new Date()
  
  const datestring = (date.getTime() + parseInt(Math.random()*10)).toString().substr()
  const guid = datestring.substr(datestring.length-6, 6)
  return guid
}

const handleChange =(event)=>{
  const {name, value} = event.name

  this.setState({[name]: value})
}



const common = {
  guidGen: guidGen,
  handleChange: handleChange
}

export default common