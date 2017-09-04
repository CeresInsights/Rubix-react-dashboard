import * as types from '../constants/actionTypes';

const initialState = {
    execChannel: [],
    execProduct: [],
    dsaData: [],
    customerPay: [],
    newCustomer: []
}

export const executiveDashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CUSTOMER_PAY_SUCCESS:
            return action.customerPay;
        case types.FETCH_DSA_SUCCESS:
            return action.dsaData;
        case types.FETCH_EXEC_CHANNEL_SUCCESS:
            return [
                ...state, Object.assign({}, action.execChannel)
            ]
        case types.FETCH_EXEC_PRODUCT_SUCCESS:
            return [
                ...state, Object.assign({}, action.execProduct)
            ]
        case types.FETCH_NEW_CUSTOMER_SUCCESS:
            return action.newCustomer;
        default:
            return state;
    }
};

module.exports = {
    executiveDashboardReducer
};