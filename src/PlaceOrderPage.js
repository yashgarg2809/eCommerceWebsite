import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'




const PlaceOrderPage = (props) => {
    const navigate = useNavigate()
    const placeOrder = async e => {
        console.log("called")
        try {
            await axios.post("http://localhost:8800/placeOrder", props.order)
            // alert("Order Placed")
        }
        catch (err) {
            console.log(err);
            alert("Couldnt place order")
        }
    }
    navigate("/")

    useEffect(()=>{
        placeOrder()
    },[])
    return (
        <>
            <h1>Placing your order please wait...</h1>
        </>
    )
}

export default PlaceOrderPage
