import * as types from  '../../constants/actionTypes';
import Axios from 'axios';

const apiChannel = 'https://ceres.link/api/sub_board/dsa/api_key=0xe4badc7779b6517';

export const fetchDsaDataSuccess = (data) => {
    return {
        type: types.FETCH_SUB_CHANNAL_SUCCESS,
        data
    }
}

export const fetchDsaData = () => {
    return (dispatch) => {
        return Axios.get(apiChannel)
        .then(response => {
            dispatch(fetchChannelDataSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}