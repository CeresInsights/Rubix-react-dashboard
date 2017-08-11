import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

import {
  Row,
  Tab,
  Col,
  Nav,
  Icon,
  Grid,
  Form,
  Table,
  Label,
  Panel,
  Button,
  NavItem,
  Checkbox,
  Progress,
  PanelBody,
  FormGroup,
  PanelLeft,
  isBrowser,
  InputGroup,
  LoremIpsum,
  PanelRight,
  PanelHeader,
  FormControl,
  PanelContainer,
  PanelTabContainer,
  ButtonGroup
} from '@sketchpixy/rubix';

@withRouter
class CampaignsPromotionsAndLoyaltyOptimization extends React.Component {
  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }
  componentDidUpdate() {
    //CPTA chart
    (() => {
      $('#cpta_chart').html('');
      var chart = new Rubix('#cpta_chart', {
        height: 300,
        title: 'Customer Purchase Time Analysis',
        subtitle: 'Best Day Of Week',
        titleColor: '#D71F4B',
        subtitleColor: '#D71F4B',
        axis: {
          x: {
            type: 'ordinal',
          },
          y: {
            type: 'linear',
            tickFormat: 'd'
          }
        },
        tooltip: {
          color: '#D71F4B',
          format: {
            y: '.0f'
          }
        },
        margin: {
          left: 50
        },
        grouped: false,
        show_markers: true
      });

      var fruits = chart.column_series({
        name: 'Shopping Rate',
        color: '#D71F4B'
      });

      var tmp = this.props.cpta_data;
      var tmp_array = [];
      for (var i in tmp) {
        var t = new Object;
        t.x = i;
        t.y = tmp[i];
        tmp_array.push(t);
      }
      fruits.addData(tmp_array);

      //MAD chart
      $('#mad_chart').html('');
      var mad_chart = new Rubix('#mad_chart', {
        height: 300,
        title: 'Customer Purchase Time Analysis',
        subtitle: 'Monthly Activity Distribution',
        titleColor: '#D71F4B',
        subtitleColor: '#D71F4B',
        axis: {
          x: {
            type: 'ordinal',
          },
          y: {
            type: 'linear',
            tickFormat: 'd'
          }
        },
        tooltip: {
          color: '#D71F4B',
          format: {
            y: '.0f'
          }
        },
        margin: {
          left: 50
        },
        grouped: false,
        show_markers: true
      });

      fruits = mad_chart.column_series({
        name: 'Shopping Rate',
        color: '#D71F4B'
      });

      tmp = this.props.mad_data;
      tmp_array = [];
      for (var i in tmp) {
        var t = new Object;
        t.x = i;
        t.y = tmp[i];
        tmp_array.push(t);
      }
      fruits.addData(tmp_array);

      //ASI chart
      $('#asi_chart').html('');
      var asi_chart = new Rubix('#asi_chart', {
        height: 300,
        title: 'Customer Purchase Time Analysis',
        subtitle: 'Average Shopping Interval',
        titleColor: '#D71F4B',
        subtitleColor: '#D71F4B',
        axis: {
          x: {
            type: 'ordinal',
          },
          y: {
            type: 'linear',
            tickFormat: 'd'
          }
        },
        tooltip: {
          color: '#D71F4B',
          format: {
            y: '.0f'
          }
        },
        margin: {
          left: 50
        },
        grouped: false,
        show_markers: true
      });

      fruits = asi_chart.column_series({
        name: 'Shopping Rate',
        color: '#D71F4B'
      });

      tmp = this.props.asi_data;
      tmp_array = [];
      for (var i in tmp) {
        var t = new Object;
        t.x = i;
        t.y = tmp[i];
        tmp_array.push(t);
      }
      fruits.addData(tmp_array);
    })();

    //RPR chart
    //later

    //PLE chart
    (() => {
      // $('#ple_chart').html('');
      //   var chart = new Rubix('#ple_chart', {
      //     height: 300,
      //     title: 'Product Loyalty Estimate',
      //     titleColor: '#D71F4B',
      //     subtitleColor: '#D71F4B',
      //     axis: {
      //       x: {
      //         type: 'ordinal',
      //       },
      //       y: {
      //         type: 'linear',
      //         tickFormat: 'd'
      //       }
      //     },
      //     tooltip: {
      //       color: '#D71F4B',
      //       format: {
      //         y: '.0f'
      //       }
      //     },
      //     margin: {
      //       left: 50
      //     },
      //     grouped: false,
      //     show_markers: true
      //   });

      //   var fruits = chart.column_series({
      //     name: 'Shopping Rate',
      //     color: '#D71F4B'
      //   });

      //   var tmp = this.props.ple_data;       
      //   var tmp_array = [];
      //   for (var i in tmp){         
      //     var t = new Object;
      //     t.x = i;
      //     t.y = tmp[i].total;
      //     tmp_array.push(t);
      //   }
      //   fruits.addData(tmp_array);
    })();
  }
  render() {
    return (
      <PanelTabContainer id='campaigns_promotions_loyaltypanel' defaultActiveKey="cpta">
        <Panel>
          <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
            <Grid>
              <Row>
                <Col xs={12} className="text-center">
                  <Link className="title_link" to={::this.getPath('sub_campaigns')}><h4>Campaigns,Promotions, and Loyalty Optimization </h4></Link>
                </Col>
              </Row>
            </Grid>
          <Nav bsStyle="tabs" className='plain'>
            <NavItem eventKey="cpta">
              CPTA
              </NavItem>
            <NavItem eventKey="ple">
              PLE
              </NavItem>
            <NavItem eventKey="clv">
              CLV
              </NavItem>
          </Nav>
          </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col xs={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="cpta">
                    <div id="cpta_chart" ></div>
                    <div id="mad_chart" ></div>
                    <div id="asi_chart" ></div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="ple">
                    <div id="ple_chart"></div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="clv">
                    <h3>Customer Lifetime Value</h3>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Grid>
        </PanelBody>
        </Panel>
      </PanelTabContainer >
    );
  }
}


