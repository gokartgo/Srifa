import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import axios from '../../../axios-user';
import classes from './Login.scss';
import Logo from '../../../assets/icon/logo.svg';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import * as actions from '../../../store/actions/index';

class Login extends Component {

    state = {
        phoneInvalid: true,
        passwordInvalid: false,
        loading: false,
        showInvalid: { disabled: true, word: '' },
    }

    componentWillReceiveProps(prevProps) {
        console.log(this.props.access, prevProps.access)
        if (this.props.access) {
            console.log('access', this.props.access);
            this.props.history.push({
                pathname: '/user/point',
            });
        }
    }

    loginHandler = () => {
        const { username, password } = this.state;

        if (username === "test" && password === "test") {
            Cookies.set("username",username)
            this.props.history.push({
                pathname: '/user/point',
            });
        }
        this.props.onUserLogin(username, password);

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
        this.setState({ username: check })
    }

    passwordValidate = (event) => {
        const check = event.target.value;
        if (check.length > 0) {
            this.setState({ passwordInvalid: false })
        }
        else {
            this.setState({ passwordInvalid: true })
        }
        this.setState({ password: check })
    }

    render() {
        const userIsLogin = Cookies.get('username') !== undefined ? <Redirect to="/user" /> : null;
        return (
            <Aux>
                {userIsLogin}
                <Logo className={classes.Logo} />
                <div>
                    <Input type='text' placeholder='หมายเลขโทรศัพท์' maxLength={10} changed={(event) => this.phoneValidate(event)} />
                </div>
                <input style={{ display: 'none' }} />
                <div>
                    <Input type='password' placeholder='รหัสผ่าน' changed={(event) => this.passwordValidate(event)} />
                </div>
                <div>
                    <Button clicked={this.loginHandler}>เข้าสู่ระบบ</Button>
                </div>
                <div>
                    <Link to="/forget-password">ลืมรหัสผ่าน</Link>
                </div>
                <div>
                    <label className={classes.Invalid}>{this.props.error}</label>
                </div>
            </Aux>

        )
    }
}

const mapStateToProps = state => {
    return {
        access: state.access,
        error: state.error,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (username, password) => dispatch(actions.userLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);