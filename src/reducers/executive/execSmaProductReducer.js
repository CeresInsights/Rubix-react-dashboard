import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export const execSmaProductReducer = (state = initialState.execProduct, action) => {
    switch (action.type) {
        case types.FETCH_EXEC_PRODUCT_SUCCESS:
            return [
                ...state, Object.assign({}, action.data)
            ]
        //   return action.data;
        default:
          return state;
    }
}