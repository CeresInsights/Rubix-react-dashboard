import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStores';
import initialState from './reducers/initialState';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
import Header from './common/header';
import Footer from './common/footer';

/* Pages */

import Homepage from './components/Homepage';

import ExecutiveDashboard from './components/ExecutiveDashboard/index';

import Contact from './components/Contact';
import SendEmail from './components/SendEmail';
import Profile from './components/Profile';
import DataBrowser from './components/DataBrowser';
import Login from './components/Login';
import Signup from './components/Signup';

//Sub products dashboards
import CampaignsPromotionsAndLoyaltyDashboard from './components/CampaignsApp/index';
import ProductPromotionsByChannel from './components/PromotionApp/index';
import ProductBundle from './components/ProductApp/index';

const store = configureStore(initialState);

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
    <Route path='executivedashboard' component={ExecutiveDashboard} />
    <Route path='databrowser' component={DataBrowser} />
    <Route path='contact' component={Contact} />
    <Route path='sendemail' component={SendEmail} />
    <Route path='profile' component={Profile} />
    <Route path='sub_campaigns' component={CampaignsPromotionsAndLoyaltyDashboard} />
    <Route path='sub_promotion' component={ProductPromotionsByChannel} />
    <Route path='sub_product' component={ProductBundle} />
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
  <Route>
    <Route path='/' component={Homepage} />

     <Route path='/ltr'>
      {combinedRoutes}
    </Route>
    <Route path='/rtl'>
      {combinedRoutes}
    </Route> 
  </Route>
);
