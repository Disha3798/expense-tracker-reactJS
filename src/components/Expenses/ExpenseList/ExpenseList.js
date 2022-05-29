import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import Card from '../../UI/Card/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import { useState } from 'react'
import ExpenseChart from '../ExpenseChart/ExpenseChart'
import { useContext } from 'react'
import ExpenseContext from '../../../store/expense-context'

const ExpenseList = () => {

    const expenseCtx=useContext(ExpenseContext)

    const [filteredYear, setFilteredYear] = useState('2022')
    const filteredExpenseList = expenseCtx.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    const getFilteredData = (year) => {
        setFilteredYear(year)
    }
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
            <ExpenseChart items={filteredExpenseList} />
            <ExpensesFilter selected={filteredYear} onYearSelected={getFilteredData} />
            {showExpenses}

        </Card>
    )
}

export default ExpenseList