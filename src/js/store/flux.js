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
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/german_barbosa_agenda" , {
					method: "GET"})
				.then((res) => res.json())
				.then((data) => setStore({contactList: data}))
			},
			// getContactInfo: () => {
			// 	const store = getStore();

			// }
		}
	};
};

export default getState;
