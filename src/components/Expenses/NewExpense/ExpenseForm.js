import React from 'react';
import { useReducer, useEffect} from 'react';

import './ExpenseForm.css';

const inputReducer=(state,action)=>{
    if(action.type==='USER_INPUT')
    {
        return({
            value:action.val,
            isValid:action.val.length>0
        })
    }
    if(action.type==='INITIAL_STATE')
    {
        return({
            value:action.val,
            isValid:true
        })
    }
    return ({
        value:'',
        isValid:false
    })
}

const ExpenseForm = (props) => {

    const [titleState,dispatchTitle]=useReducer(inputReducer,{
        value:'',
        isValid:false
    })
    const [amountState,dispatchAmount]=useReducer(inputReducer,{
        value:'',
        isValid:false
    })
    const [dateState,dispatchDate]=useReducer(inputReducer,{
        value:'',
        isValid:false
    })
    
    useEffect(()=>{
        //use this to display normal border color to inputs for first time component loads
        dispatchTitle({type:'INITIAL_STATE',val:''})
        dispatchAmount({type:'INITIAL_STATE',val:''})
        dispatchDate({type:'INITIAL_STATE',val:''})
    },[])

    const titleHandler = (event) => {
        dispatchTitle({type:'USER_INPUT',val:event.target.value})
    }

    const amountHandler = (event) => {
        dispatchAmount({type:'USER_INPUT',val:event.target.value})
    }

    const dateHandler = (event) => {
        dispatchDate({type:'USER_INPUT',val:event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newExpense = {
            title: titleState.value,
            amount: amountState.value,
            date: new Date(dateState.value),
            id: Math.random().toString()
        }

        props.onNewExpense(newExpense)
        props.updateDisplay()
        dispatchTitle({type:'USER_INPUT',val:''})
        dispatchAmount({type:'USER_INPUT',val:''})
        dispatchDate({type:'USER_INPUT',val:''})
     
    }

    const goBack = () => {
        props.updateDisplay()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div 
                className={`new-expense__control ${!titleState.isValid?'new-expense__control_error':''}`}>
                    <label>Title</label>
                    <input type='text'
                        value={titleState.value}
                        onChange={titleHandler} required />
                </div>
                <div className={`new-expense__control ${!amountState.isValid?'new-expense__control_error':''}`}>
                    <label>Amount</label>
                    <input type='number'
                        value={amountState.value}
                        min='0.01'
                        step='0.01'
                        onChange={amountHandler} required />
                </div>
                <div className={`new-expense__control ${!dateState.isValid?'new-expense__control_error':''}`}>
                    <label>Date</label>
                    <input type='date'
                        value={dateState.value}
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