@withRouter
class ProductPromotionByChannel extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log("AAAAAAAAAAAAAAAA", nextProps.sma_channel, nextProps.sma_product, nextProps.dsa_data)
  // }
  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  componentDidMount() {

    // $.ajax({
    //   url:'https://ceres.link/api/exec_board/sma_channel/api_key=0xe4badc7779b6517',
    //   dataType: 'json',
    //   type: 'GET',
    //   success: function(date){
    //     if
    //   }
    // })
    (() => {
      var pie = Rubix.Pie('#pie-chart', {
        title: 'Shopping Mode Analysis',
        subtitle: 'Browser Share',
        height: 300
      });

      pie.addData([
        {
          name: 'Firefox',
          value: 45.0,
          color: '#4572a7'
        },
        {
          name: 'IE',
          value: 26.8,
          color: '#aa4643'
        },
        {
          name: 'Chrome',
          value: 12.8,
          color: '#89a54e'
        },
        {
          name: 'Safari',
          value: 8.5,
          color: '#80699b'
        },
        {
          name: 'Opera',
          value: 6.2,
          color: '#3d96ae'
        },
        {
          name: 'Others',
          value: 0.7,
          color: '#db843d'
        }
      ]);

      var pie1 = Rubix.Pie('#pie-chart2', {
        title: 'Digital Shopping Activity',
        subtitle: 'Browser Share',
        height: 300
      });

      pie1.addData([
        {
          name: 'Firefox',
          value: 49.0,
          color: '#4572a7'
        },
        {
          name: 'IE',
          value: 21.8,
          color: '#aa4643'
        },
        {
          name: 'Chrome',
          value: 62.8,
          color: '#89a54e'
        },
        {
          name: 'Safari',
          value: 3.5,
          color: '#80699b'
        },
        {
          name: 'Opera',
          value: 2.2,
          color: '#3d96ae'
        },
        {
          name: 'Others',
          value: 10,
          color: '#db843d'
        }
      ]);
    })();
  }
  render() {
    return (
      <PanelTabContainer id='panel-body-header-footer-both-plain-tabs' defaultActiveKey="sma">
        <Panel>
          <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
            <Grid>
              <Row>
                <Col xs={12} className="text-center">
                  <Link className="title_link" to={::this.getPath('sub_ppbc')}><h4>Product Promotion By Channel</h4></Link>
                </Col>
              </Row>
            </Grid>
          <Nav bsStyle="tabs" className='plain'>
            <NavItem eventKey="sma">
              Shopping Modes Analysis
              </NavItem>
            <NavItem eventKey="dsa">
              Digital Shopping Activity
              </NavItem>
          </Nav>
          </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col xs={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="sma">
                    <div id="pie-chart" > </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="dsa">
                    <div id="pie-chart2" > </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Grid>
        </PanelBody>
        </Panel>
      </PanelTabContainer >
    );
  }
}

