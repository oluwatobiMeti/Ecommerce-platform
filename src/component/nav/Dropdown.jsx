import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./dropdown.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

function Dropdown() {
  const [show, setShow] = useState(false);
  return (
    <div className='dropdown'>
      <p className='dropdownbtn' onClick={() => setShow(!show)}>shop {(show)? <IoIosArrowUp/>:<IoIosArrowDown/> }</p>
        {show && <div className="dropdownLink">
            <Link>Supermarket</Link>
            <Link>Health & Beauty</Link>
            <Link>Home & Office</Link>
            <Link>Appliances</Link>
            <Link>Phones & Tablets</Link>
            <Link>Computing</Link>
            <Link>Electronics</Link>
            <Link>Fashion</Link>
            <Link>Baby Products</Link>
            <Link>Gaming</Link>
            <Link>Sporting Goods</Link>
            <Link>Other categorie</Link>
        </div>}
    </div>
  )
}

export default Dropdown
