import React from 'react';
import TransactionItem from './TransactionItem';
import { AppContext } from '../context/AppContext';

const IncomeList = () => {
    const { MyIncomeList } = React.useContext(AppContext);

    return (
        <ul className='list-group'>
            {MyIncomeList.map((income) => (
                <TransactionItem id={income.id} name={income.name} cost={income.cost} />
            ))}
        </ul>
    );
};

export default IncomeList;