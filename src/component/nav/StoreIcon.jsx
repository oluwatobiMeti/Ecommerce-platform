import React, {useContext} from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import IconWithCounter from './IconWithCounter';
import { CounterContext } from '../../CounterContext';
import "./store.css"

function StoreIcon() {
    const {chartCounter, likeCounter} = useContext(CounterContext);
  return (
    <div className='store-icon'>
      <AiOutlineSearch/>
      <IconWithCounter icon={<AiOutlineShoppingCart/>} counter={chartCounter}/>
      <IconWithCounter className="love-icon" icon={<AiOutlineHeart/>} counter={likeCounter}/>
    </div>
  )
}

export default StoreIcon
