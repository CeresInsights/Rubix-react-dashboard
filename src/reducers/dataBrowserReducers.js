import * as types from '../constants/actionTypes';

const initialState = {
  allKeys: {},
  defaultKeys: {},
  selectedKeys: {},
  loadData: {},
  browserData: {},
}

export const allKeysReducer = (state = initialState.allKeys, action) => {
  switch (action.type) {
    case types.FETCH_FILTER_METADATA_SUCCESS:
      return action.allKeys;
    default:
      return state;
  }
}
export const defaultKeysReducer = (state = initialState.defaultKeys, action) => {
  switch (action.type) {
    case types.FETCH_DEFAULT_KEYS_SUCCESS:
      return action.defaultKeys;
    default:
      return state;
  }
}
export const selectedKeysReducer = (state = initialState.selectedKeys, action) => {
  switch (action.type) {
    case types.FETCH_SELECTED_KEYS_SUCCESS:
      return action.selectedKeys;
    default:
      return state;
  }
}
export const dataLoadReducer = (state = initialState.loadData, action) => {
  switch (action.type) {
    case types.FETCH_DATA_LOADER_SUCCESS:
      return action.loadData;
    default:
      return state;
  }
}
export const browserDataReducer = (state = initialState.browserData, action) => {
  switch (action.type) {
    case types.FETCH_DATA_BROWSER_SUCCESS:
      return action.browserData;
    default:
      return state;
  }
}

module.exports = {
  allKeysReducer,
  defaultKeysReducer,
  selectedKeysReducer,
  dataLoadReducer,
  browserDataReducer
};