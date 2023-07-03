import React from 'react'
import logo from './Img/logo.png'
import cartImage from './Img/cart.png'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary d-flex flex-row">
                <div className="container-fluid w-75">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" width="60" height="50" className="d-inline-block align-text-top" />
                        <p className="fs-4 fw-bold" style={{ display: "inline", top: "12px", position: "relative" }}>ClickShop</p>
                    </Link>
                </div>
                <div className='w-25 justify-content-around'>
                    <button className="btn border-0" onClick={() => {
                        props.onOpenCart();
                    }}>
                        <img  src={cartImage} alt="" style={{width:"25px", height:"25px"}} />
                    </button>
                    <p style={{display:"inline"}}>
                        {props.cartObjectList.length}
                    </p>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
