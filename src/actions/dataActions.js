import * as types from '../constants/actionTypes';
import * as execDashActions from './execDashActions';
import * as subDashActions from './subDashActions';
import Axios from 'axios';

const apiDataBrowser = 'https://ceres.link/api/override/api_key=';
const apiSelectedKeys = 'https://ceres.link/api/override_keys/api_key=';
const apiAllKeys = 'https://ceres.link/api/graphmeta/api_key=';
const apiDataLoad = 'https://ceres.link/api/add_data/api_key=';

////////////// Data Browser Api////////////////////////////
export const fetchDefaultBrowserDataSuccess = (defaultBrowserData) => {

    return {
        type: types.FETCH_DEFAULT_DATA_BROWSER_SUCCESS,
        defaultBrowserData
    }
}

export const fetchDefaultBrowserData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiDataBrowser + apiKey + ';data:pk=country,sk=united_states,ck=purchase_log_csv')
            .then(response => {
                dispatch(fetchDefaultBrowserDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
//////////////////dynamic data browser api////////////////
export const fetchSelectedBrowserDataSuccess = (selectedBrowserData) => {

    return {
        type: types.FETCH_SELECTED_DATA_BROWSER_SUCCESS,
        selectedBrowserData
    }
}

export const fetchSelectedBrowserData = (apiKey, pk, sk, ck) => {

    return (dispatch) => {
        return Axios.get(apiDataBrowser + apiKey + ';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck)
            .then(response => {
                dispatch(fetchSelectedBrowserDataSuccess(response.data))
                dispatch(execDashActions.fetchMadData(apiKey));
                dispatch(execDashActions.fetchCsrData(apiKey));
                dispatch(execDashActions.fetchBdwData(apiKey));
                dispatch(execDashActions.fetchAsiData(apiKey));
                dispatch(execDashActions.fetchChannelData(apiKey));
                dispatch(execDashActions.fetchProdPayData(apiKey));
                dispatch(execDashActions.fetchProdProductData(apiKey));
                dispatch(execDashActions.fetchDsaData(apiKey));
                dispatch(execDashActions.fetchProductData(apiKey));
                dispatch(execDashActions.fetchDemographicsData(apiKey));

                // Recall of All Sub Dashboard Apis//////
                //////////Recall of Normal Apis///////////////
                dispatch(subDashActions.fetchChannelData(apiKey));
                dispatch(subDashActions.fetchProdPayData(apiKey));
                dispatch(subDashActions.fetchProdProductData(apiKey));
                dispatch(subDashActions.fetchDsaData(apiKey));
                dispatch(subDashActions.fetchProductData(apiKey));
                //Recall Of Recommender Apis
                dispatch(subDashActions.fetchChannelRecommenderData(apiKey));
                dispatch(subDashActions.fetchProductRecommenderData(apiKey));
                dispatch(subDashActions.fetchDsaRecommenderData(apiKey));
                dispatch(subDashActions.fetchProdPayRecommenderData(apiKey));
                dispatch(subDashActions.fetchProdProductRecommenderData(apiKey));

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

export const fetchLoadData = (apiKey, loadData) => {
    return (dispatch) => {
        return Axios.get(apiDataLoad + apiKey + ';data:' + loadData)
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

export const fetchSelectedKeysData = (apiKey, pk, sk, ck) => {

    return (dispatch) => {
        return Axios.get(apiSelectedKeys + apiKey + ';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck)
            .then(response => {
                dispatch(execDashActions.fetchMadData(apiKey));
                dispatch(execDashActions.fetchCsrData(apiKey));
                dispatch(execDashActions.fetchBdwData(apiKey));
                dispatch(execDashActions.fetchAsiData(apiKey));
                dispatch(execDashActions.fetchChannelData(apiKey));
                dispatch(execDashActions.fetchProdPayData(apiKey));
                dispatch(execDashActions.fetchProdProductData(apiKey));
                dispatch(execDashActions.fetchDsaData(apiKey));
                dispatch(execDashActions.fetchProductData(apiKey));
                dispatch(execDashActions.fetchDemographicsData(apiKey));

                // Recall of All Sub Dashboard Apis//////
                //////////Recall of Normal Apis///////////////
                dispatch(subDashActions.fetchChannelData(apiKey));
                dispatch(subDashActions.fetchProdPayData(apiKey));
                dispatch(subDashActions.fetchProdProductData(apiKey));
                dispatch(subDashActions.fetchDsaData(apiKey));
                dispatch(subDashActions.fetchProductData(apiKey));
                //Recall Of Recommender Apis
                dispatch(subDashActions.fetchChannelRecommenderData(apiKey));
                dispatch(subDashActions.fetchProductRecommenderData(apiKey));
                dispatch(subDashActions.fetchDsaRecommenderData(apiKey));
                dispatch(subDashActions.fetchProdPayRecommenderData(apiKey));
                dispatch(subDashActions.fetchProdProductRecommenderData(apiKey));

            })
            .catch(error => {
                throw (error);
            });
    };
}

// Api for getting initial keys
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