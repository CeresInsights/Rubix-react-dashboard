import * as types from '../constants/actionTypes';
import Axios from 'axios';

const apiDataBrowser = 'https://ceres.link/api/override/api_key=';
export const fetchBrowserDataSuccess = (data) => {

    return {
        type: types.FETCH_DATA_BROWSER_SUCCESS,
        data
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