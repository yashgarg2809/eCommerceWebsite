import React from 'react'
import SingleItemCard from './SingleItemCard.js'
import ShopContainer from './ShopContainer.js'

const ShopElements = (props) => {
    // console.log(props);
    return (
        <>
            {
                props.list.map((element) => {
                    return (<>
                        <ShopContainer addFunction = {props.addFunction} subTitle = {element.category} itemList = {element.itemList} idTitle = {element.catId}/>
                        <hr></hr>
                        </>
                    )   
                })
            }
        </>
    )
}

export default ShopElements
