import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const getNewExpense = (expense) => {
        props.onSaveNewExpense(expense)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onNewExpense={getNewExpense} />
        </div>
    );
};

export default NewExpense;