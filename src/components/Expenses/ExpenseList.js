import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import { useState } from 'react'

const ExpenseList = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022')
    const filteredExpenseList = props.expenseList.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    const getFilteredData = (year) => {
        setFilteredYear(year)
    }
    // let showExpenses=<p style={{color:'white'}}>No Expenses Available</p>
    let showExpenses=<p className='expenses-list__fallback'>Found no expenses</p>
    if(filteredExpenseList.length>0 )
    {
        showExpenses=filteredExpenseList.map((expense) =>
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />)
    }
   
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onYearSelected={getFilteredData} />
            {showExpenses}

        </Card>
    )
}

export default ExpenseList