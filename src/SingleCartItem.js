import React from 'react'
// import trialImage from './Img/Men/Caps/beani.jpg'

const SingleCartItem = (props) => {
  return (
    <div className = "w-100 border-bottom bg-white mb-2 mx-0 p-2 row singleItemCart">
      <div className="col-2 imageHolderCart">
            <img src={props.image} alt="" />
      </div>
      <div className="contentHolderCart col-7 row">
        <div className="col fw-bold py-auto">
            {props.title}
        </div>
        <div className="col">
            {props.price}
        </div>
        <div className="col">
            <button className="btn btn-sm btn-danger" onClick={()=>{props.removeFromCart(props.id)}}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default SingleCartItem
