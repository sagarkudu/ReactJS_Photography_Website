import React from 'react';
import ContactButtons from "./ContactButtons";
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

import "./index.css";

const Contact = () => {  
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    CONTACT US
                </h1>

                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto font-weight-bold  ">
            <br/>
            

                <ContactButtons />     
                            <br /><br />
                            
                            <form action="/contactform.php">
                                 <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        placeholder="enter your name"
                                        required
                                    />
                                </div>
                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input 
                                        type="number"
                                        class="form-control"
                                        id="phone"
                                        placeholder="enter your number"
                                        required 
                                />
                                </div>
                                <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        placeholder="name@example.com"
                                        required 
                                    />
                                </div>
                                <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Write a message</label>
                                    <textarea
                                        class="form-control"
                                        id="message"
                                        rows="3"
                                    />
                                </div>

                                <div class="col-12">
                                <button type="submit" name="submit" className="service-btn">Submit</button>
                                </div>
                            </form>

                           
                            <br/>
            <table >              
                <tr className="border-0">
                    <td >
                        <span role="img" aria-label="call" ><CallIcon className="call-icon" /><a className="no-text-decoration" href="tel:+919421392873"> : +91 9421392873</a></span> <br />
                        <span role="img" aria-label="email" ><EmailIcon className="mail-icon" /> <a className="no-text-decoration" href="mailto:bhaveshthakurphotography@gmail.com?Subject=Hello%20Bhavesh!%20Please%20mail%20the%20best%20Quotation" target="_top"> : bhaveshthakur3550@gmail.com</a></span>                 
                    </td>
                </tr> 
            </table> 
               
                        </div>
                    </div>  
                </div>
            </div> 
         </>
    );
}

export default Contact;