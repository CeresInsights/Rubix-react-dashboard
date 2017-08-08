import * as types from  '../../constants/actionTypes';
import Axios from 'axios';

const apiDsa = 'https://ceres.link/api/sub_board/sma_product/api_key=0xe4badc7779b6517';

export const fetchProductDataSuccess = (data) => {
    return {
        type: types.FETCH_SUB_PRODUCE_SUCCESS,
        data
    }
}

export const fetchProductData = () => {
    return (dispatch) => {
        return Axios.get(apiDsa)
        .then(response => {
            dispatch(fetchProductDataSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}