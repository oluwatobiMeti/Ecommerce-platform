import React from 'react'
import LinkComp from './LinkComp'
function ButtonLink({className, title}) {
  return (
    <button className={`Button__link ${className}`}>
        <LinkComp to="/LeagueDashboard" title={title}/>
    </button>
  )
}

export default ButtonLink
