import React from 'react';
import './style.css'


export const LinkGenerator = (props) => {
  
  

  const idLink = 'https://www.wikipedia.org/'

  return (<div>
    <h3>Link Generated <a href={idLink}>{idLink}</a>  </h3>
  </div>)
}

