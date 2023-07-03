import React from 'react'

const SingleItemCard = (props) => {
    return (
        <div class="col border mx-2 p-auto mainCard bg-white">
            <div className="container bg-white p-0 text-center cardHolder">
                <div className="imgHolder bg-light">
                    <img src={props.image} alt="" />
                </div>
                <div className="contentHolder mt-1">
                    <h3>
                        {props.title}
                    </h3>
                    <p>
                        {props.price}
                    </p>
                    <button className="btn btn-sm btn-primary">
                        Check it!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleItemCard
