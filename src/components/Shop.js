import React from 'react';
import  imag  from '../images/1.png';

function Shop(){
    return(
        <div className="shop">
            <div className="smain">
                <div className="spri">
                    <img src={imag}/>
                    <img src={imag}/>
                    <img src={imag}/>
                    <img src={imag}/>
                </div>
                <div className="spri">
                    <img src={imag}/>
                    <img src={imag}/>
                    <img src={imag}/>
                    <img src={imag}/>
                </div>
            </div>
        </div>
    )
}

export default Shop;