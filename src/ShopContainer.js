import React from 'react'
import SingleItemCardForShop from './SingleItemCardForShop.js'

const ShopContainer = (props) => {
    // console.log(props);
    return (
        <div>
            <h2 id = {props.idTitle}> {props.subTitle}</h2>
            <div className="d-flex itemsRowShop flex-row flex-nowrap overflow-auto">
                {
                        props.itemList.map((item)=>{
                        // console.log(item);
                        return(
                            <SingleItemCardForShop addFunction = {props.addFunction} id = {item.itemId} title = {item.itemName} price = {item.itemPrice} image = {item.itemImg}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ShopContainer
