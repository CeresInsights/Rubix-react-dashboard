import * as types from '../constants/actionTypes';
import Axios from 'axios';

//////Sub Dashboard Normal Apis///////////////////////////////
const apiDsa = 'https://ceres.link/api/sub_board/dsa/api_key=';
const apiChannel = 'https://ceres.link/api/sub_board/sma_channel/api_key=';
const apiProduct = 'https://ceres.link/api/sub_board/sma_product/api_key=';
const apiProdPay = 'https://ceres.link/api/sub_board/prod_pay/api_key=';
const apiProdProduct = 'https://ceres.link/api/sub_board/prod_product/api_key=';

///////Sub Dashboard Recommender Apis
const apiChannelRecommender = 'https://ceres.link/api/sub_board/smart_channel/api_key=';
const apiProductRecommender = 'https://ceres.link/api/sub_board/smart_product/api_key=';
const apiDsaRecommender = 'https://ceres.link/api/sub_board/smart_dsa/api_key=';
const apiProdPayRecommender = 'https://ceres.link/api/sub_board/smart_pay/api_key=';
const apiProdProductRecommender = 'https://ceres.link/api/sub_board/smart_prod/api_key=';

////////////////Sub Dashboard CSV Apis////////////////////////
const apiChannelCsv = 'https://ceres.link/api/sub_board/smart_channel/csv/api_key=';
const apiProductCsv = 'https://ceres.link/api/sub_board/smart_product/csv/api_key=';
const apiDsaCsv = 'https://ceres.link/api/sub_board/smart_dsa/csv/api_key=';
const apiProdPayCsv = 'https://ceres.link/api/sub_board/smart_pay/csv/api_key=';
const apiProdProductCsv = 'https://ceres.link/api/sub_board/smart_prod/csv/api_key=';

////////////////Sub Dashboard PMA Api//////////////////////////////
const apiPma = 'https://ceres.link/api/pma_request/api_key=';

//////////////////Sub Dashboard Normal Apis///////////////////////////

///////////Promotion App Apis////////////
// DSA(Digital Shopping Activity) api in Promotion App
export const fetchDsaDataSuccess = (subDsa) => {
    return {
        type: types.FETCH_SUB_DSA_SUCCESS,
        subDsa
    }
}

