import * as types from '../constants/actionTypes';

const initialState = {
    subDsa: {},
    subChannel: {},
    subProduct: {},
    subProdPay: {},
    subProdProduct: {},
    subChannelRecommender: {},
    subProductRecommender: {},
    subDsaRecommender: {},
    subProdPayRecommender: {},
    subProdProductRecommender: {}
}

const subDsaReducer = (state = initialState.subDsa, action) => {
    switch (action.type) {
        case types.FETCH_SUB_DSA_SUCCESS:
            return action.subDsa;
        default:
            return state;
    }
}
const subChannelReducer = (state = initialState.subChannel, action) => {
    switch (action.type) {
        case types.FETCH_SUB_CHANNAL_SUCCESS:
            return action.subChannel;
        default:
            return state;
    }
}
const subProductReducer = (state = initialState.subProduct, action) => {
    switch (action.type) {
        case types.FETCH_SUB_PRODUCT_SUCCESS:
            return action.subProduct;
        default:
            return state;
    }
}
const subProdPayReducer = (state = initialState.subProdPay, action) => {
    switch (action.type) {
        case types.FETCH_SUB_PROD_PAY_SUCCESS:
            return action.subProdPay;
        default:
            return state;
    }
}
const subProdProductReducer = (state = initialState.subProdProduct, action) => {
    switch (action.type) {
        case types.FETCH_SUB_PROD_PRODUCT_SUCCESS:
            return action.subProdProduct;
        default:
            return state;
    }
}

const subChannelRecommenderReducer = (state = initialState.subChannelRecommender, action) => {
    switch (action.type) {
        case types.FETCH_SUB_CHANNEL_RECOMMENDER_SUCCESS:
            return action.subChannelRecommender;
        default:
            return state;
    }
}
const subProductRecommenderReducer = (state = initialState.subProductRecommender, action) => {
    switch (action.type) {
        case types.FETCH_SUB_PRODUCT_RECOMMENDER_SUCCESS:
            return action.subProductRecommender;
        default:
            return state;
    }
}
const subDsaRecommenderReducer = (state = initialState.subDsaRecommender, action) => {
    switch (action.type) {
        case types.FETCH_SUB_DSA_RECOMMENDER_SUCCESS:
            return action.subDsaRecommender;
        default:
            return state;
    }
}
const subProdPayRecommenderReducer = (state = initialState.subProdPayRecommender, action) => {
    switch (action.type) {
        case types.FETCH_SUB_PROD_PAY_RECOMMENDER_SUCCESS:
            return action.subProdPayRecommender;
        default:
            return state;
    }
}
const subProdProductRecommenderReducer = (state = initialState.subProdProductRecommender, action) => {
    switch (action.type) {
        case types.FETCH_SUB_PROD_PRODUCT_RECOMMENDER_SUCCESS:
            return action.subProdProductRecommender;
        default:
            return state;
    }
}

module.exports = {
    subProdPayReducer,
    subProdProductReducer,
    subChannelReducer,
    subProductReducer,
    subDsaReducer,
    subChannelRecommenderReducer,
    subProductRecommenderReducer,
    subDsaRecommenderReducer,
    subProdPayRecommenderReducer,
    subProdProductRecommenderReducer
};