import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route, Router } from 'react-router';
import { Provider } from 'react-redux';
// import configureStore from './stores/configureStores';
// import initialState from './reducers/initialState';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
import Header from './common/header';
import Footer from './common/footer';

/* Pages */

import Homepage from './components/Homepage';

import ExecutiveDashboard from './components/ExecutiveDashboard/index';

import Contact from './components/Contact';
import LoadData from './components/LoadData';
import SendEmail from './components/SendEmail';
import Profile from './components/Profile';
import DataBrowser from './components/DataBrowser';
import Login from './components/authComponents/Login';
import AdminLogin from './components/authComponents/AdminLogin';
import Signup from './components/authComponents/Signup';
import QueueEmail from './components/authComponents/QueueEmail';

//Sub products dashboards
import CampaignsPromotionsAndLoyaltyDashboard from './components/CampaignsApp/index';
import ProductPromotionsByChannel from './components/PromotionApp/index';
import ProductBundle from './components/ProductApp/index';

class App extends React.Component {
  render() {
    return (
      this.props.children
    );
  }
}

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tbl_ready: '',
  //     pk: '',
  //     sk: '',
  //     ck: '',
  //   };

  // handleLanguage(langValue, pk, sk, ck) {
  //   this.setState({ tbl_ready: langValue, pk: pk, ck: ck, sk: sk });
  // }
  render() {
    // var childrenWithMoreProps = React.Children.map(this.props.children, (child) => {
    //   return React.cloneElement(child, {
    //     third_changed: this.state.tbl_ready,
    //     pk: this.state.pk,
    //     sk: this.state.sk,
    //     ck: this.state.ck
    //   });
    // });
    return (
      <MainContainer {...this.props}>
        <Header />
        <Sidebar open="true"/>
        {this.props.children}
        {/* <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {childrenWithMoreProps}
              </Col>
            </Row>
          </Grid>
        </div> */}
        <Footer />
      </MainContainer>
    );
  }
}
class Auth extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        {this.props.children}
      </MainContainer>
    )
  }
}
/**
 * Includes Sidebar, Header and Footer.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route component={Auth}>
      <Route path='/login' component={Login} />
      <Route path='/adminlogin' component={AdminLogin} />
      <Route path='/signup' component={Signup} />
      <Route path='/queueemail' component={QueueEmail} />
    </Route>
    <Route component={Main}>
      <Route path='/executivedashboard' component={ExecutiveDashboard} />
      <Route path='/databrowser' component={DataBrowser} />
      <Route path='/contact' component={Contact} />
      <Route path='/loaddata' component={LoadData} />
      <Route path='/sendemail' component={SendEmail} />
      <Route path='/profile' component={Profile} />
      <Route path='/sub_campaigns' component={CampaignsPromotionsAndLoyaltyDashboard} />
      <Route path='/sub_promotion' component={ProductPromotionsByChannel} />
      <Route path='/sub_product' component={ProductBundle} />
    </Route>
  </Route>
);