export const fetchDsaData = (apiKey) => {
    return (dispatch) => {
        return Axios.get(apiDsa + apiKey)
            .then(response => {
                dispatch(fetchDsaDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
//SMA channel api in Promotion App
export const fetchChannelDataSuccess = (subChannel) => {
    return {
        type: types.FETCH_SUB_CHANNAL_SUCCESS,
        subChannel
    }
}

export const fetchChannelData = (apiKey) => {
    return (dispatch) => {
        return Axios.get(apiChannel + apiKey)
            .then(response => {
                dispatch(fetchChannelDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
// SMA product api in Promotion App
export const fetchProductDataSuccess = (subProduct) => {
    return {
        type: types.FETCH_SUB_PRODUCT_SUCCESS,
        subProduct
    }
}

export const fetchProductData = (apiKey) => {
    return (dispatch) => {
        return Axios.get(apiProduct + apiKey)
            .then(response => {
                dispatch(fetchProductDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
// Prod Pay Api////////////
export const fetchProdPayDataSuccess = (subProdPay) => {
    return {
        type: types.FETCH_SUB_PROD_PAY_SUCCESS,
        subProdPay
    }
}

export const fetchProdPayData = (apiKey) => {
    return (dispatch) => {
        return Axios.get(apiProdPay + apiKey)
            .then(response => {
                dispatch(fetchProdPayDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
//Prod Product Api//////////////////
export const fetchProdProductDataSuccess = (subProdProduct) => {
    return {
        type: types.FETCH_SUB_PROD_PRODUCT_SUCCESS,
        subProdProduct
    }
}

export const fetchProdProductData = (apiKey) => {
    return (dispatch) => {
        return Axios.get(apiProdProduct + apiKey)
            .then(response => {
                dispatch(fetchProdProductDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

//////////////////Sub Dashboard CSV Apis////////////////////
////////////////////// Sma Channel Csv api////////////
export const fetchChannelCsvDataSuccess = (channelCsv) => {

    return {
        type: types.FETCH_SUB_CHANNEL_CSV_SUCCESS,
        channelCsv
    }
}

export const fetchChannelCsvData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiChannelCsv + apiKey)
            .then(response => {
                dispatch(fetchChannelCsvDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
/////////////////////// Sma Product Csv api//////////////
export const fetchProductCsvDataSuccess = (productCsv) => {

    return {
        type: types.FETCH_SUB_PRODUCT_CSV_SUCCESS,
        productCsv
    }
}

export const fetchProductCsvData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiProductCsv + apiKey)
            .then(response => {
                dispatch(fetchProductCsvDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
/////////////////// DSA CSV api///////////////////////
export const fetchDsaCsvDataSuccess = (dsaCsv) => {

    return {
        type: types.FETCH_SUB_DSA_CSV_SUCCESS,
        dsaCsv
    }
}

export const fetchDsaCsvData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiDsaCsv + apiKey)
            .then(response => {
                dispatch(fetchDsaCsvDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

/////////////////////////////Prod Pay Api////////////////////////
export const fetchProdPayCsvDataSuccess = (prodPayCsv) => {

    return {
        type: types.FETCH_SUB_PROD_PAY_CSV_SUCCESS,
        prodPayCsv
    }
}

export const fetchProdPayCsvData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiProdPayCsv + apiKey)
            .then(response => {
                dispatch(fetchProdPayCsvDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
////////////////////////Prod Product Api//////////////////////
export const fetchProdProductCsvDataSuccess = (prodProductCsv) => {

    return {
        type: types.FETCH_SUB_PROD_PRODUCT_CSV_SUCCESS,
        prodProductCsv
    }
}

export const fetchProdProductCsvData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiProdProductCsv + apiKey)
            .then(response => {
                dispatch(fetchProdProductCsvDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
////////////////////Sub Dashboard Recommender Apis////////////////
//////////////////////////////////////////////////////////////////
////////////////////// Sma Channel Recommender api////////////
export const fetchChannelRecommenderDataSuccess = (subChannelRecommender) => {

    return {
        type: types.FETCH_SUB_CHANNEL_RECOMMENDER_SUCCESS,
        subChannelRecommender
    }
}

export const fetchChannelRecommenderData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiChannelRecommender + apiKey)
            .then(response => {
                dispatch(fetchChannelRecommenderDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
/////////////////////// Sma Product Recommender api//////////////
export const fetchProductRecommenderDataSuccess = (subProductRecommender) => {

    return {
        type: types.FETCH_SUB_PRODUCT_RECOMMENDER_SUCCESS,
        subProductRecommender
    }
}

export const fetchProductRecommenderData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiProductRecommender + apiKey)
            .then(response => {
                dispatch(fetchProductRecommenderDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
/////////////////// DSA Recommender api///////////////////////
export const fetchDsaRecommenderDataSuccess = (subDsaRecommender) => {

    return {
        type: types.FETCH_SUB_DSA_RECOMMENDER_SUCCESS,
        subDsaRecommender
    }
}

export const fetchDsaRecommenderData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiDsaRecommender + apiKey)
            .then(response => {
                dispatch(fetchDsaRecommenderDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

/////////////////////////////Prod Pay Recommender Api////////////////////////
export const fetchProdPayRecommenderDataSuccess = (subProdPayRecommender) => {

    return {
        type: types.FETCH_SUB_PROD_PAY_RECOMMENDER_SUCCESS,
        subProdPayRecommender
    }
}

export const fetchProdPayRecommenderData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiProdPayRecommender + apiKey)
            .then(response => {
                dispatch(fetchProdPayRecommenderDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
////////////////////////Prod Product Recommender Api//////////////////////
export const fetchProdProductRecommenderDataSuccess = (subProdProductRecommender) => {

    return {
        type: types.FETCH_SUB_PROD_PRODUCT_RECOMMENDER_SUCCESS,
        subProdProductRecommender
    }
}

export const fetchProdProductRecommenderData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiProdProductRecommender + apiKey)
            .then(response => {
                dispatch(fetchProdProductRecommenderDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

///////////////////////////////Sub Dashboard PMA Api///////////////////
export const fetchPmaDataSuccess = (pma) => {

    return {
        type: types.FETCH_PMA_SUCCESS,
        pma
    }
}

export const fetchPmaData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiPma + apiKey)
            .then(response => {
                dispatch(fetchPmaDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}