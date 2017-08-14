import * as types from '../constants/actionTypes';
import Axios from 'axios';

const apiDataLoader = 'https://ceres.link/api/add_data/api_key=';
export const fetchClientLoaderDataSuccess = (data) => {

    return {
        type: types.FETCH_DATA_LOADER_SUCCESS,
        data
    }
}

export const fetchClientLoaderData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiDataLoader + apiKey)
            .then(response => {
                dispatch(fetchClientLoaderDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}