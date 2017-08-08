import React from 'react';

import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider, DropdownButton,MenuItem,Button
} from '@sketchpixy/rubix';

import { Link, withRouter } from 'react-router';

import ChatComponent from './chat';
import StatisticsComponent from './statistics';
import TimelineComponent from './timeline';
import NotificationsComponent from './notifications';

@withRouter
class ApplicationSidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pri_key:[],
      pri_active_key:'',
      sec_key:[],
      sec_active_key:'',
      third_key:[],
      third_active_key:'',
      meta_data:{},
      table_data:{},
      table_data_ready:false,
      table_data_header:[],
      table_data_content:[],
      key_change:false
    };
  }

  handleChange(e) {
    this._nav.search(e.target.value);
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  componentDidMount() {
    this.UserList();
  }

  UserList(){
    let api_key = localStorage.getItem('api_key');
    $.ajax({
      url: 'https://ceres.link/api/graphmeta/api_key='+api_key,
      dataType: 'json',
      type: 'GET',
      success:function(data){
        this.setState({
          pri_key:Object.keys(data),
          meta_data:data
        })
      }.bind(this),
      error:function(error){
        console.log(error);
      }
    })
  }

  handleClick(element,nth){
    let api_key = localStorage.getItem('api_key');
    let meta_data = this.state.meta_data;
    if(nth=='primary'){
      var tmp_2nd = meta_data[element];
      this.setState({pri_active_key:element,sec_key:Object.keys(tmp_2nd)});            
      $.ajax({
        url: 'https://ceres.link/api/update_pk/api_key='+api_key+';data:'+element,
        dataType: 'json',
        type: 'GET',
        success:function(data){          
          this.setState({sec_active_key:'',third_active_key:'',key_change:true});
          this.props.dataBrowserClickced(true,this.state.pri_active_key,this.state.sec_active_key,this.state.third_active_key);
        }.bind(this),
        error:function(error){
          console.log(error);
        }
      })
    }else if(nth=='second'){
      this.setState({sec_active_key:element});
      let ts = this.state.pri_active_key;
      let third_array = meta_data[ts][element];
      this.setState({third_key:third_array});
      $.ajax({
        url: 'https://ceres.link/api/update_sk/api_key='+api_key+';data:'+element,
        dataType: 'json',
        type: 'GET',
        success:function(data){
          this.setState({third_active_key:''});
          this.props.dataBrowserClickced(true,this.state.pri_active_key,this.state.sec_active_key,this.state.third_active_key);          
        }.bind(this),
        error:function(error){
          console.log(error);
        }
      })
    }else if(nth=='third'){
      this.setState({third_active_key:element});
      $.ajax({
        url: 'https://ceres.link/api/update_ck/api_key='+api_key+';data:'+element,
        dataType: 'json',
        type: 'GET',
        success:function(data){
          this.props.dataBrowserClickced(true,this.state.pri_active_key,this.state.sec_active_key,this.state.third_active_key);
        }.bind(this),
        error:function(error){
          console.log(error);
        }
      })
    }
  }

  render() {
    let _this = this;
    let pri_title = '', sec_title='',third_title='';
    if(this.state.pri_active_key ==''){
      pri_title = 'Data Scope';
    }else{
      pri_title = this.state.pri_active_key;
    }

    if(this.state.sec_active_key ==''){
      sec_title = 'Scope Type';
    }else{
      sec_title = this.state.sec_active_key;
    }

    if(this.state.third_active_key ==''){
      third_title = 'Scope Context';
    }else{
      third_title = this.state.third_active_key;
    }

    const table_data_ready = this.state.table_data_ready; 

    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <FormControl type='text' placeholder='Search...' onChange={::this.handleChange} className='sidebar-search' style={{border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white'}} />
              <div className='sidebar-nav-container'>
                <SidebarNav style={{marginBottom: 0}} ref={(c) => this._nav = c}>

                  { /** Pages Section */ }
                  <div className='sidebar-header'>PAGESdgfafasdasd</div>

                  <SidebarNavItem glyph='icon-fontello-gauge' name='Executive Dashboard' href={::this.getPath('execdashboard')} />                 
                  <SidebarNavItem glyph='icon-ikons-chart' name='Campaigns App' href={::this.getPath('sub_campaigns')} />
                  <SidebarNavItem glyph='icon-ikons-chart-1-4' name='Promotion App' href={::this.getPath('sub_ppbc')} />
                  <SidebarNavItem glyph='icon-fontello-chart-bar' name='Product App' href={::this.getPath('sub_pbbcb')} />
                  <SidebarDivider />

                  { /** Components Section */ }
                  <div className='sidebar-header'>Filters</div>

                  <Col xs={12}>
                  <DropdownButton bsStyle='darkgreen45' title={pri_title} id='primary_dropdown'>
                    {this.state.pri_key.map(function(element,i){
                      return (<MenuItem key={i} eventKey={i} onSelect={()=>_this.handleClick(element,'primary')}>{element}</MenuItem>);
                    })}
                  </DropdownButton>
                  </Col>

                  <Col xs={12}>
                  <DropdownButton bsStyle='darkgreen45' title={sec_title} id='secondary_dropdown'>
                    {this.state.sec_key.map(function(element,i){
                      return (<MenuItem key={i} eventKey={i} onSelect={()=>_this.handleClick(element,'second')}>{element}</MenuItem>);
                    })}
                  </DropdownButton>
                  </Col>
                  <Col xs={12}>
                  <DropdownButton bsStyle='darkgreen45' title={third_title} id='teritary_dropdown'>
                    {this.state.third_key.map(function(element,i){
                      return (<MenuItem key={i} eventKey={i} onSelect={()=>_this.handleClick(element,'third')}>{element}</MenuItem>);
                    })}
                  </DropdownButton>
                  </Col>

                  <Col xs={12}>
                    <Button style={{marginBottom: 5}} bsStyle='danger'>Clear Selections</Button>
                  </Col>
                  <SidebarDivider />

                  { /** Extras Section */ }
                  <div className='sidebar-header'>EXTRAS</div>
                  <SidebarNavItem glyph='icon-ikons-login' name='Login' href={::this.getPath('login')} />
                  <SidebarNavItem glyph='icon-simple-line-icons-users' name='Signup' href={::this.getPath('signup')} />
                  <SidebarNavItem glyph='icon-fontello-contacts' name='Contact Us' href={::this.getPath('contact')} />
                  <SidebarNavItem glyph='icon-feather-inbox' name='Send Email' href={::this.getPath('sendemail')} />
                  <SidebarNavItem glyph='icon-outlined-profile' name='Profile' href={::this.getPath('profile')} />
                  <SidebarNavItem glyph='icon-mfizz-database' name='Data Browser' href={::this.getPath('databrowser')} />
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

  handleLangChange(tbl_ready,pk,sk,ck) {      
      this.props.onSelectLanguage(tbl_ready,pk,sk,ck);            
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
                <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>Anna Sanchez</div>
                <div>
                  <Progress id='demo-progress' value={30} color='#ffffff'/>
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
            <ApplicationSidebar dataBrowserClickced={this.handleLangChange.bind(this)}/>
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
      </div>
    );
  }
}
