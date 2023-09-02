import React from "react";
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
                <a href="#" className="icon">Cart</a>

            </div>


        </div>
    )
}
