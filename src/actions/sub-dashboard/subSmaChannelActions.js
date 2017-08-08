import * as types from  '../../constants/actionTypes';
import Axios from 'axios';

const apiChannel = 'https://ceres.link/api/sub_board/sma_channel/api_key=0xe4badc7779b6517';

export const fetchDsaDataSuccess = (data) => {
    return {
        type: types.FETCH_SUB_DSA_SUCCESS,
        data
    }
}

export const fetchChannelData = () => {
    return (dispatch) => {
        return Axios.get(apiChannel)
        .then(response => {
            dispatch(fetchDsaDataSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}