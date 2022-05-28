import { useState } from 'react';
import ExpenseList from './components/Expenses/ExpenseList/ExpenseList'
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import Login from './components/Login/LoginForm';
import NavBar from './components/NavBar/NavBar';
import MainHeader from './components/MainHeader/MainHeader';
import { Fragment } from 'react';


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

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const getNewExpense = (expense) => {
    setExpenses((prevData) => [expense, ...prevData])
  }

  return (
    <Fragment>
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn &&
        (<MainHeader>
          <NavBar onLogout={handleLogout} />
          <NewExpense onSaveNewExpense={getNewExpense} />
          <ExpenseList expenseList={expenses} />
        </MainHeader>)
      }
    </Fragment>
  );
}

export default App;
