import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export const subDsaReducer = (state = initialState.subDsa, action) => {
    switch (action.type) {
        case types.FETCH_SUB_DSA_SUCCESS:
            return action.data;
        default:
            return state;
    }
}