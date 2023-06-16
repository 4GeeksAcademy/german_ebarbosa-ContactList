import React from "react";
import { Link } from "react-router-dom";
import siu from ".//../../img/cristiano.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faPhone, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'

import { Context } from "../store/appContext";
import { useContext } from "react";

export const ContactCard = (props) => {

    const {actions} = useContext(Context)

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
                            <h5 className="card-title mb-3">{props.name}</h5>
                            <p className="card-text text-start"><FontAwesomeIcon icon={faMapLocation} /> {props.location}</p>
                            <p className="card-text text-start"><FontAwesomeIcon icon={faPhone} /> {props.phone}</p>
                            <p className="card-text text-start"><FontAwesomeIcon icon={faEnvelope} /> {props.email}</p>
                            <p className="float-end me-3">
                                <FontAwesomeIcon className= "mx-3 edit" icon={faPenNib} /> 
                                <FontAwesomeIcon className="icon" icon={faTrash} 
                                    onClick={() => {
                                        actions.delete_contact(props.id)
                                        location.reload()
                                        }} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </> 
	);
};
