import React from 'react';
import logo from '../images/2.png';

function Home(){
    return(
        <div className="home">
            <div className="landing">
                <h3>Winter Fashion</h3>
                <p>Pakistan Fashion Collection<br/> 2020</p>
                <button className="btn3">Shop Now !</button>
            </div>
            <div className="img-box">
                <img src={logo} className="img"/>
            </div>
        </div>
    )
}

export default Home;