import * as types from '../../constants/actionTypes';
import initialState from '../initialState';

export const dsaDataReducer = (state = initialState.dsaData, action) => {
    switch (action.type) {
        case types.FETCH_DSA_SUCCESS:
                    console.log("BBBBBBBBBBBBB", action.data)
          return action.data;
        default:
          return state;
    }
}