import * as types from '../constants/actionTypes';
import initialState from './initialState';

export const customerPayReducer = (state = initialState.customerPay, action) => {
    switch (action.type) {
        case types.FETCH_CUSTOMER_PAY_SUCCESS:
          return action.data;
        default:
          return state;
    }
};

export const dsaDataReducer = (state = initialState.dsaData, action) => {
    switch (action.type) {
        case types.FETCH_DSA_SUCCESS:
          return action.data;
        default:
          return state;
    }
}

export const execSmaChannelReducer = (state = initialState.execChannel, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_CHANNEL_SUCCESS:
            return [
                ...state, Object.assign({}, action.data)
            ]
        //   return action.data.channel;
        default:
            return state;
    }
}

export const execSmaProductReducer = (state = initialState.execProduct, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_PRODUCT_SUCCESS:
            return [
                ...state, Object.assign({}, action.data)
            ]
        //   return action.data;
        default:
          return state;
    }
}

export const newCustomerReducer = (state = initialState.newCustomer, action) => {
    switch (action.type) {
        case types.FETCH_NEW_CUSTOMER_SUCCESS:
          return action.data;
        default:
          return state;
    }
}