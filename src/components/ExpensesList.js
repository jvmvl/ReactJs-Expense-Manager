import React from 'react';
import TransactionItem from './TransactionItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = React.useContext(AppContext);

    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <TransactionItem id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    );
};

export default ExpenseList;