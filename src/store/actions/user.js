import * as actionTypes from './actionTypes';
import Cookies from 'js-cookie';
import axios from '../../axios-user';

export const userLoginStart = () => {
    return {
        type: actionTypes.USER_LOGIN_START,
    }
}

export const userLoginSuccess = (data) => {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        user: data,
    }
}

export const userLoginFail = (error) => {
    return {
        type: actionTypes.USER_LOGIN_FAIL,
        error: error
    }
}

export const userLogin = (username, password) => {
    return (dispatch) => {
        dispatch(userLoginStart());
        axios.post('/member/login', { username, password })
            .then(data => {
                if (data.data.statuscode >= 0) {
                    Cookies.set('username', username);
                    Cookies.set('password', password);
                    Cookies.set('memberid', data.data.member.memberid);
                    dispatch(userLoginSuccess(data));
                } else {
                    dispatch(userLoginFail(data.data.statusdesc));
                }
            }).catch(error => {
                console.log('error', error)
                dispatch(userLoginFail(error));
            });
    }
}

export const getUserHistoryPointStart = () => {
    return {
        type: actionTypes.GET_USER_HISTORY_POINT_START
    }
}

export const getUserHistoryPointSuccess = (data) => {
    return {
        type: actionTypes.GET_USER_HISTORY_POINT_SUCCESS,
        historyPoint: data,
    }
}

export const getUserHistoryPointFail = (error) => {
    return {
        type: actionTypes.GET_USER_HISTORY_POINT_FAIL,
        error: error,
    }
}

export const getUserHistoryPoint = (memberid) => {
    return (dispatch) => {
        dispatch(getUserHistoryPointStart());
        axios.post('/trans/list', { memberid })
            .then(data => {
                dispatch(getUserHistoryPointSuccess(data))
            }).catch(error => {
                console.log('error', error)
                dispatch(getUserHistoryPointFail(error));
            });
    }
}

export const userLogout = () => {
    return {
        type: actionTypes.USER_LOGOUT,
    }
}