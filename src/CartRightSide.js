import React, { useEffect } from 'react'
import SingleCartSideRightItem from './SingleCartSideRightItem.js'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CartRightSide = (props) => {

  const navigate = useNavigate();
  const placeOrder = async e => {
    console.log("Place order placed")
    navigate("/")
    try {
      console.log("called")
      await axios.post("http://localhost:8800/placeOrder", props.order)
      alert("Order Placed")
    }
    catch (err) {
      console.log(err);
      alert("Couldnt place order")
    }
  }


  const checkOutClicked = (e) => {
    e.preventDefault();
    console.log("Cart: ", props.cartObjectList)
    
    let k = props.cartObjectList.map((item)=>{
      return{
        itemId:item.itemId,
        itemName:item.itemName,
        itemPrice:item.itemPrice
      }
    })
    console.log("Cart: ", k)

    if (props.mainUserName === "") {
      alert("Please login first");
      navigate('/userLogin')
    }
    else {
      props.setMyCurrentOrder((prev) => ({ username: props.mainUserName, orderList:k}))
      // placeOrder()
      console.log("Changed myCurrentOrdder")
      // props.setCartObjectList([])
    }

    props.onCloseCart()
  }

  useEffect(() => {
    if(order.orderList.len!==0){
    placeOrder()
    props.setCartObjectList([])
    }
  }, [props.order])


  return (

    <div className="h-100 col p-0 m-0 col-3 border bg-white">
      <div className="h-75">

        {props.cartObjectList.map((elem) => {
          return (
            <SingleCartSideRightItem itemPrice={elem.itemPrice} itemName={elem.itemName} />
          )
        })}
      </div>
      <div className="w-100 h-25 text-center">
        <h3>{props.totalAmount}</h3>
        <button className="btn btn-primary" onClick={checkOutClicked}>Checkout</button>
      </div>
    </div>


  )
}

export default CartRightSide
