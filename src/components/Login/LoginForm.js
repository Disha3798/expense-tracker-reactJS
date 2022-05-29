import { Fragment,useState,useEffect,useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Card from '../UI/Card/Card'
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import classes from './Login.module.css'

const Login = () => {

    const authCtx=useContext(AuthContext)

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [error, setError] = useState();

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        setEmailIsValid(event.target.value.includes('@'));
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
        setPasswordIsValid(event.target.value.trim().length > 6);
    };

    useEffect(()=>{
        //use this to display normal border color to inputs for first time component loads
        setEmailIsValid(true)
        setPasswordIsValid(true)

        return () => {
            console.log('EFFECT CLEANUP');
          };
    },[])

    const submitHandler = (event) => {

        event.preventDefault()
        if ((enteredEmail && emailIsValid) && ( enteredPassword && passwordIsValid)) {
            authCtx.onLogin(enteredEmail,enteredPassword)
        }
        else if(enteredPassword && enteredPassword.trim().length<=6)
        {
            setError({
                title:'Invalid Password Input',
                message:'Password length should at least be 7 characters'
            })
        }
        else {
            setError({
                title:'Invalid Input',
                message:'All fields are mandatory'
            })
        }

    }

    const errorHandler=()=>{
        setError(null)
    }

    return (
        <Fragment>
            {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
              <Card className={classes.login}>
                <form onSubmit={submitHandler}>
                    <div className={`${classes.control} ${(!emailIsValid) ? classes.invalid : ''}`}>
                        <label htmlFor="email">E-Mail</label>
                        <input
                            type="email"
                            id="email"
                            value={enteredEmail}
                            onChange={emailChangeHandler}
                        />
                    </div>
                    <div
                        className={`${classes.control} ${(!passwordIsValid) ? classes.invalid : ''}`} >
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={enteredPassword}
                            onChange={passwordChangeHandler}
                        />
                    </div>
                    <div className={classes.actions}>
                        <button type="submit" className={classes.button}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </Card>
        </Fragment>
    )
}

export default Login;