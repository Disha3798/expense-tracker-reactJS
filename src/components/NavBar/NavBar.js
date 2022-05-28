import React from 'react';

import classes from './NavBar.module.css';

const NavBar = (props) => {

    const logout = () => {
        props.onLogout()
    }

    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>
        </nav>

    );
};

export default NavBar;