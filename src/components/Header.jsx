import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './styles/Header.css'
export default function Header(){
    return(
        <div className="header-container">

            <h1>Viatu Duka</h1>
            <div className="menu-container">
                <ul className="menu-nav">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Blog</li>
                </ul>

            </div>
            <div className="header-icons">
                <a href="#" className="icon">Search</a>
                <a href="#" className="icon">Login</a>
                <a href="#" className="icon"><FontAwesomeIcon icon={faShoppingCart} className="icon" /></a>

            </div>
                    

        </div>
    )
}





