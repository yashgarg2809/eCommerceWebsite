import React from 'react'
import Sidebar from "./Sidebar.js";
import ShopElements from './ShopElements.js'



const MenMain = (props) => {

    // console.log(props.sideList);
    return (
        <div  className = "row h-100 overflow-auto shopRight">
            {/* <div className="sidebarContainer m-0 p-2 bg-light col-.3" style={{ height: "70vh", width: "20%", display: "inline-block" }}>
                <Sidebar title="Men" list={props.sideList} />
            </div>
          */}
            <div className="cartItemsContainer m-0 p-5  bg-white col-0.7 " style={{ height: "70vh",width: "100%", display: "inline-block" }}>
                <ShopElements list={props.shopList} addFunction = {props.addFunction}/>
            </div>
        </div>

    )
}

export default MenMain
