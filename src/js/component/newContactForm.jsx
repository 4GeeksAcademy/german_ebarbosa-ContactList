import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";


export const ContactForm = (props) => {


    return (
        <>
        <h1 className="text-center">Add A New Contact</h1>
        <form>
        <div className="mb-3 mx-3">
                <label htmlFor="InputFullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="InputFullName" aria-describedby="emailHelp" placeholder="Name and Surname"/>
            </div>
            <div className="mb-3 mx-3">
                <label htmlFor="InputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Email"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 mx-3">
                <label htmlFor="InputPhone" className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="InputPhone" placeholder="+57 (311) 5119-458"/>
            </div>
            <div className="mb-3 mx-3">
                <label htmlFor="InputAdress" className="form-label">Address</label>
                <input type="text" className="form-control" id="InputAdress" placeholder="4564 Hamillway Cl"/>
            </div>
            <button type="submit" className=" mx-3 btn btn-primary">Submit</button>
            </form>
            <Link className="mx-3" to="/">or get back to contacts</Link>
        </> 
	);
};
