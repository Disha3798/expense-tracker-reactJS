import { useState } from 'react';
import ExpenseList from './components/Expenses/ExpenseList/ExpenseList'
import NewExpense from './components/Expenses/NewExpense/NewExpense';

const INITIAL_EXPENSES=[
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

const App = () => {

  const [expenses,setExpenses]=useState(INITIAL_EXPENSES)

  const getNewExpense = (expense) => {
    setExpenses((prevData)=> [expense,...prevData])
  }

  return (
    <div>
      <NewExpense onSaveNewExpense={getNewExpense} />
      <ExpenseList expenseList={expenses} />
    </div>
  );
}

export default App;
