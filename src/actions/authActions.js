import * as types from '../constants/actionTypes';
import Axios from 'axios';
import { browserHistory } from 'react-router';
const apiLogin = 'https://ceres.link/api/login/data:';
const apiSignup = 'https://ceres.link/api/register/data:';
const apiAdminLogin = 'https://ceres.link/api/admin/login/data:area=home,';
const apiAdminLogout = 'https://ceres.link/api/admin/logout/data:area=home,';
const apiQueueEmail = 'http://ceres.link/api/email/queue/data:email=';
const apiPendingEmail = 'http://ceres.link/api/email/send_report/data:';
const apiPreregister = 'https://ceres.link/api/preregister/data:email=';

//Login
export const fetchLoginDataSuccess = (loginData) => {
    console.log(loginData.key);
    localStorage.setItem('apiKey', loginData.key);
    return {
        type: types.FETCH_LOGIN_SUCCESS,
        loginData
    }
}

export const fetchLoginData = (un, pw) => {

    return (dispatch) => {
        return Axios.get(apiLogin + 'un=' + un + ',pw=' + pw)
            .then(response => {
                if (typeof (response.data) === 'object') {
                    dispatch(fetchLoginDataSuccess(response.data))
                    browserHistory.push('/ltr/executivedashboard');
                    
                }
            })
            .catch(error => {
                throw (error);
            });
    };
}
//Signup
export const fetchSignupDataSuccess = (signupData) => {

    return {
        type: types.FETCH_SIGNUP_SUCCESS,
        signupData
    }
}

export const fetchSignupData = (un, pw, email, fn, ln, paycode) => {

    return (dispatch) => {
        return Axios.get(apiSignup + 'un=' + un + ',pw=' + pw + ',e=' + email + ',fn=' + fn + ',ln=' + ln + ',t=' + paycode)
            .then(response => {
                console.log("signup", response.data)
                dispatch(fetchSignupDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
//Admin Login
export const fetchAdminLoginDataSuccess = (adminLoginData) => {

    return {
        type: types.FETCH_ADMIN_LOGIN_SUCCESS,
        adminLoginData
    }
}

export const fetchAdminLoginData = (un, pw) => {

    return (dispatch) => {
        return Axios.get(apiAdminLogin + 'un=' + un + ',pw=' + pw)
            .then(response => {
                dispatch(fetchAdminLoginDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
//Admin Logout
export const fetchAdminLogoutDataSuccess = (adminLogoutData) => {

    return {
        type: types.FETCH_ADMIN_LOGOUT_SUCCESS,
        adminLogoutData
    }
}

export const fetchAdminLogoutData = (un, pw) => {

    return (dispatch) => {
        return Axios.get(apiAdminLogout + 'un=' + un + ',pw=' + pw)
            .then(response => {
                dispatch(fetchAdminLogoutDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
//Queue Email
export const fetchQueueEmailDataSuccess = (queueEmailData) => {

    return {
        type: types.FETCH_QUEUE_EMAIL_SUCCESS,
        queueEmailData
    }
}

export const fetchQueueEmailData = (email) => {

    return (dispatch) => {
        return Axios.get(apiQueueEmail + email)
            .then(response => {
                dispatch(fetchQueueEmailDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
//Pending Email List
export const fetchPendingEmailDataSuccess = (pendingEmailData) => {

    return {
        type: types.FETCH_PENDING_EMAIL_SUCCESS,
        pendingEmailData
    }
}

export const fetchPendingEmailData = (un, pw) => {

    return (dispatch) => {
        return Axios.get(apiPendingEmail + 'un=' + un + ',pw=' + pw)
            .then(response => {
                dispatch(fetchPendingEmailDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
// Email Preregister
export const fetchEmailPreregisterDataSuccess = (emailPreregister) => {

    return {
        type: types.FETCH_EMAIL_PREREGISTER_SUCCESS,
        emailPreregister
    }
}

export const fetchEmailPreregisterData = (email) => {

    return (dispatch) => {
        return Axios.get(apiPreregister + email)
            .then(response => {
                dispatch(fetchEmailPreregisterDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}