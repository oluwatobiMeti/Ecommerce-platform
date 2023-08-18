import React, {useContext} from 'react';
import LoginLink from './LoginLink';
import StoreIcon from './StoreIcon';
import { ColorContext } from '../../CounterContext';

function Store() {
  const {color} = useContext(ColorContext);
  return (
    <div style={{color: color}} className='store'>
      <LoginLink/>
      <StoreIcon/>
    </div>
  )
}

export default Store
