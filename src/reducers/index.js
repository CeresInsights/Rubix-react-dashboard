import { combineReducers } from 'redux';

// import reducers related to executive dashboard
import { execSmaChannelReducer } from './execDashReducers';
import { execSmaProductReducer } from './execDashReducers';
import { dsaDataReducer } from './execDashReducers';
import { customerPayReducer } from './execDashReducers'; 
import { newCustomerReducer } from './execDashReducers';

//import reducers related to sub-dashboard
import { subSmaChannelReducer } from './subDashReducers';
import { subSmaProductReducer } from './subDashReducers';
import { subDsaReducer } from './subDashReducers';
import { subBdwReducer } from './subDashReducers';
import { subMadReducer } from './subDashReducers';
import { subAsiReducer } from './subDashReducers';

//import reducers related to extra dashboar
import { dataBrowserReducer } from './extraDashReducers';
import { KeysMetaDataReducer } from './extraDashReducers';
import { selectedKeysReducer } from './extraDashReducers';

const rootReducer = combineReducers({
  execChannel: execSmaChannelReducer,
  execProduct: execSmaProductReducer,
  dsaData: dsaDataReducer,
  customerPay: customerPayReducer,
  newCustomer: newCustomerReducer,
  subChannel: subSmaChannelReducer,
  subProduct: subSmaProductReducer,
  subDsa: subDsaReducer,
  dataBrowser: dataBrowserReducer,
  keysData: KeysMetaDataReducer,
  selectedKeys: selectedKeysReducer,
  subBdw: subBdwReducer,
  subMad: subMadReducer,
  subAsi: subAsiReducer
});
export default rootReducer;
