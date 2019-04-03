import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initialState = {
    user: {},
    historyPoint: {},
    loading: false,
    error: "",
    access: false,
};

const userLoginStart = (state, action) => {
    return updateObject(state, { loading: true });
}

const userLoginSuccess = (state, action) => {
    return updateObject(state, { user: action.user, loading: false, error: "", access: true });
}

const userLoginFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error });
}

const getUserHistoryPointStart = (state, action) => {
    return updateObject(state, { loading: true });
}

const getUserHistoryPointSuccess = (state, action) => {
    return updateObject(state, { historyPoint: action.historyPoint, loading: false });
}

const getUserHistoryPointFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error });
}

const userLogout = (state, action) => {
    return updateObject(state, { access: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_START: return userLoginStart(state, action);
        case actionTypes.USER_LOGIN_SUCCESS: return userLoginSuccess(state, action);
        case actionTypes.USER_LOGIN_FAIL: return userLoginFail(state, action);
        case actionTypes.GET_USER_HISTORY_POINT_START: return getUserHistoryPointStart(state, action);
        case actionTypes.GET_USER_HISTORY_POINT_SUCCESS: return getUserHistoryPointSuccess(state, action);
        case actionTypes.GET_USER_HISTORY_POINT_FAIL: return getUserHistoryPointFail(state, action);
        case actionTypes.USER_LOGOUT: return userLogout(state, action);
        default: return state;
    };
};

export default reducer;