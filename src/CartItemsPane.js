import React from 'react'
import SingleCartItem from './SingleCartItem.js'

const CartItemsPane = (props) => {
    // console.log(props.cartObjectList)
    return (
        <div className="h-100 p-0 m-0 col bg-light w-75">
            

            <div className="itemContainer w-100">
                {props.cartObjectList.map((e) => {
                    return (
                        <SingleCartItem removeFromCart = {props.removeFromCart} image = {e.itemImg} title = {e.itemName} id = {e.itemId} price = {e.itemPrice} key = {props.cartKey}/>
                    )
                    {props.cartKey++;}
                })
                }
            </div>
        </div>
    )
}

export default CartItemsPane
