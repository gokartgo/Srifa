import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './UserForm.scss';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import FormInput from '../../../components/Form/FormInput/FormInput';

class UserForm extends Component {

    state = {
        formInvalid: {
            show: false,
            word: '',
        },
        firstNameEng: '',
        lastNameEng: '',
        firstNameThai: '',
        lastNameThai: '',
        telephone: '',
        email: '',
        taxId: '',
        address1: '',
        address2: '',
        subDistrict: '',
        district: '',
        province: '',
        postcode: '',
    }

    handleInputChange = ({ target: { name = '', value = '' } = {} }) => {
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        const { formInvalid: { show } } = this.state
        let formValid = true;
        Object.keys(this.state).some(key => {
            if (this.state[key] === '') {
                this.setState({ formInvalid: { show: true, word: 'กรุณากรอกข้อมูลให้ครบ' } })
                formValid = false;
                event.preventDefault();
                return this.state[key] === ''
            }
        })
        if (formValid) {
            this.props.history.push({
                pathname: '/user/point',
            })
            event.preventDefault();
        }
    }

    render() {
        const { user: { data: { member: { image = "" } = {} } = {} } = {} } = this.props
        const { formInvalid } = this.state;
        return (
            <Aux>
                <div className={classes.UserFormContent}>
                    <div className={classes.UserForm}>
                        <div className={classes.UserFormHeader}>ข้อมูลส่วนตัว</div>
                        <img className={classes.UserFormImage} src={image} />
                        <div className={classes.UserFormInput}>
                            <form className={classes.FormContent} onSubmit={this.handleSubmit}>
                                <div className={classes.FormSelect}>
                                    <div>Title Name (คำนำหน้าชื่อ)</div>
                                    <select style={{ width: '220px' }}>
                                        <option value="Ms">Miss</option>
                                        <option value="Mr">Mister</option>
                                    </select>
                                </div>
                                <div className={classes.FormInput}>
                                    <FormInput label={'Firstname (Eng)'} name={'firstNameEng'} changed={this.handleInputChange} />
                                    <FormInput label='Lastname (Eng)' name='lastNameEng' changed={this.handleInputChange} />
                                </div>
                                <div className={classes.FormInput}>
                                    <FormInput label='Firstname (ชื่อจริง) (Thai)' name='firstNameThai' changed={this.handleInputChange} />
                                    <FormInput label='Lastname (นามสกุล) (Thai)' name='lastNameThai' changed={this.handleInputChange} />
                                </div>
                                <div className={classes.FormInput}>
                                    <FormInput label='Telephone (หมายเลขโทรศัพท์)' name='telephone' changed={this.handleInputChange} />
                                    <FormInput label='E-mail (อีเมล)' name='email' changed={this.handleInputChange} />
                                </div>
                                <div className={classes.FormInput}>
                                    <div className={classes.Input} style={{ width: '100%' }}>
                                        <div>Tax ID Number (เลขประจำตัวผู้เสียภาษี)</div>
                                        <Input name='taxId' changed={this.handleInputChange} style={{ borderRadius: '6px', width: '100%' }} />
                                    </div>
                                </div>
                                <div className={classes.FormInput}>
                                    <div className={classes.Input} style={{ width: '100%' }}>
                                        <div>Address line1 (หมู่บ้าน/อาคาร/บ้านเลขที่) </div>
                                        <Input name='address1' changed={this.handleInputChange} style={{ borderRadius: '6px', width: '100%' }} />
                                    </div>
                                </div>
                                <div className={classes.FormInput}>
                                    <div className={classes.Input} style={{ width: '100%' }}>
                                        <div>Address line2 (หมู่/ซอย/ตรอก/ถนน) </div>
                                        <Input name='address2' changed={this.handleInputChange} style={{ borderRadius: '6px', width: '100%' }} />
                                    </div>
                                </div>
                                <div className={classes.FormInput}>
                                    <FormInput label='Sub District (แขวง/ตำบล)' name='subDistrict' changed={this.handleInputChange} />
                                    <FormInput label='District (เขต/อำเภอ)' name='district' changed={this.handleInputChange} />
                                </div>
                                <div className={classes.FormInput}>
                                    <FormInput label='Province (จังหวัด)' name='province' changed={this.handleInputChange} />
                                    <FormInput label='Postcode (ไปรษณีย์)' name='postcode' changed={this.handleInputChange} />
                                </div>
                                <div className={classes.Invalid}>
                                    {formInvalid.word}
                                </div>
                                <Button class={classes.FormButton}>บันทึก</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, null)(UserForm);