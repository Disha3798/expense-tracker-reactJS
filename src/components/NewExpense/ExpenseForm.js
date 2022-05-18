import React from 'react';
import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }
    const amountHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateHandler = (event) => {
        console.log(event.target.value)
        setDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const newExpense={
            title:title,
            amount:amount,
            date:new Date(date)
        }
        props.onNewExpense(newExpense)
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' 
                    value={title}
                    onChange={titleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' 
                    value={amount}
                    min='0.01' 
                    step='0.01' 
                    onChange={amountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' 
                    value={date}
                    min='2019-01-01' 
                    max='2022-12-31' 
                    onChange={dateHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;