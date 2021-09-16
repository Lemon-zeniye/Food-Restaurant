import React, { useState } from "react";

import "./Navbar.css";
import cart from "../../images/cart-fill.svg";
import searchImg from "../../images/search.svg";
import heart from "../../images/heart-fill.svg";
import list from "../../images/list.svg";



const Navbar = () => {
    const [link, setLink] = useState(false);
    const [search, setSearch] = useState(false);

    return(
    <div className="upper-div">
        <nav>
            <h1>Resto.</h1>
            <div className={`links ${link && "links-toggle"}`}>
                <li className="link"><a href="#home">Home</a></li>
                <li className="link"><a href="#dishes">Dishes</a></li>
                <li className="link"><a href="#about">About</a></li>
                <li className="link"><a href="#menu">Menu</a></li>
                <li className="link"><a href="#review">Review</a></li>
                <li className="link"><a href="#order">Order</a></li>
            </div>
            <div className="icons">
                <img className="list" onClick={() => setLink(!link)} src={list} alt="" />
                <img onClick={() => setSearch(true)} src={searchImg} alt="" />
                <img src={heart} alt="" />
                <img src={cart} alt="" />
            </div>
            <div className={`search ${search && "search-toggle"}`}>
                <div onClick={() => setSearch(false)} >X</div>
                <input type="text" placeholder="search here..." />
                <img src={searchImg} alt="" />
        </div>
        </nav>
       
    </div>
    )
}
export default Navbar;