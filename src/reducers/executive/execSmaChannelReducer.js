import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export const execSmaChannelReducer = (state = initialState.execChannel, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_CHANNEL_SUCCESS:
            return [
                ...state, Object.assign({}, action.data)
            ]
        //   return action.data.channel;
        default:
            return state;
    }
}