import * as types from  '../../constants/actionTypes';
import Axios from 'axios';

const apiDsa = 'https://ceres.link/api/exec_board/dsa/api_key=0xe4badc7779b6517';

export const fetchDsaDataSuccess = (data) => {

    return {
        type: types.FETCH_DSA_SUCCESS,
        data
    }
}

export const fetchDsaData = () => {
    return (dispatch) => {
        return Axios.get(apiDsa)
        .then(response => {
            dispatch(fetchDsaDataSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}