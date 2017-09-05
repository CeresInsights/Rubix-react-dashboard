
//Executive Dashboard Reducers
import { combineReducers } from 'redux';
// import executiveDashboardReducer from './execDashReducers';
import {
  madReducer,
  asiReducer,
  bdwReducer,
  prodPayReducer,
  prodProductReducer,
  channelReducer,
  productReducer,
  demographicsReducer,
  dsaReducer,
  csrReducer
} from './execDashReducers';

import subDashboardReducer from './subDashReducers';

import authReducer from './authReducers';

import {
  allKeysReducer,
  defaultKeysReducer,
  selectedKeysReducer,
  dataLoadReducer,
  browserDataReducer
} from './dataBrowserReducers';

module.exports = {
  mad: madReducer,
  asi: asiReducer,
  bdw: bdwReducer,
  prodPay: prodPayReducer,
  prodProduct: prodProductReducer,
  channel: channelReducer,
  product: productReducer,
  demographics: demographicsReducer,
  dsa: dsaReducer,
  csr: csrReducer,
  allKeys: allKeysReducer,
  defaultKeys: defaultKeysReducer,
  selectedKeys: selectedKeysReducer,
  dataLoad: dataLoadReducer,
  browserData: browserDataReducer,
  // ...subDashboardReducer,
  ...authReducer,
  // ...dataBrowserReducer,
}
