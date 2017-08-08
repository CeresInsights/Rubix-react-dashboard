import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export const subSmaChannelReducer = (state = initialState.subChannel, action) => {
    switch (action.type) {
        case types.FETCH_SUB_CHANNAL_SUCCESS:
            console.log("FFFFFFFFFFFFF", action.data)
            return [
                ...state, Object.assign({}, action.data)
            ]
        //   return action.data;
        default:
            return state;
    }
}