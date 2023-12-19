import React from "react"; 
import "./testimonials.css";


export default function Testimonials(){
    const testimonials = [
        {
            name: "Charles Kingsleigh", 
            text: '"The only way to achieve the impossible is to believe it is possible."',
        },
        {
            name: "Kobe Bryant", 
            text: '"The moment you give up, is the moment you let someone else win"',
        },
        {
            name: "Bill Gates", 
            text: '"I think it is possible for ordinary people to choose to be extraordinary."',
        },
    
    ]
    
    return (
    <>
    <div>
        <div className="row mx-5">
            {testimonials.map((value) =>{
                return (
                <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                    <div className="card shadow testimonial-card d-flex flex-column" data-aos="zoom-out-down" data-aos-delay = "500">
                      <span className="description">{value.text}</span>
                      <span className="starts">
                          <br></br>   
                      </span>
                      <span className="name">{value.name}</span>
                      </div>
                </div>
                );
            })}
        </div>
    </div>
     
    
    </>
    )
}