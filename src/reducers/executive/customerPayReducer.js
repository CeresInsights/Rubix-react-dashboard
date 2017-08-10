import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export const customerPayReducer = (state = initialState.customerPay, action) => {
    switch (action.type) {
        case types.FETCH_CUSTOMER_PAY_SUCCESS:
          return action.data;
        default:
          return state;
    }
};