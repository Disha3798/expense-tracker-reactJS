import React,{ useContext } from 'react';
import ExpenseList from './components/Expenses/ExpenseList/ExpenseList'
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import Login from './components/Login/LoginForm';
import NavBar from './components/NavBar/NavBar';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

const App = () => {

  const authCtx=useContext(AuthContext)

  return (
    <React.Fragment>
      {!authCtx.isLoggedIn && <Login />}
      {authCtx.isLoggedIn &&
        (<MainHeader>
          <NavBar />
          <NewExpense />
          <ExpenseList  />
        </MainHeader>)
      }
    </React.Fragment>
  );
}

export default App;
