import React from 'react'
import mainBanner from './Img/banner1.jpg'
import menBanner from './Img/banner3male.jpg'
import womenBanner from './Img/banner2women.jpg'
import kidsBanner from './Img/banner4kids.jpg'
import beautyBanner from './Img/banner5beauty.jpg'

import './BannerCaraousel.css'

const BannerCaraousel = () => {
    return (
        
        <div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner setHeight" >
                    <div class="carousel-item active">
                        <div className="container position-absolute" style={{ top: "5vh", width: "40vw" }}>

                            <h1>ClickShop</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, neque mollitia assumenda amet corrupti animi unde iure ex enim, sint nam? Provident tempora itaque temporibus nostrum maiores laboriosam velit a laudantium fugit expedita incidunt voluptatum quo, inventore atque voluptas odit ex repudiandae praesentium! Similique quisquam dolor inventore consequuntur ipsa eligendi officiis minus, recusandae aliquid repellendus! Hic sunt laborum voluptatibus ab tenetur pariatur officia ipsa?</p>
                        </div>

                        <img src={mainBanner} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">

                        <div className="container position-absolute" style={{ top: "5vh", right: "5vw", width: "40vw"}}>

                            <h1>Men</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, neque mollitia assumenda amet corrupti animi unde iure ex enim, sint nam? Provident tempora itaque temporibus nostrum maiores laboriosam velit a laudantium fugit expedita incidunt voluptatum quo, inventore atque voluptas odit ex repudiandae praesentium! Similique quisquam dolor inventore consequuntur ipsa eligendi officiis minus, recusandae aliquid repellendus! Hic sunt laborum voluptatibus ab tenetur pariatur officia ipsa?</p>
                        </div>
                        <img src={menBanner} class="d-block w-100" alt="..." />
                    </div>

                    <div class="carousel-item">
                        <div className="container position-absolute" style={{ top: "5vh", left: "5vw", width: "40vw" }}>

                            <h1>Women</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, neque mollitia assumenda amet corrupti animi unde iure ex enim, sint nam? Provident tempora itaque temporibus nostrum maiores laboriosam velit a laudantium fugit expedita incidunt voluptatum quo, inventore atque voluptas odit ex repudiandae praesentium! Similique quisquam dolor inventore consequuntur ipsa eligendi officiis minus, recusandae aliquid repellendus! Hic sunt laborum voluptatibus ab tenetur pariatur officia ipsa?</p>
                        </div>
                        <img src={womenBanner} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <div className="container position-absolute" style={{ top: "5vh", right: "5vw", width: "40vw" }}>

                            <h1>Kids</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, neque mollitia assumenda amet corrupti animi unde iure ex enim, sint nam? Provident tempora itaque temporibus nostrum maiores laboriosam velit a laudantium fugit expedita incidunt voluptatum quo, inventore atque voluptas odit ex repudiandae praesentium! Similique quisquam dolor inventore consequuntur ipsa eligendi officiis minus, recusandae aliquid repellendus! Hic sunt laborum voluptatibus ab tenetur pariatur officia ipsa?</p>
                        </div>
                        <img src={kidsBanner} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <div className="container position-absolute" style={{ top: "20%", right: "35vw", width: "40vw" }}>

                            <h1>Beauty</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, neque mollitia assumenda amet corrupti animi unde iure ex enim, sint nam? Provident tempora itaque temporibus nostrum maiores laboriosam velit a laudantium fugit expedita incidunt voluptatum quo, inventore atque voluptas odit ex repudiandae praesentium! Similique quisquam dolor inventore consequuntur ipsa eligendi officiis minus, recusandae aliquid repellendus! Hic sunt laborum voluptatibus ab tenetur pariatur officia ipsa?</p>
                        </div>
                        <img src={beautyBanner} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    )
}

export default BannerCaraousel
