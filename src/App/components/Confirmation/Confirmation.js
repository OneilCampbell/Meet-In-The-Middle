import React from 'react'

import IdLinkGenerator from '../LinkGenerator/IdLinkGenerator'

export const SessionMaker = (props) => {
  return (
    <React.Fragment>
      <h1>This is where we create a session and define it's parameters</h1>
      <IdLinkGenerator
        endpoint={'userId'}
      />
    </React.Fragment>
  )
}