import * as types from '../constants/actionTypes';
import Axios from 'axios';

const apiSelectedKeys = 'https://ceres.link/api/override_keys/api_key=';
const apiAllKeys = 'https://ceres.link/api/graphmeta/api_key=';

// Api for getting all pks, sks, cks
export const fetchFilterDataSuccess = (data) => {

    return {
        type: types.FETCH_FILTER_METADATA_SUCCESS,
        data
    }
}

export const fetchFilterData = (apiKey, pk, sk, ck) => {

    return (dispatch) => {
        return Axios.get(apiAllKeys + apiKey+';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck)
            .then(response => {
                dispatch(fetchFilterDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

//Api for getting the selected pk,sk and ck
export const fetchKeysDataSuccess = (data) => {

    return {
        type: types.FETCH_KEYS_SUCCESS,
        data
    }
}

export const fetchKeysData = (apiKey, pk, sk, ck) => {

    return (dispatch) => {
        return Axios.get(apiSelectedKeys + apiKey +';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck)
            .then(response => {
                dispatch(fetchKeysDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

// Api for getting default keys(pk=country, sk=germany, ck=purchase_log_csv)
export const fetchDefaultKeysSuccess = (data) => {

    return {
        type: types.FETCH_DEFAULT_KEYS_SUCCESS,
        data
    }
}

export const fetchDefaultKeys = (apiKey) => {
console.log("adfafasfasfasfsafsafsa")
    return (dispatch) => {
        return Axios.get(apiSelectedKeys + apiKey +';data:pk=country,sk=germany,ck=purchase_log_csv')
            .then(response => {
                dispatch(fetchDefaultKeysSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}