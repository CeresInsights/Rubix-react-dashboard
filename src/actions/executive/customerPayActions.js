import * as types from  '../../constants/actionTypes';
import Axios from 'axios';

const apiCustomerPay = 'https://ceres.link/api/exec_board/prod_pay/api_key=0xe4badc7779b6517';

export const fetchCustomerPayDataSuccess = (data) => {
    return {
        type: types.FETCH_CUSTOMER_PAY_SUCCESS,
        data
    }
}

export const fetchCustomerPayData = () => {
    return (dispatch) => {
        return Axios.get(apiCustomerPay)
        .then(response => {
            
            console.log("fetchCustomerPayData", response.data)
            dispatch(fetchCustomerPayDataSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}