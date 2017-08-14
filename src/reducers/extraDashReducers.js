import * as types from '../constants/actionTypes';
import initialState from './initialState';

export const dataBrowserReducer = (state = initialState.dataBrowser, action) => {
    switch (action.type) {
        case types.FETCH_DATA_BROWSER_SUCCESS:
          return action.data;
        default:
          return state;
    }
};

export const selectedKeysReducer = (state = initialState.selectedKeys, action) => {
    switch (action.type) {
        case types.FETCH_FILTER_METADATA_SUCCESS:
          return action.data;
        default:
          return state;
    }
};

export const KeysMetaDataReducer = (state = initialState.keysData, action) => {
    switch (action.type) {
        case types.FETCH_KEYS_SUCCESS:
          return action.data;
        default:
          return state;
    }
};