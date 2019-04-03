import React, { Component } from 'react';
import classes from './Modal.scss';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        const { props } = this;
        return (
            <Aux>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                <div className={classes.Modal}
                    style={{
                        transform: props.show ? 'translate(-50%,-50%)' : 'translate(-50%, -200vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    {props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;