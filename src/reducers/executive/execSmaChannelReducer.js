import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export const execSmaChannelReducer = (state = initialState.execChannel, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_CHANNEL_SUCCESS:
          return action.execChannel;
        default:
          return state;
    }
}