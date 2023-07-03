import React from 'react'
import { Link } from 'react-router-dom'
const NavPlace = (props) => {
    let s = "User";
    if(props.mainUserName !== ""){
        s = props.mainUserName;
    }
    return (
        <div className="border-bottom bg-light">

            <ul className="nav justify-content-evenly">
                <li className="nav-item">
                    <Link className="nav-link active text-dark" aria-current="page" to="/men">Men</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="#">Women</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="#">Kids</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to = "#">Beauty</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to = "/userLogin">{s}</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavPlace
