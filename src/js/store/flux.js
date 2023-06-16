const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contactList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			loadSomeData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/german_barbosa_agenda" , {
					method: "GET"})
				.then((res) => res.json())
				.then((data) => {
					setStore({contactList: data})
					console.log(data);})
			},
			// getContactInfo: () => {
			// 	const store = getStore();
			// }
			addNewContact: (name,email,address,phone) =>{
				  
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type':'application/json'},
					body: JSON.stringify(
						{
							"full_name": name,
							"email": email,
							"agenda_slug": "german_barbosa_agenda",
							"address": address,
							"phone": phone
					  	}
					  )
				  };
				  
				fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log('error', error));
			},
			delete_contact: (id) => {
				const requestOptions = {
					method: 'DELETE'
				  };
				  
				  fetch("https://assets.breatheco.de/apis/fake/contact/"+id, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
			}
		
		}
	};
};

export default getState;
