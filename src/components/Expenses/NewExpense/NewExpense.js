import React from 'react';
import { useState } from 'react';
import Button from '../../UI/Button/Button';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [showForm,setShowForm]=useState(false)
    const getNewExpense = (expense) => {
        props.onSaveNewExpense(expense)
    }

    const showExpenseForm=()=> {
        setShowForm(true)
    }
    const hideExpenseForm=()=> {
        setShowForm(false)
    }

    return (
        <div className='new-expense'>
            {!showForm&&<Button type="button" onClick={showExpenseForm}>Add Expenses</Button>}
            {showForm&&<ExpenseForm onNewExpense={getNewExpense} updateDisplay={hideExpenseForm}/>}
        </div>
    );
};

export default NewExpense;