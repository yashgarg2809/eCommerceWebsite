import React from 'react'
import SingleOrderMainCard from './SingleOrderMainCard'

const AllOrdersMainCard = (props) => {

    const renderItem = (item) => {
        return (
            <div className="w-100">
                <h1>
                    {item.itemName}
                </h1>
            </div>
        )
    }



    if (props.allOrders.length === 0) {


        return (
            <div>
                <h2>none</h2>
            </div>
        )
    }

    else {
        return (
            <>
                <div>
                    <h2>
                        {props.allOrders.length} orders found
                        {console.log("hi",props.allOrders)}

                        {
                            props.allOrders.map( element =>{
                                let k = element.orderString
                                let ordId = element.Order_Id;
                                let m = JSON.parse(k)
                                return(
                                    <SingleOrderMainCard orderId = {ordId} order = {m}/>
                                )
                            }
                            )
                        }
                        {/* {
                            props.allOrders.map(element => {

                                return (
                                    
                                    m.map(item => {
                                        return (
                                            <SingleOrderMainCard item={item} />
                                        )
                                    })
                                )
                            })
                        } */}

                    
                    </h2>
                </div>
            </>
        )
    }
}

export default AllOrdersMainCard
