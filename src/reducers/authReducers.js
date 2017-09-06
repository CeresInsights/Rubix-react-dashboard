import * as types from '../constants/actionTypes';
const initialState = {
  loginData: {},
  signupData: {},
  adminLoginData: '',
  adminLogoutData: '',
  queueEmailData: '',
  pendingEmailData: {}
};

const loginReducer = (state = initialState.loginData, action) => {
  switch (action.type) {
    case types.FETCH_LOGIN_SUCCESS:
      return action.loginData;
      default:
      return state;
  }
}
const signupReducer = (state = initialState.signupData, action) => {
  switch (action.type) {
    case types.FETCH_SIGNUP_SUCCESS:
      return action.signupData;
      default:
      return state;
  }
}
const adminLoginReducer = (state = initialState.adminLoginData, action) => {
  switch (action.type) {
    case types.FETCH_ADMIN_LOGIN_SUCCESS:
      return action.adminLoginData;
      default:
      return state;
  }
}
const adminLogoutReducer = (state = initialState.adminLogoutData, action) => {
  switch (action.type) {
    case types.FETCH_ADMIN_LOGOUT_SUCCESS:
      return action.adminLogoutData;
      default:
      return state;
  }
}
const queueEmailReducer = (state = initialState.queueEmailData, action) => {
  switch (action.type) {
    case types.FETCH_QUEUE_EMAIL_SUCCESS:
      return action.queueEmailData;
      default:
      return state;
  }
}
const pendingEmailReducer = (state = initialState.pendingEmailData, action) => {
  switch (action.type) {
    case types.FETCH_PENDING_EMAIL_SUCCESS:
      return action.pendingEmailData;
      default:
      return state;
  }
}

module.exports = {
  loginReducer,
  signupReducer,
  adminLoginReducer,
  adminLogoutReducer,
  queueEmailReducer,
  pendingEmailReducer
}