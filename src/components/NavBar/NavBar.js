import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/Button';

import classes from './NavBar.module.css';

const NavBar = () => {
    const authCtx = useContext(AuthContext)

    const logout = () => {
        authCtx.onLogout()
    }

    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Button onClick={logout}>Logout</Button>
                </li>
            </ul>
        </nav>

    );
};

export default NavBar;