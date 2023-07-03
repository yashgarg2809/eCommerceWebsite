import React from 'react'

const SingleOrderMainCard = (props) => {
    console.log("called single order main card")
    return (
        <div className="w-100 d-flex flex-row border bg-light">
            
                <div className="w-25 m-0 p-1">
                    <h6>Order Id : {props.orderId}</h6>
                </div>
                <div className="w-75 m-0 p-1 d-flex flex-column">
                    {props.order.map(element=>{
                        return(
                            <div className="w-100">
                                <h6>    
                                {element.itemName}
                                </h6>
                            </div>
                        )
                    })}
                </div>
                
            
        </div>
    )
}

export default SingleOrderMainCard
