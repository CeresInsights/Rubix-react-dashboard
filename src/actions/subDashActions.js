import * as types from  '../constants/actionTypes';
import Axios from 'axios';

const apiDsa = 'https://ceres.link/api/sub_board/dsa/api_key=';
const apiChannel = 'https://ceres.link/api/sub_board/sma_channel/api_key=';
const apiProduct = 'https://ceres.link/api/sub_board/sma_product/api_key=';
const apiBdw = 'https://ceres.link/api/app/bdw/api_key=';
const apiMad = 'https://ceres.link/api/app/bdw/api_key=';
const apiAsi = 'https://ceres.link/api/app/asi/api_key=';

///////////////////Promotion App Apis///////////////////////////////
    // DSA(Digital Shopping Activity) api in Promotion App
    export const fetchDsaDataSuccess = (data) => {
        return {
            type: types.FETCH_SUB_DSA_SUCCESS,
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
                throw(error);
            });
        };
    }
    //SMA channel api in Promotion App
    export const fetchChannelDataSuccess = (data) => {
        return {
            type: types.FETCH_SUB_CHANNAL_SUCCESS,
            data
        }
    }

    export const fetchChannelData = (apiKey) => {
        return (dispatch) => {
            return Axios.get(apiChannel+apiKey)
            .then(response => {
                dispatch(fetchChannelDataSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
        };
    }
    // SMA product api in Promotion App
    export const fetchProductDataSuccess = (data) => {
        return {
            type: types.FETCH_SUB_PRODUCT_SUCCESS,
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
                throw(error);
            });
        };
    }

////////// Campaigns App CPTA 3 Apis//////////////////////
    // BDW Api
    export const fetchBdwDataSuccess = (data) => {
        return {
            type: types.FETCH_BDW_SUCCESS,
            data
        }
    }

    export const fetchBdwData = (apiKey) => {
        return (dispatch) => {
            return Axios.get(apiBdw + apiKey)
            .then(response => {
                dispatch(fetchBdwDataSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
        };
    }

    //Mad Api
    export const fetchBdwDataSuccess = (data) => {
        return {
            type: types.FETCH_MAD_SUCCESS,
            data
        }
    }

    export const fetchBdwData = (apiKey) => {
        return (dispatch) => {
            return Axios.get(apiMad + apiKey)
            .then(response => {
                dispatch(fetchBdwDataSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
        };
    }
    //ASI Api
    export const fetchAsiDataSuccess = (data) => {
        return {
            type: types.FETCH_ASI_SUCCESS,
            data
        }
    }

    export const fetchAsiData = (apiKey) => {
        return (dispatch) => {
            return Axios.get(apiAsi + apiKey)
            .then(response => {
                dispatch(fetchAsiDataSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
        };
    }
