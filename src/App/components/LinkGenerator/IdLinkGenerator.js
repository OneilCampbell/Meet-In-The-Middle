import React from 'react';
import common from '../../common'

import './style.css'


const IdLinkGenerator = (props) => {
  const DEFLINK = 'https://www.wikipedia.org/'
  
  const guid = common.guidGen()
  
  const idLink = `wwww.meetinthemiddle.com/${props.endpoint}/${guid}`
  
  return (
    <div>
      <h3>Link Generated <a href={DEFLINK}>{idLink}</a>  </h3>
    </div>
  )
}

export default IdLinkGenerator