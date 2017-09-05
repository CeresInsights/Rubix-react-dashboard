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
    demographics:{}
}

export const madReducer = (state = initialState.mad, action) => {
    switch (action.type) {
        case types.FETCH_MAD_SUCCESS:
            return action.mad;
            // return [
            //     ...state, Object.assign({}, action.mad)
            // ]
        default:
            return state;
    }
}

export const demographicsReducer = (state = initialState.demographics, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_DEMOGRAPHICS_SUCCESS:
            return action.demographics;
            // // console.log("demographics", demographics)
            // return [
            //     ...state, Object.assign({}, action.demographics)
            // ]
        default:
            return state;
    }
}
export const channelReducer = (state = initialState.channel, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_CHANNEL_SUCCESS:
            // console.log("channel", action.channel)
            // return [
            //     ...state, Object.assign({}, action.channel)
            // ]
        return action.channel;
        default:
            return state;
    }
}
export const productReducer = (state = initialState.product, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_PRODUCT_SUCCESS:
        // console.log("product", product)
            // return [
            //     ...state, Object.assign({}, action.product)
            // ]
            return action.product;
        default:
            return state;
    }
}
export const dsaReducer = (state = initialState.dsa, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_DSA_SUCCESS:
        // // console.log("dsa", dsa)
        //     return [
        //         ...state, Object.assign({}, action.dsa)
        //     ]
            return action.dsa;
        default:
            return state;
    }
}
export const prodPayReducer = (state = initialState.prodPay, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_PROD_PAY_SUCCESS:
        // console.log("prodPay", prodPay);
            return action.prodPay;
            // return [
            //     ...state, Object.assign({}, action.prodPay)
            // ]
        default:
            return state;
    }
}
export const prodProductReducer = (state = initialState.prodProduct, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_PROD_PRODUCT_SUCCESS:
        // console.log("prodProduct", prodProduct)
            return action.prodProduct;
            // return [
            //     ...state, Object.assign({}, action.prodProduct)
            // ]
        default:
            return state;
    }
}
export const csrReducer = (state = initialState.csr, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_CSR_SUCCESS:
            // console.log("csr", action.csr)
            return action.csr;
            // return [
            //     ...state, Object.assign({}, action.csr)
            // ]
        default:
            return state;
    }
}
export const bdwReducer = (state = initialState.bdw, action) => {
    switch (action.type) {
        case types.FETCH_BDW_SUCCESS:
            // console.log("bdw", action.bdw)
            return action.bdw;
            // return [
            //     ...state, Object.assign({}, action.bdw)
            // ]
        default:
            return state;
    }
}

export const asiReducer = (state = initialState.asi, action) => {
    switch (action.type) {
        case types.FETCH_ASI_SUCCESS:
            // console.log("asi", action.asi)

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
    csrReducer
};