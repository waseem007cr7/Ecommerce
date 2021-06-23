import React from 'react';

function Contact(){
    return(
        <div className="contact">
            <div id="contact-box">
                <form action="">
                    <div class="form-group">
                        <label for="name">Name:</label><br/><br/>
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" required></input><br/><br/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label><br/><br/>
                        <input type="email" name="name" id="email" placeholder="Enter Your Email" required></input><br/><br/>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number:</label><br/><br/>
                        <input type="phone" name="name" id="phone" placeholder="Enter Your Phone" required></input><br/><br/>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label><br/><br/>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <button className="btn2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;