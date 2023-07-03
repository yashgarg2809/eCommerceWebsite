import React from 'react'

const SingleCartSideRightItem = (props) => {
  return (
    <div className='w-100 bg-light border-bottom d-flex flex-row align-items-center' style={{minHeight:"10%"}}>
        <div className="w-75">
            <h6 className="fw-bold">
                {props.itemName}
            </h6>
        </div>
        <div className="w-25">
            <h6>
                {props.itemPrice}
            </h6>
        </div>
    </div>
  )
}

export default SingleCartSideRightItem
