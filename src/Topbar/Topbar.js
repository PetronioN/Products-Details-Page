import React from 'react';

import classes from './Topbar.module.css';

const Topbar = () => {
    return (
        <header>
            <nav className={classes.Topbar}>
            <img src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" 
            alt="Amazon Logo"/>
            </nav>
        </header>
    )
}

export default Topbar;