@withRouter
class ProductBundlesbyCustomerBehavior extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log("BBBBBBBBBBBBBBBB", nextProps.customer_pay)
  // }
  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  componentDidMount() {
    (() => {
      var pie = Rubix.Pie('#cpp_chart', {
        title: 'Customer Product Preferences',
        subtitle: 'Browser Share',
        height: 300
      });

      pie.addData([
        {
          name: 'Firefox',
          value: 45.0,
          color: '#4572a7'
        },
        {
          name: 'IE',
          value: 26.8,
          color: '#aa4643'
        },
        {
          name: 'Chrome',
          value: 12.8,
          color: '#89a54e'
        },
        {
          name: 'Safari',
          value: 8.5,
          color: '#80699b'
        },
        {
          name: 'Opera',
          value: 6.2,
          color: '#3d96ae'
        },
        {
          name: 'Others',
          value: 0.7,
          color: '#db843d'
        }
      ]);
    })();

    //CPA Chart
    (() => {
      var chart = new Rubix('#cpa_chart', {
        height: 300,
        title: 'Single Series Column Chart',
        subtitle: 'Fruits',
        titleColor: '#D71F4B',
        subtitleColor: '#D71F4B',
        axis: {
          x: {
            type: 'ordinal',
          },
          y: {
            type: 'linear',
            tickFormat: 'd'
          }
        },
        tooltip: {
          color: '#D71F4B',
          format: {
            y: '.0f'
          }
        },
        margin: {
          left: 50
        },
        grouped: false,
        show_markers: true
      });

      var fruits = chart.column_series({
        name: 'Fruits',
        color: '#D71F4B'
      });

      fruits.addData([
        { x: 'Apples', y: 5 },
        { x: 'Oranges', y: 3 },
        { x: 'Pears', y: 4 },
        { x: 'Grapes', y: 7 },
        { x: 'Bananas', y: 2 },
        { x: 'Strawberry', y: 15 }
      ]);
    })();
  }
  render() {
    return (
      <PanelTabContainer id='panel-body-header-footer-both-plain-tabs' defaultActiveKey="cpp">
        <Panel>
          <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
            <Grid>
              <Row>
                <Col xs={12} className="text-center">
                  <Link className="title_link" to={::this.getPath('sub_pbbcb')}><h4>Product Bundles by Consumer Behavior</h4></Link>
                </Col>
              </Row>
            </Grid>
          <Nav bsStyle="tabs" className='plain'>
            <NavItem eventKey="cpp">
              Customer Payment Preferences
              </NavItem>
            <NavItem eventKey="cpa">
              Customer Product Appetite
              </NavItem>
          </Nav>
          </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col xs={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="cpp">
                    <div id="cpp_chart"></div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="cpa">
                    <div id="cpa_chart"></div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Grid>
        </PanelBody>
        </Panel>
      </PanelTabContainer >
    );
  }
}

