import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';
/* Common Components */
import Sidebar from './common/sidebar';
import Header from './common/header';
import Footer from './common/footer';

import Homepage from './components/Homepage';
//Executive Dashboard
import ExecutiveDashboard from './components/ExecutiveDashboard/index';

import Contact from './components/Contact';
import LoadData from './components/LoadData';
import SendEmail from './components/SendEmail';
import Profile from './components/Profile';
import DataBrowser from './components/DataBrowser';
//Auth Components
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
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

class Auth extends React.Component {
  render() {
    return (
      this.props.children
    )
  }
}

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      <Route path="/ltr" component={Auth}>
        <Route path='login' component={Login} />
        <Route path='adminlogin' component={AdminLogin} />
        <Route path='signup' component={Signup} />
        <Route path='queueemail' component={QueueEmail} />
      </Route>
      <Route path="/ltr" component={Main}>
        <Route path='executivedashboard' component={ExecutiveDashboard} />
        <Route path='databrowser' component={DataBrowser} />
        <Route path='contact' component={Contact} />
        <Route path='loaddata' component={LoadData} />
        <Route path='sendemail' component={SendEmail} />
        <Route path='profile' component={Profile} />
        <Route path='sub_campaigns' component={CampaignsPromotionsAndLoyaltyDashboard} />
        <Route path='sub_promotion' component={ProductPromotionsByChannel} />
        <Route path='sub_product' component={ProductBundle} />
      </Route>
    </Route>
  </Router>
);

// const routes = (
//   <Route component={Main}>
//     <Route path='executivedashboard' component={ExecutiveDashboard} />
//     <Route path='databrowser' component={DataBrowser} />
//     <Route path='contact' component={Contact} />
//     <Route path='loaddata' component={LoadData} />
//     <Route path='sendemail' component={SendEmail} />
//     <Route path='profile' component={Profile} />
//     <Route path='sub_campaigns' component={CampaignsPromotionsAndLoyaltyDashboard} />
//     <Route path='sub_promotion' component={ProductPromotionsByChannel} />
//     <Route path='sub_product' component={ProductBundle} />
//   </Route>
// );

// /**
//  * No Sidebar, Header or Footer. Only the Body is rendered.
//  */
// const basicRoutes = (
//   <Route>
//     <Route path='login' component={Login} />
//     <Route path='adminlogin' component={AdminLogin} />
//     <Route path='signup' component={Signup} />
//     <Route path='queueemail' component={QueueEmail} />
//   </Route>
// );

// const combinedRoutes = (
//   <Route>
//     <Route>
//       {routes}
//     </Route>
//     <Route>
//       {basicRoutes}
//     </Route>
//   </Route>
// );

// export default (
//   <Route>
//     <Route path='/' component={Homepage} />

//     <Route path='/ltr'>
//       {combinedRoutes}
//     </Route>
//     <Route path='/rtl'>
//       {combinedRoutes}
//     </Route>
//   </Route>
// );