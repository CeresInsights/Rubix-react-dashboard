import * as types from '../constants/actionTypes';
import Axios from 'axios';

const apiDataBrowser = 'https://ceres.link/api/override/api_key=';
const apiSelectedKeys = 'https://ceres.link/api/override_keys/api_key=';
const apiAllKeys = 'https://ceres.link/api/graphmeta/api_key=';
const apiDataLoad = 'https://ceres.link/api/add_data/api_key=';

////////////// Data Browser Api////////////////////////////
export const fetchBrowserDataSuccess = (browserData) => {

    return {
        type: types.FETCH_DATA_BROWSER_SUCCESS,
        browserData
    }
}

export const fetchBrowserData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiDataBrowser + apiKey)
            .then(response => {
                dispatch(fetchBrowserDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
/////////////////////// Data Loader Api///////////////////
export const fetchLoadDataSuccess = (loadData) => {

    return {
        type: types.FETCH_DATA_LOADER_SUCCESS,
        loadData
    }
}

export const fetchLoadData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiDataLoad + apiKey)
            .then(response => {
                dispatch(fetchLoadDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
//////////////////// Filter Metadata Apis////////////////////////////////////
// Api for getting all pks, sks, cks
export const fetchFilterContentDataSuccess = (allKeys) => {

    return {
        type: types.FETCH_FILTER_METADATA_SUCCESS,
        allKeys
    }
}

export const fetchFilterContentData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiAllKeys + apiKey)
            .then(response => {
                dispatch(fetchFilterContentDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

//Api for getting the selected pk,sk and ck
export const fetchSelectedKeysDataSuccess = (selectedKeys) => {

    return {
        type: types.FETCH_SELECTED_KEYS_SUCCESS,
        selectedKeys
    }
}

export const fetchSelectedKeysData = (apiKey, pk, sk, ck) => {

    return (dispatch) => {
        return Axios.get(apiSelectedKeys + apiKey + ';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck)
            .then(response => {
                dispatch(fetchSelectedKeysDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

// Api for getting default keys(pk=country, sk=united_states, ck=purchase_log_csv)
export const fetchDefaultKeysSuccess = (defaultKeys) => {

    return {
        type: types.FETCH_DEFAULT_KEYS_SUCCESS,
        defaultKeys
    }
}

export const fetchDefaultKeys = (apiKey) => {
    
    return (dispatch) => {
        return Axios.get(apiSelectedKeys + apiKey + ';data:pk=country,sk=united_states,ck=purchase_log_csv')
            .then(response => {
                dispatch(fetchDefaultKeysSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}