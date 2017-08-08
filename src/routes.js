import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Router, browserHistory, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
import Header from './common/header';
import Footer from './common/footer';

/* Pages */

import Homepage from './routes/Homepage';

import execDashboard from './routes/execDashboard';
import Contact from './routes/Contact';
import SendEmail from './routes/SendEmail';
import Profile from './routes/Profile';
import DataBrowser from './routes/DataBrowser';
import Login from './routes/Login';
import Signup from './routes/Signup';

//Sub products dashboards
import CampaignsPromotionsAndLoyaltyDashboard from './routes/CampaignsPromotionsAndLoyaltyDashboard';
import ProductPromotionsByChannel from './routes/ProductPromotionsByChannel';
import ProductBundle from './routes/ProductBundle';

import { Provider } from 'react-redux';
import configureStore from './stores/configureStores';

//Import executive actions
import * as customerPay from './actions/executive/customerPayActions';
import * as dsaData from './actions/executive/dsaDataActions';
import * as execSmaChannel from './actions/executive/execSmaChannelActions';
import * as execSmaProduct from './actions/executive/execSmaProductActions';
import * as newCustomer from './actions/executive/newCustomerActions';

//Import sub-dashboard actions
import * as subSmaChannel from './actions/sub-dashboard/subSmaChannelActions';
import * as subSmaProduct from './actions/sub-dashboard/subSmaProductActions';

const store = configureStore();
//Dispatch of executive actions
store.dispatch(customerPay.fetchCustomerPayData());
store.dispatch(dsaData.fetchDsaData());
store.dispatch(execSmaChannel.fetchChannelData());
store.dispatch(execSmaProduct.fetchProductData());
store.dispatch(newCustomer.fetchNewCustomerData());

//Disaptch of sub-dashboard actions
store.dispatch(subSmaChannel.fetchChannelData());
store.dispatch(subSmaProduct.fetchProductData());

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tbl_ready: '',
      pk: '',
      sk: '',
      ck: '',
    };
  }

  handleLanguage(langValue, pk, sk, ck) {
    this.setState({ tbl_ready: langValue, pk: pk, ck: ck, sk: sk });
  }
  render() {
    var childrenWithMoreProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        third_changed: this.state.tbl_ready,
        pk: this.state.pk,
        sk: this.state.sk,
        ck: this.state.ck
      });
    });
    return (
      <MainContainer {...this.props}>
        <Sidebar onSelectLanguage={this.handleLanguage.bind(this)} />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {childrenWithMoreProps}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

/**
 * Includes Sidebar, Header and Footer.
 */
const routes = (
  <Route component={App}>
    <Route path='execdashboard' component={execDashboard} />
    <Route path='databrowser' component={DataBrowser} />
    <Route path='contact' component={Contact} />
    <Route path='sendemail' component={SendEmail} />
    <Route path='profile' component={Profile} />
    <Route path='sub_campaigns' component={CampaignsPromotionsAndLoyaltyDashboard} />
    <Route path='sub_ppbc' component={ProductPromotionsByChannel} />
    <Route path='sub_pbbcb' component={ProductBundle} />
  </Route>
);

/**
 * No Sidebar, Header or Footer. Only the Body is rendered.
 */
const basicRoutes = (
  <Route>
    <Route path='login' component={Login} />
    <Route path='signup' component={Signup} />
  </Route>
);

const combinedRoutes = (
  <Route>
    <Route>
      {routes}
    </Route>
    <Route>
      {basicRoutes}
    </Route>
  </Route>
);

export default (
  <Provider store = {store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Homepage} />
        <Route path='/ltr'>
          {combinedRoutes}
        </Route>
      </Route>
    </Router>
  </Provider>
);
