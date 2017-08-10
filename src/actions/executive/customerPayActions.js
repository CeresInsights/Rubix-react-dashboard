import * as types from '../../constants/actionTypes';
import Axios from 'axios';

// console.log("Local", localStorage.api_key);
// const apiCustomerPay = 'https://ceres.link/api/exec_board/prod_pay/api_key=0xe4badc7779b6517';

export const fetchCustomerPayDataSuccess = (data) => {

    return {
        type: types.FETCH_CUSTOMER_PAY_SUCCESS,
        data
    }
}

export const fetchCustomerPayData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(`https://ceres.link/api/exec_board/prod_pay/api_key=${apiKey}`)
            .then(response => {
                dispatch(fetchCustomerPayDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}