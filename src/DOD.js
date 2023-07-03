import React from 'react'
import SingleItemCard from './SingleItemCard.js'
import greenTee from './Img/Men/Tshirt/green.jpg'
import blackPant from './Img/Men/Pants/black pants.jpg'
import beanine from './Img/Men/Caps/beani.jpg'
import greenPant from './Img/Men/Pants/green.webp'

const DOD = () => {
    let myArr = [
        {
            title: "Green Men Tshirt",
            image: greenTee,
            price: "Rs.500"
        },
        {
            title: "Black Men Pants",
            image: blackPant,
            price: "Rs.1000"
        },
        {
            title: "Beanie Cap",
            image: beanine,
            price: "Rs.400"
        },
        {
            title: "Green Pant",
            image: greenPant,
            price: "Rs.4000"
        },
        {
            title: "Green Pant",
            image: greenPant,
            price: "Rs.4000"
        },
        {
            title: "Green Pant",
            image: greenPant,
            price: "Rs.4000"
        }

    ];
    return (

        <div className="bg-light">
            <div className="container mt-3 text-center">
                <h2>
                    Deal of The Day
                </h2>
            </div>

            <div class="container-fluid py-2">
                <div class="d-flex flex-row flex-nowrap overflow-auto">
                    {myArr.map((item, index) =>{
                        return(
                            <SingleItemCard title={item.title} price={item.price} image={item.image} />
                        )
                    })

                    }
                </div>
            </div>
        </div>
    )
}

export default DOD