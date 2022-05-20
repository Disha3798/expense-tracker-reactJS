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
        setDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const newExpense = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        props.onNewExpense(newExpense)
        props.updateDisplay()
        setTitle('')
        setAmount('')
        setDate('')
    }

    const goBack = () => {
        props.updateDisplay()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                        value={title}
                        onChange={titleHandler} required />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                        value={amount}
                        min='0.01'
                        step='0.01'
                        onChange={amountHandler} required />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                        value={date}
                        min='2019-01-01'
                        max='2022-12-31'
                        onChange={dateHandler} required />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={goBack}>Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;