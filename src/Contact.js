import React, { useState, useRef } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';


export default function Contact(){

    const [name,setname] = useState('');
    const form = useRef();
    const [email,setemail] = useState('');
    const [message,setmessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(e);
        console.log(form.current);

        const templateparams = {
            from_name:name + " " + email, 
            to_name:"arganzapatrick@gmail.com",
            feedback: message 

        }
        emailjs.send(
            "service_pd55inu",
            "template_c9izles",
            templateparams,
            "YTNzT_KGGcEfXdmNO",
            ).then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
                console.log('FAILED...', error);
             });
      };
    return( 
    <>
    <div>
        <div className='contact-me-card  row'>
            <div className='col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2'>
                <span className='get-in-touch mx-4 my-5'>Get in touch!</span>

                <div className='py-5 d-flex justify-content-center'>
                <dotlottie-player 
                src="https://lottie.host/2ae351a1-6d06-4555-ae88-6c182cbcd5ee/sVuwro4Wgs.json" 
                background="transparent" 
                speed="1" 
                style={{width: '300px'}} 
                loop autoplay>
                </dotlottie-player>         
                </div>
                 
            </div>
            <div className='col-lg-6 col-md-5 col-sm-12 my-auto'>
                <form ref={form}  className='d-flex flex-column card-contact-right' onSubmit={sendEmail}>
                    <div className='input-group my-3 d-flex flex-column'>
                        <label> Name: </label>
                        <input value = {name} onChange={(e) => {
                            setname(e.target.value);
                        }} 
                        type= "text" 
                        placeholder='enter your name' 
                        className='input-groups'></input>
                    </div>
                    <div className='input-group my-3 d-flex flex-column'>
                        <label> Email: </label>
                        <input value={email}
                        onChange={(e) => {
                            setemail(e.target.value);
                        }}
                        type= "text" 
                        placeholder='Enter your email' 
                        className='input-groups'></input>
                    </div>
                    <div className='input-group my-3 d-flex flex-column'>
                        <label> Message </label>
                        <textarea
                        value = {message}
                        onChange={(e) => {
                            setmessage(e.target.value);
                        }}
                        type= "text" placeholder='Enter your message' className='input-groups'></textarea>
                    </div>
                    <div className='input-group my-3 d-flex flex-column'>
                       <input className='btn btn-success' type = "submit" value = "Send Mesage">
                       
                       </input>{" "}
                    </div>

                </form>
            </div> 

        </div>
    </div>
    </>
    )
}

