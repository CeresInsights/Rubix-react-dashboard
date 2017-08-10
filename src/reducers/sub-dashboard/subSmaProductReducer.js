import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export const subSmaProductReducer = (state = initialState.subChannel, action) => {
    switch (action.type) {
        case types.FETCH_SUB_CHANNAL_SUCCESS:
            return action.data;
        default:
            return state;
    }
}