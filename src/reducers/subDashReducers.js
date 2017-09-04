import * as types from '../constants/actionTypes';

const initialState = {
    subChannel: [],
    subDsa: [],
    subAsi: [],
    subMad: [],
    subBdw: []
}

export const subDashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SUB_DSA_SUCCESS:
            return action.subDsa;
        case types.FETCH_SUB_CHANNAL_SUCCESS:
            return [
                ...state, Object.assign({}, action.subChannel)
            ]
        case types.FETCH_BDW_SUCCESS:
            return action.subBdw;
        case types.FETCH_MAD_SUCCESS:
            return action.subMad;
        case types.FETCH_ASI_SUCCESS:
            return action.subAsi;
        default:
            return state;
    }
}

module.exports = {
    subDashboardReducer,
}
