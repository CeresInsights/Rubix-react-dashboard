import * as types from '../constants/actionTypes';
import initialState from './initialState';

export const subDsaReducer = (state = initialState.subDsa, action) => {
    switch (action.type) {
        case types.FETCH_SUB_DSA_SUCCESS:
            return action.data;
        default:
            return state;
    }
}

export const subSmaChannelReducer = (state = initialState.subChannel, action) => {
    switch (action.type) {
        case types.FETCH_SUB_CHANNAL_SUCCESS:
            return [
                ...state, Object.assign({}, action.data)
            ]
        //   return action.data;
        default:
            return state;
    }
}

export const subSmaProductReducer = (state = initialState.subChannel, action) => {
    switch (action.type) {
        case types.FETCH_SUB_CHANNAL_SUCCESS:
            return action.data;
        default:
            return state;
    }
}

export const subBdwReducer = (state = initialState.subBdw, action) => {
    switch (action.type) {
        case types.FETCH_BDW_SUCCESS:
            return action.data;
        default:
            return state;
    }
}

export const subMadReducer = (state = initialState.subMad, action) => {
    switch (action.type) {
        case types.FETCH_MAD_SUCCESS:
            return action.data;
        default:
            return state;
    }
}

export const subAsiReducer = (state = initialState.subAsi, action) => {
    switch (action.type) {
        case types.FETCH_ASI_SUCCESS:
            return action.data;
        default:
            return state;
    }
}
