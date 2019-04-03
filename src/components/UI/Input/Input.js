import React from 'react';
import classes from './Input.scss';

const input = (props) => {
    return <input
        {...props}
        className={classes.Input + ' ' + (props.class && props.class)} // props.class != undefined return props.class
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.changed}
        maxlength={props.maxLength}
        autocomplete="off">{props.children}</input>
};

export default input