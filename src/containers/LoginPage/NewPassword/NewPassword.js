import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './NewPassword.scss';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class NewPassword extends Component {

    state = {
        newPassword: '',
        confirmPassword: '',
        passwordInvalid: true,
        showInvalid: { disabled: true, word: '' },
    }

    changePasswordHandler = () => {
        const { passwordInvalid, newPassword, confirmPassword } = this.state;

        if (passwordInvalid) {
            this.setState({ showInvalid: { disabled: false, word: 'กรุณากรอกรหัสผ่าน' } })
        }
        else if (newPassword !== confirmPassword) {
            this.setState({ showInvalid: { disabled: false, word: 'กรุณากรอกรหัสผ่านให้ตรง' } })
        }
        else {
            this.setState({ showInvalid: { disabled: true, word: '' } })
        }
        // this.props.history.push({
        //     pathname: '/',
        // })
    }

    passwordValidate = (event) => {
        this.setState({ newPassword: event.target.value, passwordInvalid: false })
    }

    confirmPasswordValidate = (event) => {
        this.setState({ confirmPassword: event.target.value, passwordInvalid: false })
    }

    render() {
        const { showInvalid } = this.state;
        return (
            <Aux>
                <div>
                    <p className={classes.Header}>ตั้งรหัสผ่าน</p>
                </div>
                <input style={{ display: 'none' }} />
                <div>
                    <Input type='password' placeholder='ตั้งรหัสผ่านใหม่' changed={(event) => this.passwordValidate(event)} />
                </div>
                <input style={{ display: 'none' }} />
                <div>
                    <Input type='password' placeholder='ยืนยันรหัสผ่านใหม่อีกครั้ง' changed={(event) => this.passwordValidate(event)} />
                </div>
                <div>
                    <Button clicked={this.loginHandler}>เข้าสู่ระบบ</Button>
                </div>
                <div>
                    <label className={classes.Invalid}>{showInvalid.word}</label>
                </div>
            </Aux>
        )
    }
}

export default NewPassword;