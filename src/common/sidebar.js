import React from 'react';

import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider, DropdownButton, MenuItem, Button
} from '@sketchpixy/rubix';

import { Link, withRouter } from 'react-router';

import ChatComponent from './chat';
import StatisticsComponent from './statistics';
import TimelineComponent from './timeline';
import NotificationsComponent from './notifications';

@withRouter
class ApplicationSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api_key: '',
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
      // table_data: {},
      // table_data_ready: false,
      // table_data_header: [],
      // table_data_content: [],
      // key_change: false
    };
    this.pri_title = '';
    this.sec_title = '';
    this.third_title = '';
  }

  handleChange(e) {
    this._nav.search(e.target.value);
  }

  // getPath(path) {
  //   var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
  //   path = `/${dir}/${path}`;
  //   return path;
  // }

  componentDidMount() {
    console.log("pk", localStorage.getItem('pk'))
    console.log("sk", localStorage.getItem('sk'))
    console.log("ck", localStorage.getItem('ck'))
    this.UserList();
  }

  UserList() {
    let api_key = localStorage.getItem('api_key');
    this.setState({
      api_key:  api_key
    })
    $.ajax({
      url: 'https://ceres.link/api/graphmeta/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        this.setState({
          pri_keys: Object.keys(data),
          initial_data: data
        })
      }.bind(this),
      error: function (error) {
        console.log(error);
      }
    })

    let pk = 'country';
    let sk = 'united_states';
    let ck = 'purchase_log_csv';

    // let pk = 'country';
    // let sk = 'united_states';
    // let ck = 'customer_profile_csv';
    $.ajax({
      url: 'https://ceres.link/api/override_keys/api_key=' + api_key + ';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("Default Successful Key Get Message", data)
      }.bind(this),
      error: function (error) {
        console.log("Default Failure Key Get Msg", error);
      }
    });
  }

  handleClick(keyVal, keyKind) {

    let initial_data = this.state.initial_data;
    let sec_keys = [];
    let pri_values = {};
    let third_keys = [];
    let pk = '';
    let sk = '';
    let ck = '';

    if (keyKind == 'primary') {

      localStorage.setItem('pk', keyVal);
      pri_values = initial_data[keyVal];
      sec_keys = Object.keys(pri_values);
      this.setState({
        pk_selected: true,
        pk: keyVal,
        pri_values: pri_values,
        sec_keys: sec_keys
      })

      $.ajax({
        url: 'https://ceres.link/api/override_keys/api_key=' + this.state.api_key + ';data:pk=' + keyVal + ',sk=united_states,ck=purchase_log_csv',
        dataType: 'json',
        type: 'GET',
        success: function (data) {

          console.log("Successful Key Get Message", data)
        }.bind(this),
        error: function (error) {
          console.log("Failure Key Get Msg", error);
        }
      });

    }
    if (this.state.pk_selected && keyKind == 'second') {
      localStorage.setItem('sk', keyVal);
      third_keys = this.state.pri_values[keyVal];
      this.setState({
        sk: keyVal,
        sk_selected: true,
        third_keys: third_keys
      });
      $.ajax({
        url: 'https://ceres.link/api/override_keys/api_key=' + this.state.api_key + ';data:pk=' + this.state.pk + ',sk=' + keyVal + ',ck=purchase_log_csv',
        dataType: 'json',
        type: 'GET',
        success: function (data) {

          console.log("Successful Key Get Message", data)
        }.bind(this),
        error: function (error) {
          console.log("Failure Key Get Msg", error);
        }
      });
    }
    if (this.state.pk_selected && this.state.sk_selected && keyKind == 'third') {
      localStorage.setItem('ck', keyVal);
      this.setState({
        ck_selected: true,
        ck: keyVal
      })
      $.ajax({
        url: 'https://ceres.link/api/override_keys/api_key=' + this.state.api_key + ';data:pk=' + this.state.pk + ',sk=' + this.state.sk + ',ck=' + keyVal,
        dataType: 'json',
        type: 'GET',
        success: function (data) {

          console.log("Successful Key Get Message", data)
        }.bind(this),
        error: function (error) {
          console.log("Failure Key Get Msg", error);
        }
      });
    }

  }
  handleClearKeys = () => {
    this.pri_title = 'Data Scope';
    this.sec_title = 'Scope Type';
    this.third_title = 'Scope Context';

    let pk = 'country';
    let sk = 'united_states';
    let ck = 'purchase_log_csv';

    $.ajax({
      url: 'https://ceres.link/api/override_keys/api_key=' + this.state.api_key + ';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("Default Successful Key Get Message", data)
      }.bind(this),
      error: function (error) {
        console.log("Default Failure Key Get Msg", error);
      }
    });
  }
  render() {
    let _this = this;

    if (this.state.pk == '') {
      this.pri_title = 'Data Scope';
    } else {
      this.pri_title = this.state.pk;
    }

    if (this.state.sk == '') {
      this.sec_title = 'Scope Type';
    } else {
      this.sec_title = this.state.sk;
    }

    if (this.state.ck == '') {
      this.third_title = 'Scope Context';
    } else {
      this.third_title = this.state.ck;
    }

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FormControl type='text' placeholder='Search...' onChange={::this.handleChange} className='sidebar-search' style={{ border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white' }} />
              <div className='sidebar-nav-container'>
                <SidebarNav style={{ marginBottom: 0 }} ref={(c) => this._nav = c}>

                  { /** Pages Section */}
                  <div className='sidebar-header'>PAGES</div>

                  <SidebarNavItem glyph='icon-fontello-gauge' name='Executive Dashboard' href="/executivedashboard" />
                  <SidebarNavItem glyph='icon-ikons-chart' name='Campaigns App' href="/sub_campaigns" />
                  <SidebarNavItem glyph='icon-ikons-chart-1-4' name='Promotion App' href="/sub_promotion" />
                  <SidebarNavItem glyph='icon-fontello-chart-bar' name='Product App' href="/sub_product" />
                  <SidebarDivider />

                  { /** Components Section */}
                  <div className='sidebar-header'>Filters</div>

                  <Col xs={12}>
                    <DropdownButton bsStyle='darkgreen45' title={this.pri_title} id='primary_dropdown'>
                      {this.state.pri_keys.map(function (keyVal, i) {
                        return (<MenuItem key={i} eventKey={i} onSelect={() => _this.handleClick(keyVal, 'primary')}>{keyVal}</MenuItem>);
                      })}
                    </DropdownButton>
                  </Col>

                  <Col xs={12}>
                    <DropdownButton bsStyle='darkgreen45' title={this.sec_title} id='secondary_dropdown'>
                      {this.state.sec_keys.map(function (keyVal, i) {
                        return (<MenuItem key={i} eventKey={i} onSelect={() => _this.handleClick(keyVal, 'second')}>{keyVal}</MenuItem>);
                      })}
                    </DropdownButton>
                  </Col>
                  <Col xs={12}>
                    <DropdownButton bsStyle='darkgreen45' title={this.third_title} id='teritary_dropdown'>
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
                  <SidebarNavItem glyph='icon-ikons-login' name='Login' href="/login"  />
                  <SidebarNavItem glyph='icon-simple-line-icons-users' name='Signup' href="/signup"  />
                  <SidebarNavItem glyph='icon-fontello-contacts' name='Contact Us' href="/contact"  />
                  <SidebarNavItem glyph='icon-feather-inbox' name='Load Data' href="/loaddata"  />
                  <SidebarNavItem glyph='icon-fontello-mail' name='Send Email' href="/sendemail"  />
                  <SidebarNavItem glyph='icon-outlined-profile' name='Profile' href="/profile"  />
                  <SidebarNavItem glyph='icon-mfizz-database' name='Data Browser' href="/databrowser"  />
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

class DummySidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

@withRouter
export default class SidebarContainer extends React.Component {
  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  handleLangChange(tbl_ready, pk, sk, ck) {
    this.props.onSelectLanguage(tbl_ready, pk, sk, ck);
  }
  render() {
    return (
      <div id='sidebar'>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/app/avatars/avatar0.png' width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{ top: 23, fontSize: 16, lineHeight: 1, position: 'relative' }}>Anna Sanchez</div>
                <div>
                  <Progress id='demo-progress' value={30} color='#ffffff' />
                  <Link to={::this.getPath('lock')}>
                    <Icon id='demo-icon' bundle='fontello' glyph='lock-5' />
                  </Link>
                </div>
              </Col>
            </Row>
          </Grid>
      </div>
      <SidebarControls>
        <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />
        <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1} />
        <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2} />
        <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3} />
        <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4} />
      </SidebarControls>
      <div id='sidebar-container'>
        <Sidebar sidebar={0}>
          <ApplicationSidebar dataBrowserClickced={this.handleLangChange.bind(this)} />
        </Sidebar>
        <Sidebar sidebar={1}>
          <ChatComponent />
        </Sidebar>
        <Sidebar sidebar={2}>
          <StatisticsComponent />
        </Sidebar>
        <Sidebar sidebar={3}>
          <TimelineComponent />
        </Sidebar>
        <Sidebar sidebar={4}>
          <NotificationsComponent />
        </Sidebar>
      </div>
      </div >
    );
  }
}
