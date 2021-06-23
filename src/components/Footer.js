import React, { Component } from 'react';
import { AiFillFacebook, AiFillGoogleCircle, AiFillInstagram, AiFillSkype, AiOutlinePhone } from "react-icons/ai";

class Footer extends Component{
    render() {
        return (
            <div className="footer">
                <div className="main">
                    <h2>Category</h2>
                    <ul>
                        <li>Male</li>
                        <li>Female</li>
                        <li>Shoe</li>
                        <li>Fashion</li>
                    </ul>
                </div>
                <div className="main2">
                    <h2>Company</h2>
                    <ul>
                        <li>About</li>
                        <li>News</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="pri">
                    <h2>Address</h2>
                    <p>Defence Phase-8, karachi</p>
                    <p><AiOutlinePhone size="1.2rem"/>+9289898989</p>
                    <p>Wiki@gmail.com</p>
                </div>
                <div className="pri2">
                    <h2>NewsLetter</h2>
                    <input type="text" placeholder="Email Address"></input>
                    <button className="btn">Subscribe</button>
                    <div className="icons">
                        <AiFillFacebook size="4rem"/>
                        <AiFillGoogleCircle size="4rem"/>
                        <AiFillInstagram size="4rem"/>
                        <AiFillSkype size="4rem"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;