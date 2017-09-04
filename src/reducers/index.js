// import { combineReducers } from 'redux';

import executiveDashboardReducer from './execDashReducers';

import  subDashboardReducer from './subDashReducers';

import  authReducer from './authReducers';

import dataBrowserReducer from './dataBrowserReducers';

module.exports = {
  ...executiveDashboardReducer,
  ...subDashboardReducer,
  ...authReducer,
  ...dataBrowserReducer,
}
