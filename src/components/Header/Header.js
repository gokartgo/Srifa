import React, { Component } from 'react';
import classes from './Header.scss';
import IconLogo from '../../assets/icon/logo-icon.svg';
import User from '../../assets/icon/user.svg';
import Lock from '../../assets/icon/lock.svg';
import SignOut from '../../assets/icon/sign-out.svg';

class Header extends Component {

    constructor() {
        super();

        this.state = {
            showMenuList: false,
            userLogout: false,
        };
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu = (event) => {
        event.preventDefault();

        this.setState({ showMenuList: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenuList: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
        if (this.state.userLogout) {
            this.props.logoutClick();
        }
    }

    logout = () => {
        this.setState({ userLogout: true })
    }

    render() {
        const { showMenuList } = this.state;
        return (
            <div className={classes.Header} >
                <div className={classes.Icon} onClick={this.props.iconClick} >
                    <IconLogo />
                </div>
                <div className={classes.User} onClick={this.showMenu}>
                    <div className={classes.ListContent}>
                        <img className={classes.UserImage} src={this.props.imageUser} />
                        <div className={classes.UserName}>{this.props.nameUser}</div>
                        <span className={classes.IconList}></span>
                        <div className={classes.ListShowContent} style={showMenuList ? { display: 'block' } : { display: 'none' }}>
                            <span className={classes.IconContentList}></span>
                            <div onClick={this.props.userClick}><User />ข้อมูลส่วนตัว</div>
                            <div><Lock />เปลี่ยนรหัสผ่าน</div>
                            <div onClick={this.logout}><SignOut />ออกจากระบบ</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;