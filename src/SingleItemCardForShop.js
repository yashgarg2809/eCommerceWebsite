import React from 'react'

const run = (event) => {
    console.log(event, "pressed");
}

const SingleItemCardForShop = (props) => {
    let k = "button-";
    k = k.concat(props.id)

    return (
        <div class="border-bottom border-top p-auto bg-light shopItemCard" >
            <div className="container bg-light p-0 text-center shopCardHolder">
                <div className="imgHolderShop bg-light">
                    <img src={props.image} alt="" />
                </div>
                <div className="contentHolderShop mt-1">
                    <h3>
                        {props.title}
                    </h3>
                    <p>
                        {props.price}
                    </p>
                    <button id={k} className="btn btn-sm btn-primary" onClick={(e) => { props.addFunction(props.id ) }}>
                        Add to Cart!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleItemCardForShop
