import * as types from  '../../constants/actionTypes';
import Axios from 'axios';

const apiProduct = 'https://ceres.link/api/exec_board/sma_product/api_key=0xe4badc7779b6517';

export const fetchProductDataSuccess = (data) => {
    return {
        type: types.FETCH_EXEC_PRODUCT_SUCCESS,
        data
    }
}

export const fetchProductData = () => {
    return (dispatch) => {
        return Axios.get(apiProduct)
        .then(response => {
            console.log("fetchProductData", response.data)
            dispatch(fetchProductDataSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}