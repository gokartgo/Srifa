import React from 'react';
import classes from './Button.scss';

const button = (props) => {
    return <button
        {...props}
        className={classes.Button + ' ' + (props.class && props.class)} onClick={props.clicked}>{props.children}</button>
};

export default button