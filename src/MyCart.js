import React from 'react'
import CartItemsPane from './CartItemsPane.js'
import CartRightSide from './CartRightSide.js'
import { useState } from 'react'



const MyCart = (props) => {
  
  

  return (<>
    <div className=" row p-0 border overflow-auto z-30 bg-light rounded cartHolder" style={{ visibility: props.showCartString }} >
      <div className="headingContainer d-flex flex-row text-center border-bottom" style={{ height: "12%" }}>
        <div className='w-75'>
          <h1>Cart</h1>
        </div>
        <div className='w-25 align-items-center d-flex justify-content-around'>
          <button className="btn btn-close" onClick={() => {
            props.onCloseCart();
          }}></button>

        </div>
      </div>
      <CartItemsPane cartObjectList={props.cartObjectList} removeFromCart={props.removeFromCart} cartKey={props.cartKey} />
      <CartRightSide order = {props.order} onCloseCart = {props.onCloseCart} setCartObjectList = {props.setCartObjectList} setMyCurrentOrder = {props.setMyCurrentOrder} mainUserName = {props.mainUserName} totalAmount = {props.totalAmount}cartObjectList = {props.cartObjectList}/>
      {/* hello */}
    </div>
  </>
  )
}

export default MyCart

