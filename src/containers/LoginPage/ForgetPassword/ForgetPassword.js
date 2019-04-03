import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './ForgetPassword.scss';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class ForgetPassword extends Component {

    state = {
        phoneInvalid: true,
        showInvalid: { disabled: true, word: '' },
    }

    loginHandler = () => {
        const { phoneInvalid } = this.state;

        if (phoneInvalid) {
            this.setState({ showInvalid: { disabled: false, word: 'กรุณาระบุชื่อหรือเบอร์โทรศัพท์' } })
        }
        else {
            this.setState({ showInvalid: { disabled: true, word: '' } })
            this.props.history.push({
                pathname: '/confirm-otp',
            })
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

    render() {
        const { showInvalid } = this.state;
        return (
            <Aux>
                <div>
                    <p className={classes.Header}>ลืมรหัสผ่าน</p>
                </div>
                <div>
                    <Input type='text' placeholder='หมายเลขโทรศัพท์' maxLength={10} changed={(event) => this.phoneValidate(event)} />
                </div>
                <div>
                    <Button clicked={this.loginHandler} style={{ width: '275px' }}>ถัดไป</Button>
                </div>
                <div>
                    <label className={classes.Invalid}>{showInvalid.word}</label>
                </div>
            </Aux>
        )
    }
}

export default ForgetPassword;