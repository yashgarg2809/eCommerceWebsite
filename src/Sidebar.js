import React from 'react'
import SidebarSingleItem from './SidebarSingleItem.js'

const Sidebar = (props) => {
    // console.log(props);
    return (

        <div className="container-fluid text-center h-100">
            <h4>
                {props.title}
            </h4>
            <hr></hr>
            <div id="sidebarCheck"  className='h-75'>
                <ul className="list-unstyled d-flex flex-column mb-3 h-100 justify-content-evenly scrollspy">
                    {props.list.map((item) => {
                        // console.log(item);
                        return (
                            <SidebarSingleItem text={item.title} idName = {item.catId}/>
                            // {console.log(item)}
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Sidebar



    // < div class="row" >
    //     <div class="col-4">
    //         <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
    //             <a class="p-1 rounded" href="#simple-list-item-1">Item 1</a>
    //             <a class="p-1 rounded" href="#simple-list-item-2">Item 2</a>
    //             <a class="p-1 rounded" href="#simple-list-item-3">Item 3</a>
    //             <a class="p-1 rounded" href="#simple-list-item-4">Item 4</a>
    //             <a class="p-1 rounded" href="#simple-list-item-5">Item 5</a>
    //         </div>
    //     </div>
