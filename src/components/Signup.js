import React, { useState } from 'react';

function Signup(){

const [name,setname] = useState('');
const [email,setemail] = useState('');
const [password,setpassword] = useState('');
const [phone, setphone] = useState('');
const [err,seterr] = useState('');

const submit =()=>{
        
    if(password.length > 5){
    alert("submit")
    }
    else{
        seterr("Week Password")
    }
}
    return(
        <div className="signup">
            <div id="signup-box">
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label for="name">Name: </label><br/><br/>
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" onChange={(e)=> {setname(e.target.value)}} required></input><br/><br/>
                    </div>
                    <div class="form-group">
                    <label for="email">Email:</label><br/><br/>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" onChange={(e)=> {setemail(e.target.value)}} required></input><br/><br/>
                    </div>
                    <div class="form-group">
                    <label for="password">Email:</label><br/><br/>
                    <input type="password" name="password" id="password" placeholder="Enter Your Password" onChange={(e)=> {setpassword(e.target.value)}} required></input><br/><br/>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number:</label><br/><br/>
                        <input type="phone" name="phone" id="phone" placeholder="Enter Your Phone" onChange={(e)=> {setphone(e.target.value)}} required></input>
                    </div>
                    <button className="btn2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;