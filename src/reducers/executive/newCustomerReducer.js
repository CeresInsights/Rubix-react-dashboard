import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export const newCustomerReducer = (state = initialState.newCustomer, action) => {
    switch (action.type) {
        case types.FETCH_NEW_CUSTOMER_SUCCESS:
          return action.data;
        default:
          return state;
    }
}