class NewCustomerAcquistion extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log("CCCCCCCCCCCCCCC", nextProps.new_customer)
  // }
  componentDidMount() {
    (() => {
      var chart = new Rubix('#pms_chart', {
        title: 'Market Segmentation',
        subtitle: 'Profit/Expense chart',
        titleColor: '#0080FF',
        subtitleColor: '#0080FF',
        height: 300,
        axis: {
          x: {
            type: 'ordinal'
          },
          y: {
            type: 'linear',
            tickFormat: ',.0f',
            label: 'Revenue',
            tickCount: 5
          }
        },
        tooltip: {
          color: 'white',
          format: {
            y: ',.0f'
          }
        },
        show_markers: true
      });

      var profit = chart.bar_series({
        name: 'Profit',
        color: '#0080FF'
      });

      profit.addData([
        { x: 'Jan', y: 30000 },
        { x: 'Feb', y: 25000 },
        { x: 'Mar', y: 25000 },
        { x: 'Apr', y: 30000 },
        { x: 'May', y: 65000 },
        { x: 'Jun', y: 15000 }
      ]);

      var expenses = chart.bar_series({
        name: 'Expense',
        color: '#FF6666',
        marker: 'square'
      });

      expenses.addData([
        { x: 'Jan', y: -35000 },
        { x: 'Feb', y: -10000 },
        { x: 'Mar', y: -10000 },
        { x: 'Apr', y: -15000 },
        { x: 'May', y: -15000 },
        { x: 'Jun', y: -5000 }
      ]);
    })();
  }
  render() {
    return (
      <PanelTabContainer id='panel-body-header-footer-both-plain-tabs' defaultActiveKey="pclv">
        <Panel>
          <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
            <Grid>
              <Row>
                <Col xs={12} className="text-center">
                  <h4>New Customer Acquistion</h4>
                </Col>
              </Row>
            </Grid>
            <Nav bsStyle="tabs" className='plain'>
              <NavItem eventKey="pclv">
                Predict Customer Lifetime Value
              </NavItem>
              <NavItem eventKey="pms">
                Predictive Market Segmentation
              </NavItem>
            </Nav>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="pclv">
                      <MaleFemaleChart />
                    </Tab.Pane>
                    <Tab.Pane eventKey="pms">
                      <div id="pms_chart"></div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelTabContainer>
    );
  }
}

class RealTimeLocationAnalysis extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <PanelTabContainer id='real-time-location-analysis-panel-tab' defaultActiveKey="rpa">
        <Panel>
          <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
            <Grid>
              <Row>
                <Col xs={12} className="text-center">
                  <h4>Realtime Location Analysis</h4>
                </Col>
              </Row>
            </Grid>
            <Nav bsStyle="tabs" className='plain'>
              <NavItem eventKey="rpa">
                Real Time Proximity Analysis
              </NavItem>
              <NavItem eventKey="clp">
                Customer Location Preferences
              </NavItem>
            </Nav>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="rpa">
                      <MapPanel />
                    </Tab.Pane>
                    <Tab.Pane eventKey="clp">
                      <h3> Customer Location/Shop/Site Preferences</h3>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelTabContainer>
    );
  }
}

class PriceOptimization extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <PanelTabContainer id='price-optimization-panel-tab' defaultActiveKey="cslr">
        <Panel>
          <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
            <Grid>
              <Row>
                <Col xs={12} className="text-center">
                  <h4>Price Optimization</h4>
                </Col>
              </Row>
            </Grid>
            <Nav bsStyle="tabs" className='plain'>
              <NavItem eventKey="cslr">
                Customer Spending Limits & Ranges
              </NavItem>
            </Nav>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="cslr">
                      <h3> Customer Spending Limits & Ranges</h3>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelTabContainer>
    );
  }
}

