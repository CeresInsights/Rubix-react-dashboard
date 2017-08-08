import * as types from  '../../constants/actionTypes';
import Axios from 'axios';

const apiChannel = 'https://ceres.link/api/exec_board/sma_channel/api_key=0xe4badc7779b6517';

export const fetchChannelDataSuccess = (data) => {
    return {
        type: types.FETCH_EXEC_CHANNEL_SUCCESS,
        data
    }
}

export const fetchChannelData = () => {
    return (dispatch) => {
        return Axios.get(apiChannel)
        .then(response => {
                        console.log("fetchChannelData", response.data)
            dispatch(fetchChannelDataSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}