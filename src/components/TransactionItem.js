import React from 'react';
//import { TiDelete } from 'react-icons/ti';
//import { AppContext } from '../context/AppContext';

const TransactionItem = (props) => {
	//const { dispatch } = React.useContext(AppContext);

	/*const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};*/

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span className='badge bg-primary badge-pill mr-3'>
					${props.cost} 
				</span>
			</div>
		</li>
	);
};

export default TransactionItem;