import React, { Component } from 'react';
import classes from './FormInput.scss';
import Input from '../../UI/Input/Input';

class FormInput extends Component {
    render() {
        const { label, name, changed } = this.props;
        return (
            <div className={classes.InputContent}>
                <div>{label}</div>
                <Input {...this.props} name={name} changed={changed} class={classes.Input} />
            </div>
        );
    }
}

export default FormInput;