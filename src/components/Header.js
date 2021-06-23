import React from 'react';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';

function Header(){
    return(
        <div className="header">
            <div className="heading">
                <h2>Wiki Shopping</h2>
            </div>
            <div className="menu">
                <Link to = "/"><li>Home</li></Link> 
                <Link to = "/Shop"><li>Shop</li></Link> 
                <Link to = "/Contact"><li>Contact</li></Link> 
                <Link to = "/Signup"><li>Signup</li></Link> 
            </div>
            <div className="search">
                <input name="input" type="text" placeholder="Search"></input>
                <div className="icon">
                    <GoSearch color="white"/>
                </div>
            </div>
        </div>
    )
}

export default Header;