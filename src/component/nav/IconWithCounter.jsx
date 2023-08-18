import React from 'react';
function IconWithCounter({icon, counter, className}) {
  return (
    <div className={`${className} icon-with-counter`}>
      {icon } <p>{counter}</p>
    </div>
  )
}

export default IconWithCounter
