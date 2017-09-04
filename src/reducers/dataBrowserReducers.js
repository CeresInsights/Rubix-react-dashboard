import * as types from '../constants/actionTypes';

const initialState = {
  selectedKeys: [],
  keysData: [],
  dataBrowser: [],
}

export const dataBrowserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_BROWSER_SUCCESS:
      return action.dataBrowser;
    case types.FETCH_FILTER_METADATA_SUCCESS:
      return action.selectedKeys;
    case types.FETCH_KEYS_SUCCESS:
      return action.keysData;
    default:
      return state;
  }
};

module.exports = {
  dataBrowserReducer,
};