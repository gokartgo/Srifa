import React, { Component } from 'react';
import Footer from '../../../components/Footer/Footer';
import classes from './LoginLayout.scss';
import IconFacebook from '../../../assets/icon/facebook-icon.svg';
import IconHome from '../../../assets/icon/home.svg';

class LoginLayout extends Component {

    state = {
        phoneInvalid: true,
        passwordInvalid: false,
        showInvalid: { disabled: true, word: '' },
    }

    render() {
        return (
            <div className={classes.Background}>
                <div className={classes.LoginLayout} >
                    {this.props.children}
                </div>
                <Footer />
            </div>

        )
    }
}

export default LoginLayout;