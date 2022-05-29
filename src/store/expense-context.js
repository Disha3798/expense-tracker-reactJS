import React, { useState } from "react"

const INITIAL_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2022, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2022, 5, 12),
    },
]

const ExpenseContext = React.createContext({
    expenses: INITIAL_EXPENSES,
    addNewExpense: (expense) => { }
})

export const ExpenseContextProvider = (props) => {

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

    const NewExpenseHandler = (expense) => {
        setExpenses((prevData) => [expense, ...prevData])
    }

    return (
        <ExpenseContext.Provider
            value={{
                expenses: expenses,
                addNewExpense: NewExpenseHandler
            }}>
            {props.children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContext