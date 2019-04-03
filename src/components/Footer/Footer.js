import React, { Component } from 'react';
import classes from './Footer.scss';
import IconFacebook from '../../assets/icon/facebook-icon.svg'
import IconHome from '../../assets/icon/home.svg'
class Footer extends Component {

    render() {
        return (
            <div className={classes.Footer} >
                <div className={classes.Word}>Copyright 2018 © Srifa Bakery Kanchanaburi. All Rights Reserved.</div>
                <div className={classes.IconContent}>
                    <IconHome />
                    <IconFacebook />
                </div>
            </div>
        )
    }
}

export default Footer;