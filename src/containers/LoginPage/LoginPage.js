import React, { Component } from 'react';
import LoginLayout from '../../hoc/Layout/LoginLayout/LoginLayout';
import { Route, Switch } from 'react-router-dom';
import Login from './Login/Login'
import ForgetPassword from './ForgetPassword/ForgetPassword';
import ConfirmOTP from './ConfirmOTP/ConfirmOTP';
import NewPassword from './NewPassword/NewPassword';
import Finish from './Finish/Finish';

class LoginPage extends Component {

    state = {
        phoneInvalid: true,
        passwordInvalid: false,
        showInvalid: { disabled: true, word: '' },
    }

    loginHandler = () => {
        const { phoneInvalid, passwordInvalid } = this.state;

        if (phoneInvalid) {
            this.setState({ showInvalid: { disabled: false, word: 'กรุณาระบุชื่อหรือเบอร์โทรศัพท์' } })
        }
        else if (passwordInvalid) {
            this.setState({ showInvalid: { disabled: false, word: 'กรุณากรอกรหัสผ่าน' } })
        }
        else {
            this.setState({ showInvalid: { disabled: true, word: '' } })
        }
        // this.props.history.push({
        //     pathname: '/',
        // })
    }

    phoneValidate = (event) => {
        const check = event.target.value;
        const phoneno = /^\d{10}$/;
        if (!check.match(phoneno)) {
            this.setState({ phoneInvalid: true })
        }
        if (check.match(phoneno)) {
            this.setState({ phoneInvalid: false })
        }
    }

    passwordValidate = (event) => {
        const check = event.target.value;
        if (check.length > 0) {
            this.setState({ passwordInvalid: false })
        }
        else {
            this.setState({ passwordInvalid: true })
        }
    }

    render() {
        const { showInvalid } = this.state;
        return (
            <LoginLayout>
                <Switch>
                    <Route path="/forget-password" component={ForgetPassword} />
                    <Route path="/confirm-otp" component={ConfirmOTP} />
                    <Route path="/new-password" component={NewPassword} />
                    <Route path="/finish" component={Finish} />
                    <Route path="/login" component={Login} />
                    <Route path="/" exact component={Login} />
                </Switch>
            </LoginLayout>

        )
    }
}

export default LoginPage;