import * as types from '../constants/actionTypes';
import Axios from 'axios';

const apiChannel = 'https://ceres.link/api/exec_board/sma_channel/api_key=';
const apiProduct = 'https://ceres.link/api/exec_board/sma_product/api_key=';
const apiNewCustomer = 'https://ceres.link/api/exec_board/demographics/api_key=';
const apiCustomerPay = 'https://ceres.link/api/exec_board/prod_pay/api_key=';
const apiDsa = 'https://ceres.link/api/exec_board/dsa/api_key=';
const apiCsr = 'https://ceres.link/api/app/csr/api_key=';

// Payment Preferences Api in Product Bundles by Consumer Behavior
export const fetchCustomerPayDataSuccess = (data) => {

    return {
        type: types.FETCH_CUSTOMER_PAY_SUCCESS,
        data
    }
}

export const fetchCustomerPayData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiCustomerPay + apiKey)
            .then(response => {
                dispatch(fetchCustomerPayDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

// DSA Api in Product Promotion By Channel
export const fetchDsaDataSuccess = (data) => {

    return {
        type: types.FETCH_DSA_SUCCESS,
        data
    }
}

export const fetchDsaData = (apiKey) => {
    return (dispatch) => {
        return Axios.get(apiDsa + apiKey)
            .then(response => {
                dispatch(fetchDsaDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

// SMA channel Api in Product Promotion By Channel
export const fetchChannelDataSuccess = (data) => {

    return {
        type: types.FETCH_EXEC_CHANNEL_SUCCESS,
        data
    }
}

export const fetchChannelData = (apiKey) => {
    return (dispatch) => {
        return Axios.get(apiChannel + apiKey)
            .then(response => {
                dispatch(fetchChannelDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

// SMA product Api in Product Promotion By Channel
export const fetchProductDataSuccess = (data) => {
    return {
        type: types.FETCH_EXEC_PRODUCT_SUCCESS,
        data
    }
}

export const fetchProductData = (apiKey) => {
    return (dispatch) => {
        return Axios.get(apiProduct + apiKey)
            .then(response => {
                dispatch(fetchProductDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

// New Customer Acquistion/Market Segmentation Api
export const fetchNewCustomerDataSuccess = (data) => {
    return {
        type: types.FETCH_NEW_CUSTOMER_SUCCESS,
        data
    }
}

export const fetchNewCustomerData = (apiKey) => {
    return (dispatch) => {
        return Axios.get(apiNewCustomer + apiKey)
            .then(response => {
                dispatch(fetchNewCustomerDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

// Customer Spending Limits & Ranges Api
export const fetchCsrDataSuccess = (data) => {

    return {
        type: types.FETCH_CSR_SUCCESS,
        data
    }
}

export const fetchCsrData = (apiKey) => {
    return (dispatch) => {
        return Axios.get(apiCsr + apiKey)
            .then(response => {
                dispatch(fetchCsrDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}