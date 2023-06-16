import React from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext"; 



export const Home = () => {
	
	const { store } = useContext(Context);

return(
	<div className="text-center mt-5">
		{store.contactList.map((contact,index) => 
		<ContactCard 
			key={index} 
			name = {contact.full_name} 
			location = {contact.address} 
			phone = {contact.phone}
			id = {contact.id}
			email = {contact.email}/>
			)}
	</div>
);
}