class MapPanel extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      var map = new GMaps({
        div: '#routingmap',
        lat: 38.890792,
        lng: -77.048518,
        scrollwheel: false,
        zoom: 16
      });
      var list = [];
      map.travelRoute({
        origin: [38.892428, -77.048454],
        destination: [38.889497, -77.050181],
        travelMode: 'walking',
        step: function (e) {
          list.push({
            instructions: e.instructions,
            lat: e.end_location.lat(),
            lng: e.end_location.lng(),
            path: e.path
          });
        }.bind(this),
        end: function (e) {
          var lat, lng, path;
          var processList = function (i) {
            if (list.length === i) return;
            lat = list[i].lat;
            lng = list[i].lng;
            path = list[i].path;
            map.drawPolyline({
              path: path,
              strokeColor: '#FF6FCF',
              strokeWeight: 8
            });
            processList(i + 1);
          }.bind(this);
          processList(0);
        }.bind(this)
      });
    }, 300);
  }
  render() {
    return (
      <PanelContainer collapseBottom>
        <Panel>
          <PanelHeader>
            <div style={{ padding: 25 }}>
              <div id='routingmap' style={{ height: 300 }}></div>
            </div>
          </PanelHeader>
        </Panel>
      </PanelContainer>
    );
  }
}

class ExportButtonGroup extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <PanelTabContainer id='real-time-location-analysis-panel-tab' defaultActiveKey="rpa">
        <Panel>
          <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
            <Grid>
              <Row>
                <Col xs={12} className="text-center">
                  <h4>Export Dashboard</h4>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <ButtonGroup justified>
                    <Button href="#" bsStyle='blue'>Send Customized Email</Button>
                    <Button href="#" bsStyle='blue'>Push to Marketing Automation</Button>
                    <Button href="#" bsStyle='blue'>Export to CSV</Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelTabContainer>
    );
  }
}
class MaleFemaleChart extends React.Component {
  componentDidMount() {
    var chart = new Rubix('#male-female-chart', {
      height: 200,
      title: 'Predict Customer Lifetime Value',
      subtitle: '',
      axis: {
        x: {
          type: 'ordinal',
          tickFormat: 'd',
          tickCount: 2,
          label: 'Time'
        },
        y: {
          type: 'linear',
          tickFormat: 'd'
        }
      },
      tooltip: {
        theme_style: 'dark',
        format: {
          y: '.0f'
        },
        abs: {
          y: true
        }
      },
      stacked: true,
      interpolate: 'linear',
      show_markers: true
    });

    var column = chart.column_series({
      name: 'Current Population',
      color: '#2D89EF',
      marker: 'cross'
    });

    var data = [
      { x: 2005, y: 21 },
      { x: 2006, y: 44 },
      { x: 2007, y: 14 },
      { x: 2008, y: 18 },
      { x: 2009, y: 23 },
      { x: 2010, y: 21 }
    ];
    column.addData(data);

    var column1 = chart.column_series({
      name: 'Predicted Population',
      color: '#FF0097',
      marker: 'diamond'
    });

    var data1 = [
      { x: 2005, y: -79 },
      { x: 2006, y: -56 },
      { x: 2007, y: -86 },
      { x: 2008, y: -82 },
      { x: 2009, y: -77 },
      { x: 2010, y: -79 }
    ];
    column1.addData(data1);
  }
  render() {
    return <div id='male-female-chart'></div>;
  }
}

