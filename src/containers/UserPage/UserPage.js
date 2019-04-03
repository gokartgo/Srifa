import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';
import classes from './UserPage.scss';
import ImagePrivilege from '../../assets/image/privilege.png';
import CloseIcon from '../../assets/icon/close.svg';
import UserPoint from './UserPoint/UserPoint';
import UserForm from './UserForm/UserForm';
import { Object } from 'core-js';
import * as actions from '../../store/actions/index';
import axios from '../../axios-user';

class UserPage extends Component {
    state = {
        show: false,
        privilege: {
            silver: true,
            gold: false,
            platinum: false,
            vip: false,
        },
        userLogout: false,
    }

    componentWillMount() {
        const username = Cookies.get('username');
        const password = Cookies.get('password');
        const memberid = Cookies.get('memberid');
        if (!this.props.access &&
            username !== undefined &&
            password !== undefined &&
            memberid !== undefined) {
            this.props.onUserLogin(username, password);
            this.props.onGetUserHistoryPoint(memberid);
        }
    }

    componentDidMount() {
        const memberid = Cookies.get('memberid');
        this.props.onGetUserHistoryPoint(memberid);
    }

    toForm = () => {
        this.props.history.push({
            pathname: '/user/form',
        })
    }

    showModal = () => {
        this.setState({ show: true });
    }

    closeModal = () => {
        this.setState({ show: false });
    }

    logout = () => {
        Cookies.remove('username');
        Cookies.remove('password');
        Cookies.remove('memberid');
        this.props.onUserLogout();
    }

    choosePrivilege = (event) => {
        console.log(event.target.getAttribute('name'));
        const name = event.target.getAttribute('name');
        Object.keys(this.state.privilege).forEach(key => {
            if (key == name) {
                console.log('name', name)
                this.setState((prevState) => {
                    return { privilege: { ...prevState.privilege, [key]: true } }
                });
            } else {
                this.setState((prevState) => {
                    return { privilege: { ...prevState.privilege, [key]: false } }
                });
            }
        })
        console.log('state', this.state.privilege);
    }

    render() {
        const { show } = this.state;
        const { user: { data: { member: { firstname = "", lastname = "", image = "" } = {} } = {} } = {} } = this.props
        return (<Aux>
            {Cookies.get('username') === undefined && !this.props.access ? <Redirect to="/login" /> : ''}
            <Modal show={show} modalClosed={this.closeModal}>
                <CloseIcon className={classes.CloseIcon} onClick={this.closeModal} />
                <div className={classes.ModalHeader}>
                    สิทธิประโยชน์ของระดับสมาชิก
                </div>
                <div className={classes.ModalNav}>
                    <div name='silver' className={this.state.privilege.silver ? classes.Choose : ''} onClick={this.choosePrivilege}>Silver</div>
                    <div name='gold' onClick={this.choosePrivilege} className={this.state.privilege.gold ? classes.Choose : ''}>Gold</div>
                    <div name='platinum' onClick={this.choosePrivilege} className={this.state.privilege.platinum ? classes.Choose : ''}>Platinum</div>
                    <div name='vip' onClick={this.choosePrivilege} className={this.state.privilege.vip ? classes.Choose : ''}>VIP</div>
                </div>
                <div className={classes.ModalBody}>
                    <div className={classes.ModalImage} >
                        <img src={ImagePrivilege} />
                    </div>
                    <div className={classes.ModalText} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </Modal>

            <Header
                iconClick={this.showModal}
                userClick={this.toForm}
                imageUser={image}
                nameUser={`${firstname} ${lastname}`}
                logoutClick={this.logout} />
            <Switch>
                <Route path="/user/form" component={UserForm} />
                <Route path="/user/point" component={UserPoint} />
                <Route component={UserPoint} />
            </Switch>
            <Footer />
        </Aux>)
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        access: state.access,
        historyPoint: state.historyPoint,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (username, password) => dispatch(actions.userLogin(username, password)),
        onGetUserHistoryPoint: (memberid) => dispatch(actions.getUserHistoryPoint(memberid)),
        onUserLogout: () => dispatch(actions.userLogout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);