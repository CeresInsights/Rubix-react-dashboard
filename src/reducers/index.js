
//Executive Dashboard Reducers
import { combineReducers } from 'redux';
// import executiveDashboardReducer from './execDashReducers';
import { madReducer,
asiReducer,
bdwReducer,
prodPayReducer,
prodProductReducer,
channelReducer,
productReducer,
demographicsReducer,
dsaReducer,
csrReducer } from './execDashReducers';

import  subDashboardReducer from './subDashReducers';

import  authReducer from './authReducers';

import dataBrowserReducer from './dataBrowserReducers';

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
  // ...subDashboardReducer,
  ...authReducer,
  // ...dataBrowserReducer,
}
