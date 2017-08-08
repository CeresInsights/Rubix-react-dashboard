import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export const execSmaProductReducer = (state = initialState.execProduct, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_PRODUCT_SUCCESS:
          return action.execProduct;
        default:
          return state;
    }
}