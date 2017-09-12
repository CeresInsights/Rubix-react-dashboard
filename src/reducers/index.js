
//Executive Dashboard Reducers
import { combineReducers } from 'redux';
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
  csrReducer,
} from './execDashReducers';

import {
  subProdPayReducer,
  subProdProductReducer,
  subChannelReducer,
  subProductReducer,
  subDsaReducer,
  subChannelRecommenderReducer,
  subProductRecommenderReducer,
  subDsaRecommenderReducer,
  subProdPayRecommenderReducer,
  subProdProductRecommenderReducer
} from './subDashReducers';

// Auth Reducers
import {
  loginReducer,
  signupReducer,
  adminLoginReducer,
  adminLogoutReducer,
  queueEmailReducer,
  pendingEmailReducer
} from './authReducers';

//Data Reducers
import {
  allKeysReducer,
  defaultKeysReducer,
  dataLoadReducer,
  defaultBrowserDataReducer,
  selectedBrowserDataReducer
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
  loadData: dataLoadReducer,
  defaultBrowserData: defaultBrowserDataReducer,
  selectedBrowserData: selectedBrowserDataReducer,
  
  subProdPay: subProdPayReducer,
  subProdProduct: subProdProductReducer,
  subChannel: subChannelReducer,
  subProduct: subProductReducer,
  subDsa: subDsaReducer,
  subChannelRecommender: subChannelRecommenderReducer,
  subProductRecommender: subProductRecommenderReducer,
  subDsaRecommender: subDsaRecommenderReducer,
  subProdPayRecommender: subProdPayRecommenderReducer,
  subProdProductRecommender: subProdProductRecommenderReducer,

  login: loginReducer,
  signup: signupReducer,
  adminLogin: adminLoginReducer,
  adminLogout: adminLogoutReducer,
  queueEmail: queueEmailReducer,
  pendingEmail: pendingEmailReducer
}
