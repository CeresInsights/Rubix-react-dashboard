import * as types from '../constants/actionTypes';
const initialState = {
  loginData: [],
  signupData: [],
  adminLoginData: [],
  queuedEmailData: [],
  pendingEmailData: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LOGIN_SUCCESS:
    console.log("LoginReducer", action.loginData)
      return action.loginData;
    case types.FETCH_SIGNUP_SUCCESS:
      return action.signupData;
    case types.FETCH_ADMIN_LOGIN_SUCCESS:
      return action.adminLoginData;
    case types.FETCH_QUEUE_EMAIL_SUCCESS:
      return action.queuedEmailData;
    case types.FETCH_PENDING_EMAIL_SUCCESS:
      return action.pendingEmailData;
    default:
      return state;
  }
};

module.exports = {
  authReducer,
}