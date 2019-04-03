import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './ConfirmOTP.scss';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';

class ConfirmOTP extends Component {

    state = {
        otpInvalid: true,
        otpInput: '',
        showInvalid: { disabled: true, word: '' },
    }

    loginHandler = () => {
        const { otpInvalid, otpInput } = this.state;
        if (otpInput === '') {
            this.setState({ showInvalid: { disabled: false, word: 'โปรดระบุรหัส OTP' } })
        } else if (otpInvalid) {
            this.setState({ showInvalid: { disabled: false, word: 'รหัส OTP ที่คุณกรอกไม่ถูกต้อง' } })
        } else {
            this.setState({ showInvalid: { disabled: true, word: '' } })
            this.props.history.push({
                pathname: '/finish',
            })
        }
    }

    otpValidate = (event) => {
        const check = event.target.value;
        const otp = /^\d{6}$/;
        if (!check.match(otp)) {
            this.setState({ otpInvalid: true })
        }
        if (check.match(otp) && check === '123456') {
            this.setState({ otpInvalid: false })
        }
        this.setState({ otpInput: check });
    }

    render() {
        const { showInvalid } = this.state;
        return (
            <Aux>
                <div>
                    <p className={classes.Header}>ยืนยันตัวตน</p>
                </div>
                <div>
                    <p className={classes.SubHeader}>ตรวจสอบ sms หมายเลข</p>
                </div>
                <div>
                    <p className={classes.SubHeader}>0863866117</p>
                </div>
                <div>
                    <Input type='text' placeholder='กรอกรหัสผ่าน (OTP)' maxLength={6} changed={(event) => this.otpValidate(event)} />
                </div>
                <div>
                    <a href='/'>ส่งรหัสผ่านซ้ำอีกครั้ง</a>
                </div>
                <div>
                    <Button clicked={this.loginHandler}>ยืนยัน OTP</Button>
                </div>
                <div>
                    <label className={classes.Invalid}>{showInvalid.word}</label>
                </div>
            </Aux>
        )
    }
}

export default ConfirmOTP;