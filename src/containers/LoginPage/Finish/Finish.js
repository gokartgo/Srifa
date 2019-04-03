import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Finish.scss';
import Button from '../../../components/UI/Button/Button';
import IconChecked from '../../../assets/icon/checked.svg';


class Finish extends Component {

    state = {
        phoneInvalid: true,
        showInvalid: { disabled: true, word: '' },
    }

    loginHandler = () => {
        this.props.history.push({
            pathname: '/user/point',
        })
    }

    render() {
        const { showInvalid } = this.state;
        return (
            <Aux>
                <IconChecked className={classes.IconChecked} />
                <div>
                    <p className={classes.Header}>คุณได้ตั้งรหัสผ่านเรียบร้อยแล้ว</p>
                </div>
                <div>
                    <Button clicked={this.loginHandler} style={{
                        width: '275px',
                        background: '#5ac2e7',
                        border: '1px solid #5ac2e7'
                    }}>เข้าสู่ระบบ</Button>
                </div>
                <div>
                    <label className={classes.Invalid}>{showInvalid.word}</label>
                </div>
            </Aux>
        )
    }
}

export default Finish;