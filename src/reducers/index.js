import { combineReducers } from 'redux';

// import reducers related to executive dashboard
import { execSmaChannelReducer } from './executive/execSmaChannelReducer';
import { execSmaProductReducer } from './executive/execSmaProductReducer';
import { dsaDataReducer } from './executive/dsaDataReducer';
import { customerPayReducer } from './executive/customerPayReducer'; 
import { newCustomerReducer } from './executive/newCustomerReducer';

//import reducers related to sub-dashboard
import { subSmaChannelReducer } from './sub-dashboard/subSmaChannelReducer';
import { subSmaProductReducer } from './sub-dashboard/subSmaProductReducer';
import { subDsaReducer } from './sub-dashboard/subDsaReducer';

const rootReducer = combineReducers({
  execChannel: execSmaChannelReducer,
  execProduct: execSmaProductReducer,
  dsaData: dsaDataReducer,
  customerPay: customerPayReducer,
  newCustomer: newCustomerReducer,
  subChannel: subSmaChannelReducer,
  subProduct: subSmaProductReducer,
  subDsa: subDsaReducer
});
export default rootReducer;
