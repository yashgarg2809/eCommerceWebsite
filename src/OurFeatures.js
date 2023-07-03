import React from 'react'
import fastdel from './Img/fastDel.jpg'
import authentic from './Img/authentic.jpg'
import easyret from './Img/easyreturns.jpg'

const OurFeatures = () => {
    return (
        <div>
            <div className="container headingContainer text-center m-au">
                <h1>
                    Our Specialities
                </h1>
            </div>
            <div class="row row-cols-3 row-cols-md-3 g-4">
                <div class="col imgFeat">
                    <div class="card">
                        <img src={fastdel} class="card-img-top" alt="..." />
                        <div class="card-body">
                            {/* <h6 class="card-title">Fast Deleiveries</h6> */}
                            <p class="card-text fw-bold cardHeading">Fast Deleiveries</p>
                        </div>
                    </div>
                </div>
                <div class="col imgFeat">
                    <div class="card ">
                        <img src={authentic} class="card-img-top" alt="..." />
                        <div class="card-body">
                            {/* <h5 class="card-title">Card title</h5> */}
                            <p class="card-text fw-bold cardHeading">Authentic Products</p>
                        </div>
                    </div>
                </div>
                <div class="col imgFeat">
                    <div class="card ">
                        <img src = {easyret} class="card-img-top" alt="..." />
                        <div class="card-body">
                            {/* <h5 class="card-title">Card title</h5> */}
                            <p class="card-text fw-bold cardHeading">Easy Returns</p>
                        </div>
                    </div>
                </div>

            </div>  
        </div>
    )
}

export default OurFeatures
