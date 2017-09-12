import * as types from '../constants/actionTypes';

const initialState = {
  allKeys: {},
  defaultKeys: {},
  // selectedKeys: {},
  loadData: '',
  defaultBrowserData: {},
  selectedBrowserData: {}
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
export const dataLoadReducer = (state = initialState.loadData, action) => {
  switch (action.type) {
    case types.FETCH_DATA_LOADER_SUCCESS:
      return action.loadData;
    default:
      return state;
  }
}
export const defaultBrowserDataReducer = (state = initialState.defaultBrowserData, action) => {
  switch (action.type) {
    case types.FETCH_DEFAULT_DATA_BROWSER_SUCCESS:
      return action.defaultBrowserData;
    default:
      return state;
  }
}
export const selectedBrowserDataReducer = (state = initialState.selectedBrowserData, action) => {
  switch (action.type) {
    case types.FETCH_SELECTED_DATA_BROWSER_SUCCESS:
      return action.selectedBrowserData;
    default:
      return state;
  }
}

module.exports = {
  allKeysReducer,
  defaultKeysReducer,
  dataLoadReducer,
  defaultBrowserDataReducer,
  selectedBrowserDataReducer
};