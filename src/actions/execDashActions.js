import * as types from '../constants/actionTypes';
import Axios from 'axios';

//Executive Dashboard Normal Apis
const apiMad = 'https://ceres.link/api/app/mad/api_key=';
const apiAsi = 'https://ceres.link/api/app/asi/api_key=';
const apiBdw = 'https://ceres.link/api/app/bdw/api_key=';
const apiCsr = 'https://ceres.link/api/app/csr/api_key=';
const apiChannel = 'https://ceres.link/api/exec_board/sma_channel/api_key=';
const apiProduct = 'https://ceres.link/api/exec_board/sma_product/api_key=';
const apiDemographics = 'https://ceres.link/api/exec_board/demographics/api_key=';
const apiProdPay = 'https://ceres.link/api/exec_board/prod_pay/api_key=';
const apiProdProduct = 'https://ceres.link/api/exec_board/prod_product/api_key=';
const apiDsa = 'https://ceres.link/api/exec_board/dsa/api_key=';

//Executive Dashboard CSV Apis
const apiMadCsv = 'https://ceres.link/api/app/mad/csv/api_key=';
const apiAsiCsv = 'https://ceres.link/api/app/asi/csv/api_key=';
const apiBdwCsv = 'https://ceres.link/api/app/bdw/csv/api_key=';
const apiChannelCsv = 'https://ceres.link/api/exec_board/sma_channel/csv/api_key=';
const apiProductCsv = 'https://ceres.link/api/exec_board/sma_product/csv/api_key=';
const apiDsaCsv = 'https://ceres.link/api/exec_board/dsa/csv/api_key=';
const apiDemographicsCsv = 'https://ceres.link/api/exec_board/demographics/csv/api_key=';
const apiProdPayCsv = 'https://ceres.link/api/exec_board/prod_pay/csv/api_key=';
const apiProdProductCsv = 'https://ceres.link/api/exec_board/prod_product/csv/api_key=';

//Executive Dashbaord PMS api
const apiPma = 'https://ceres.link/api/pma_request/api_key=';
////////////////////////////Executive Dashboard Normal Apis calls/////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////MAD api/////////////
export const fetchMadDataSuccess = (mad) => {

    return {
        type: types.FETCH_MAD_SUCCESS,
        mad
    }
}

export const fetchMadData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiMad + apiKey)
            .then(response => {
                dispatch(fetchMadDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

//////////////////////// ASI api///////////////////////////
export const fetchAsiDataSuccess = (asi) => {

    return {
        type: types.FETCH_ASI_SUCCESS,
        asi
    }
}

export const fetchAsiData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiAsi + apiKey)
            .then(response => {
                dispatch(fetchAsiDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
/////////////////////////BDW api////////////////////////
export const fetchBdwDataSuccess = (bdw) => {

    return {
        type: types.FETCH_BDW_SUCCESS,
        bdw
    }
}

export const fetchBdwData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiBdw + apiKey)
            .then(response => {
                dispatch(fetchBdwDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
/////// Customer Payment Preferences api in Product Bundles By Customer Behavior///////////////////
export const fetchProdPayDataSuccess = (prodPay) => {

    return {
        type: types.FETCH_EXEC_PROD_PAY_SUCCESS,
        prodPay
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
/////////////Prod Product Api//////////////////////////////
export const fetchProdProductDataSuccess = (prodProduct) => {

    return {
        type: types.FETCH_EXEC_PROD_PRODUCT_SUCCESS,
        prodProduct
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
// DSA Api in Product Promotion By Channel
export const fetchDsaDataSuccess = (dsa) => {

    return {
        type: types.FETCH_EXEC_DSA_SUCCESS,
        dsa
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

// SMA channel Api in Product Promotion By Channel
export const fetchChannelDataSuccess = (channel) => {

    return {
        type: types.FETCH_EXEC_CHANNEL_SUCCESS,
        channel
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

// SMA product Api in Product Promotion By Channel
export const fetchProductDataSuccess = (product) => {
    return {
        type: types.FETCH_EXEC_PRODUCT_SUCCESS,
        product
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

// New Customer Acquistion/Market Segmentation Api
export const fetchDemographicsDataSuccess = (demographics) => {
    return {
        type: types.FETCH_EXEC_DEMOGRAPHICS_SUCCESS,
        demographics
    }
}

export const fetchDemographicsData = (apiKey) => {
    return (dispatch) => {
        return Axios.get(apiDemographics + apiKey)
            .then(response => {
                dispatch(fetchDemographicsDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

// Customer Spending Limits & Ranges Api
export const fetchCsrDataSuccess = (csrTile, csrChart) => {

    return {
        type: types.FETCH_EXEC_CSR_SUCCESS,
        csrTile,
        csrChart
    }
}

export const fetchCsrData = (apiKey) => {
    return (dispatch) => {
        return Axios.get(apiCsr + apiKey)
            .then(response => {
                dispatch(fetchCsrDataSuccess(response.data["total_market_spend"], response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

///////////////////////////////// Executive Dashboard CSV Apis//////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////MAD CSV api/////////////
export const fetchMadCsvDataSuccess = (madCsv) => {

    return {
        type: types.FETCH_MAD_CSV_SUCCESS,
        madCsv
    }
}

export const fetchMadCsvData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiMadCsv + apiKey)
            .then(response => {
                dispatch(fetchMadCsvDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}

//////////////////////// ASI CSV api///////////////////////////
export const fetchAsiCsvDataSuccess = (asiCsv) => {

    return {
        type: types.FETCH_ASI_CSV_SUCCESS,
        asiCsv
    }
}

export const fetchAsiCsvData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiAsiCsv + apiKey)
            .then(response => {
                dispatch(fetchAsiCsvDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
/////////////////////////BDW CSV api////////////////////////
export const fetchBdwCsvDataSuccess = (bdwCsv) => {

    return {
        type: types.FETCH_BDW_CSV_SUCCESS,
        bdwCsv
    }
}

export const fetchBdwCsvData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiBdwCsv + apiKey)
            .then(response => {
                dispatch(fetchBdwCsvDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
////////////////////// Sma Channel Csv api////////////
export const fetchChannelCsvDataSuccess = (channelCsv) => {

    return {
        type: types.FETCH_EXEC_CHANNEL_CSV_SUCCESS,
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
        type: types.FETCH_EXEC_PRODUCT_CSV_SUCCESS,
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
        type: types.FETCH_EXEC_DSA_CSV_SUCCESS,
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
/////////////////////// Demographics Csv api///////////////
export const fetchDemographicsCsvDataSuccess = (demographicsCsv) => {

    return {
        type: types.FETCH_DEMOGRAPHICS_CSV_SUCCESS,
        demographicsCsv
    }
}

export const fetchDemographicsCsvData = (apiKey) => {

    return (dispatch) => {
        return Axios.get(apiDemographicsCsv + apiKey)
            .then(response => {
                dispatch(fetchDemographicsCsvDataSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
}
/////////////////////////////Prod Pay Api////////////////////////
export const fetchProdPayCsvDataSuccess = (prodPayCsv) => {

    return {
        type: types.FETCH_EXEC_PROD_PAY_CSV_SUCCESS,
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
        type: types.FETCH_EXEC_PROD_PRODUCT_CSV_SUCCESS,
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

////////////////////// Executive Dashboard PMA Api////////////////////
//////////////////////////////////////////////////////////////////////
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