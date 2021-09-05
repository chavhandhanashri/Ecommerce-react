import React, {useEffect, useState } from 'react';
import './navbar.css';
import '../../../node_modules/material-design-icons/iconfont/material-icons.css'

export default function Navbar({onNavClick, addedProduct}) {

const [productClicked, setProductClicked] = useState(false);
const [featuredClicked, setFeaturedClicked] = useState(false);

const onNavChange = (type) => {
  setProductClicked(type === 'all' ? true : false);
  setFeaturedClicked(type === 'all' ? false : true);

  onNavClick(type);
}

return (
    <>
      <nav className="navbar fixed-top navStyle">
      <div className="row w-100 ">
          <div className="col-2 left navProduct li">
          <div className={(productClicked ? "dark " : '')}  onClick={()=>onNavChange('all')}> All products</div>
            </div>
          <div className="col-2 left li">
          <div className={(featuredClicked ? "dark " : '')} onClick={()=>onNavChange('featured')}>
            Featured products
          </div>
          </div>
          {/* <div className="col-2"></div> */}
          <div className="col-8 right font-size">
            <span className="material-icons">
              shopping_cart
            </span>
            <span className="cart-value">{addedProduct}</span>
          </div>
      </div>
    </nav>
    </>
  )
}