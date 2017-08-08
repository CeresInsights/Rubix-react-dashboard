import * as types from  '../../constants/actionTypes';
import Axios from 'axios';

const apiNewCustomer = 'https://ceres.link/api/exec_board/demographics/api_key=0xe4badc7779b6517';

export const fetchNewCustomerDataSuccess = (data) => {
    return {
        type: types.FETCH_NEW_CUSTOMER_SUCCESS,
        data
    }
}

export const fetchNewCustomerData = () => {
    return (dispatch) => {
        return Axios.get(apiNewCustomer)
        .then(response => {
            dispatch(fetchNewCustomerDataSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}