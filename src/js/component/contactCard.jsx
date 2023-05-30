import React from "react";
import { Link } from "react-router-dom";
import siu from ".//../../img/cristiano.jpeg"

export const ContactCard = (props) => {

  
    return (
        <>
        <div className="justify-content-center align-items-center d-flex">
            <div className="card m-3" style={{maxWidth: 800}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={siu} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </> 
	);
};