export default class ExecDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cpta_data: '',
      ple_data: '',
      mad_data: '',
      asi_data: '',
      sma_channel: {},
      sma_product: {},
      dsa_data: {},
      customer_pay: {},
      new_customer: {}
    };
  }
  componentDidMount() {
    let api_key = localStorage.getItem('api_key');
    let pk_data = localStorage.getItem('pk');
    let sk_data = localStorage.getItem('sk');
    let ck_data = localStorage.getItem('ck');
    let pk = '';
    let sk = '';
    let ck = '';

    console.log("EXEC DASH KEY", api_key);
    console.log("PK", pk_data);
    console.log("SK", sk_data);
    console.log("CK", sk_data);
    $.ajax({
      url: 'https://ceres.link/api/app/bdw/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log(data);
        this.setState({ 'cpta_data': data });
      }.bind(this),
      error: function (error) {
        console.log('error', error);
      }
    });
    $.ajax({
      url: 'https://ceres.link/api/app/mad/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        this.setState({ 'mad_data': data });
      }.bind(this),
      error: function (error) {
        console.log('error', error);
      }
    });

    $.ajax({
      url: 'https://ceres.link/api/app/asi/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        this.setState({ 'asi_data': data });
      }.bind(this),
      error: function (error) {
        console.log('error', error);
      }
    });
    $.ajax({
      url: 'https://ceres.link/api/app/products/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        this.setState({ 'ple_data': data['product'] });
      }.bind(this),
      error: function (error) {
        console.log('error', error);
      }
    });

    pk = pk_data ? pk_data : 'country';
    sk = sk_data ? sk_data : 'united_states';
    ck = ck_data ? ck_data : 'purchase_log_csv';
    //Get Data For Executive Dashboard SMA Channel 
    $.ajax({
      url: 'https://ceres.link/api/exec_board/sma_channel/api_key=' + api_key + ';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("11111111111111", data);
        this.setState({ sma_channel: data })
      }.bind(this),
      error: function (error) {
        console.log('1111111111111error', error);
      }
    });

    //Get Data For Executive Dashboard SMA Product
    $.ajax({
      url: 'https://ceres.link/api/exec_board/sma_product/api_key=' + api_key + ';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("22222222222", data);
        this.setState({ sma_product: data })
      }.bind(this),
      error: function (error) {
        console.log('2222222222222error', error);
      }
    });

    //Get Data For Executive Dashboard DSA
    $.ajax({
      url: 'https://ceres.link/api/exec_board/dsa/api_key=' + api_key + ';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("3333333333", data);
        this.setState({ dsa_data: data })
      }.bind(this),
      error: function (error) {
        console.log('3333333333333error', error);
      }
    });

    //Get Data For Executive Dashboard Payment Preferences
    $.ajax({
      url: 'https://ceres.link/api/exec_board/prod_pay/api_key=' + api_key + ';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("44444444444444", data);
        this.setState({ customer_pay: data })
      }.bind(this),
      error: function (error) {
        console.log('444444444error', error);
      }
    });

    //Get Data For Executive Dashboard Payment Preferences
    $.ajax({
      url: 'https://ceres.link/api/exec_board/demographics/api_key=' + api_key + ';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("555555555555", data);
        this.setState({ new_customer: data })
      }.bind(this),
      error: function (error) {
        console.log('55555555error', error);
      }
    });

  }
  render() {
    return (
      <div className='execdashboard'>
        <Row>
          <Col sm={12}>
            <CampaignsPromotionsAndLoyaltyOptimization cpta_data={this.state.cpta_data} mad_data={this.state.mad_data} asi_data={this.state.asi_data} ple_data={this.state.ple_data} />
            <ProductPromotionByChannel sma_channel={this.state.sma_channel} sma_product={this.state.sma_product} dsa_data={this.state.dsa_data} />
            <ProductBundlesbyCustomerBehavior customer_pay={this.state.customer_pay} />
            <NewCustomerAcquistion new_customer={this.state.new_customer} />
            <RealTimeLocationAnalysis />
            <PriceOptimization />
            <ExportButtonGroup />
          </Col>
        </Row>
      </div>
    );
  }
}


// const mapStateToProps = (state) => {

//   return {
//     execChannel: state.execChannel,
//     execProduct: state.execProduct,
//     dsaData: state.dsaData,
//     customerPay: state.customerPay,
//     newCustomer: state.newCustomer
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//  return {

//  }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ExecDashboard);



