import * as React from 'react'

const AppReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const initialState = {
    title: "ReactJs Expense Manager",
    menu: [
		{ id: 1001, name: 'Overview', link: '#overview' },
		{ id: 1002, name: 'Transactions', link: '#transactions' },
		{ id: 1003, name: 'Budget', link: '#budget' },
        { id: 1004, name: 'Accounts', link: '#accounts' },
        { id: 1005, name: 'Settings', link: '#settings' },
	],
    expenses: [
        { id: 1001, name: 'shopping', cost: 40},
        { id: 1002, name: 'holiday', cost: 400},
        { id: 1003, name: 'grocery', cost: 50},
        { id: 1004, name: 'bank loan', cost: 49},
        { id: 1005, name: 'car service', cost: 20},
    ],
    income: [
        { id: 1001, name: 'Salary', cost: 10000},
        { id: 1002, name: 'Investment', cost: 5000},
    ]
};

export const AppContext = React.createContext(); 

export const AppProvider = (props) => {
	const [state, dispatch] = React.useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				title: state.title,
                menu: state.menu,
                expenses: state.expenses,
                MyIncomeList: state.income,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};