import React from 'react';

import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider, DropdownButton, MenuItem, Button
} from '@sketchpixy/rubix';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as dataActions from '../actions/dataActions';
import * as execDashActions from '../actions/execDashActions';
import * as subDashActions from '../actions/subDashActions';

@connect((state) => state)
export default class ApplicationSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfoFlag: false,
      apiKey: '',
      pri_keys: [],
      pri_values: {},
      pk: '',
      pk_selected: false,
      sec_keys: [],
      sk: '',
      sk_selected: false,
      third_keys: [],
      ck: '',
      ck_selected: false,
      initial_data: {},
      pri_title: '',
      sec_title: '',
      third_title: '',
    };
  }

  handleChange = (e) => {
    this._nav.search(e.target.value);
  }

  componentDidMount() {

    let apiKey = '';
    apiKey = localStorage.getItem('apiKey');
    const { dispatch } = this.props;
    dispatch(dataActions.fetchFilterContentData(apiKey));
    dispatch(dataActions.fetchDefaultKeys(apiKey));
    //Exec Dashboard 
    dispatch(execDashActions.fetchMadData(apiKey));
    dispatch(execDashActions.fetchCsrData(apiKey));
    dispatch(execDashActions.fetchBdwData(apiKey));
    dispatch(execDashActions.fetchAsiData(apiKey));
    dispatch(execDashActions.fetchProdProductData(apiKey));
    dispatch(execDashActions.fetchDemographicsData(apiKey));
    dispatch(execDashActions.fetchProductData(apiKey));
    dispatch(execDashActions.fetchProdPayData(apiKey));
    dispatch(execDashActions.fetchDsaData(apiKey));
    dispatch(execDashActions.fetchChannelData(apiKey));
    ////////////Product App
    dispatch(subDashActions.fetchProdPayData(apiKey));
    dispatch(subDashActions.fetchProdPayRecommenderData(apiKey));
    dispatch(subDashActions.fetchProdProductData(apiKey));
    dispatch(subDashActions.fetchProdProductRecommenderData(apiKey));
    ////Promotion App
    dispatch(subDashActions.fetchProductData(apiKey));
    dispatch(subDashActions.fetchProductRecommenderData(apiKey));
    dispatch(subDashActions.fetchDsaData(apiKey));
    dispatch(subDashActions.fetchDsaRecommenderData(apiKey));
    //Campaigns App
    dispatch(subDashActions.fetchChannelData(apiKey));
    dispatch(subDashActions.fetchChannelRecommenderData(apiKey));
    // Data Browser
    dispatch(dataActions.fetchDefaultBrowserData(apiKey));

    this.setState({ apiKey: apiKey })
  }
  componentWillReceiveProps(nextProps) {

    const { dispatch } = this.props;
    let temp_allKeys = {};
    // let temp_selectedKeys = {};
    let adminLoginData = '';
    let loginData = '';

    adminLoginData = nextProps.adminLogin;
    if (adminLoginData) {
      this.setState({
        loginInfoFlag: true
      })
    } else {
      this.setState({
        loginInfoFlag: false
      })
    }

    temp_allKeys = nextProps.allKeys;
    this.setState({
      pri_keys: Object.keys(temp_allKeys),
      initial_data: temp_allKeys
    })

  }
  handleClick(keyVal, keyKind) {

    let initial_data = this.state.initial_data;
    let sec_keys = [];
    let pri_values = {};
    let third_keys = [];
    let pk = '';
    let sk = '';
    let ck = '';
    const { dispatch } = this.props;
    if (keyKind == 'primary') {
      pri_values = initial_data[keyVal];
      sec_keys = Object.keys(pri_values);
      this.setState({
        pk_selected: true,
        pk: keyVal,
        pri_values: pri_values,
        sec_keys: sec_keys
      })
      // dispatch(dataActions.fetchSelectedKeysData(this.state.apiKey, keyVal, 'united_states', 'purchase_log_csv'));
    }
    if (this.state.pk_selected && keyKind == 'second') {
      third_keys = this.state.pri_values[keyVal];
      this.setState({
        sk: keyVal,
        sk_selected: true,
        third_keys: third_keys
      });
      // dispatch(dataActions.fetchSelectedKeysData(this.state.apiKey, this.state.pk, keyVal, 'purchase_log_csv'));
    }
    if (this.state.pk_selected && this.state.sk_selected && keyKind == 'third') {
      this.setState({
        ck_selected: true,
        ck: keyVal
      })
      dispatch(dataActions.fetchSelectedKeysData(this.state.apiKey, this.state.pk, this.state.sk, keyVal));
    }

  }
  handleClearKeys = () => {

    this.setState({
      pk: '',
      sk: '',
      ck: '',
    })
    const { dispatch } = this.props;
    dispatch(dataActions.fetchSelectedKeysData(this.state.apiKey, 'country', 'united_states', 'purchase_log_csv'));
  }
  render() {
    let _this = this;

    if (this.state.pk == '') {
      this.state.pri_title = 'Data Scope';
    } else {
      this.state.pri_title = this.state.pk;
    }

    if (this.state.sk == '') {
      this.state.sec_title = 'Scope Type';
    } else {
      this.state.sec_title = this.state.sk;
    }

    if (this.state.ck == '') {
      this.state.third_title = 'Scope Context';
    } else {
      this.state.third_title = this.state.ck;
    }

    return (

      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FormControl type='text' placeholder='Search...' onChange={this.handleChange} className='sidebar-search' style={{ border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white' }} />
              <div className='sidebar-nav-container'>
                <SidebarNav style={{ marginBottom: 0 }} ref={(c) => this._nav = c}>

                  { /** Pages Section */}
                  <div className='sidebar-header'>PAGES</div>

                  <SidebarNavItem glyph='icon-fontello-gauge' name='Executive Dashboard' href="/ltr/executivedashboard" />
                  <SidebarNavItem glyph='icon-ikons-chart' name='Campaigns App' href="/ltr/sub_campaigns" />
                  <SidebarNavItem glyph='icon-ikons-chart-1-4' name='Promotion App' href="/ltr/sub_promotion" />
                  <SidebarNavItem glyph='icon-fontello-chart-bar' name='Product App' href="/ltr/sub_product" />
                  <SidebarDivider />

                  { /** Components Section */}
                  <div className='sidebar-header'>Filters</div>

                  <Col xs={12}>
                    <DropdownButton bsStyle='darkgreen45' title={this.state.pri_title} id='primary_dropdown'>
                      {this.state.pri_keys.map(function (keyVal, i) {
                        return (<MenuItem key={i} eventKey={i} onSelect={() => _this.handleClick(keyVal, 'primary')}>{keyVal}</MenuItem>);
                      })}
                    </DropdownButton>
                  </Col>

                  <Col xs={12}>
                    <DropdownButton bsStyle='darkgreen45' title={this.state.sec_title} id='secondary_dropdown'>
                      {this.state.sec_keys.map(function (keyVal, i) {
                        return (<MenuItem key={i} eventKey={i} onSelect={() => _this.handleClick(keyVal, 'second')}>{keyVal}</MenuItem>);
                      })}
                    </DropdownButton>
                  </Col>
                  <Col xs={12}>
                    <DropdownButton bsStyle='darkgreen45' title={this.state.third_title} id='teritary_dropdown'>
                      {this.state.third_keys.map(function (keyVal, i) {
                        return (<MenuItem key={i} eventKey={i} onSelect={() => _this.handleClick(keyVal, 'third')}>{keyVal}</MenuItem>);
                      })}
                    </DropdownButton>
                  </Col>

                  <Col xs={12}>
                    <Button style={{ marginBottom: 5 }} bsStyle='danger' onClick={this.handleClearKeys}>Clear Selections</Button>
                  </Col>
                  <SidebarDivider />

                  { /** Extras Section */}
                  <div className='sidebar-header'>EXTRAS</div>
                  <SidebarNavItem glyph='icon-ikons-login' name='Login' href="/ltr/login" />
                  <SidebarNavItem glyph='icon-simple-line-icons-users' name='Signup' href="/ltr/signup" />
                  <SidebarNavItem glyph='icon-fontello-contacts' name='Contact Us' href="/ltr/contact" />
                  <SidebarNavItem glyph='icon-feather-inbox' name='Load Data' href="/ltr/loaddata" />
                  <SidebarNavItem glyph='icon-fontello-mail' name='Send Email' href="/ltr/sendemail" hidden={!this.state.loginInfoFlag ? true : false} />
                  <SidebarNavItem glyph='icon-outlined-profile' name='Profile' href="/ltr/profile" />
                  <SidebarNavItem glyph='icon-mfizz-database' name='Data Browser' href="/ltr/databrowser" />
                </SidebarNav>
                <br />
                <br />
                <br />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
