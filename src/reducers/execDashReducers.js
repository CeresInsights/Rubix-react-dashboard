import * as types from '../constants/actionTypes';

const initialState = {
    mad: {},
    bdw: {},
    asi: [],
    csr: {},
    channel: {},
    product: {},
    dsa: {},
    prodPay: {},
    prodProduct: {},
    demographics: {}
}

export const madReducer = (state = initialState.mad, action) => {
    switch (action.type) {
        case types.FETCH_MAD_SUCCESS:
            return action.mad;
        default:
            return state;
    }
}

export const demographicsReducer = (state = initialState.demographics, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_DEMOGRAPHICS_SUCCESS:
            return action.demographics;
        default:
            return state;
    }
}
export const channelReducer = (state = initialState.channel, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_CHANNEL_SUCCESS:
            return action.channel;
        default:
            return state;
    }
}
export const productReducer = (state = initialState.product, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_PRODUCT_SUCCESS:
            return action.product;
        default:
            return state;
    }
}
export const dsaReducer = (state = initialState.dsa, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_DSA_SUCCESS:
            return action.dsa;
        default:
            return state;
    }
}
export const prodPayReducer = (state = initialState.prodPay, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_PROD_PAY_SUCCESS:
            return action.prodPay;
        default:
            return state;
    }
}
export const prodProductReducer = (state = initialState.prodProduct, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_PROD_PRODUCT_SUCCESS:
            return action.prodProduct;
        default:
            return state;
    }
}
export const csrReducer = (state = initialState.csr, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_CSR_SUCCESS:
            // return action.csr;
            return Object.assign({}, state, {
                csrTile: action.csrTile,
                csrChart: action.csrChart
            })
        default:
            return state;
    }
}

export const bdwReducer = (state = initialState.bdw, action) => {
    switch (action.type) {
        case types.FETCH_BDW_SUCCESS:
            return action.bdw;
        default:
            return state;
    }
}

export const asiReducer = (state = initialState.asi, action) => {
    switch (action.type) {
        case types.FETCH_ASI_SUCCESS:
            return action.asi;
        default:
            return state;
    }
}

module.exports = {
    madReducer,
    asiReducer,
    bdwReducer,
    prodPayReducer,
    prodProductReducer,
    channelReducer,
    productReducer,
    demographicsReducer,
    dsaReducer,
    csrReducer,
};