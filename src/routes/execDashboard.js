import React from 'react';
import { Link, withRouter } from 'react-router';
// import '../app.scss';
import CampaignsPromotionsAndLoyaltyOptimization from './CampaignsPromotionsAndLoyaltyOptimization';

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
class ProductPromotionByChannel extends React.Component {
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
      sma_product: [],
      dsa_data: [],
      customer_pay: [],
      new_customer: []
    };
  }
  componentDidMount() {

    //Get Data For Executive Dashboard SMA Product
    $.ajax({
      url: 'https://ceres.link/api/exec_board/sma_product/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("ExecProduct", data);
        this.setState({ sma_product: data })
      }.bind(this),
      error: function (error) {
        console.log('ExecProductError', error);
      }
    });

    //Get Data For Executive Dashboard DSA
    $.ajax({
      url: 'https://ceres.link/api/exec_board/dsa/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("ExecDsa", data);
        this.setState({ dsa_data: data })
      }.bind(this),
      error: function (error) {
        console.log('ExecDsaError', error);
      }
    });

    //Get Data For Executive Dashboard Payment Preferences
    $.ajax({
      url: 'https://ceres.link/api/exec_board/prod_pay/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("ExecProdPay", data);
        this.setState({ customer_pay: data })
      }.bind(this),
      error: function (error) {
        console.log('ExecProdPayError', error);
      }
    });

    //Get Data For Executive Dashboard Payment Preferences
    $.ajax({
      url: 'https://ceres.link/api/exec_board/demographics/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("ExecNewCustomer", data);
        this.setState({ new_customer: data })
      }.bind(this),
      error: function (error) {
        console.log('ExecNewCustomerError', error);
      }
    });

  }
  render() {
    return (
      <div className='execdashboard'>
        <Row>
          <Col sm={12}>
          {/* <CampaignsPromotionsAndLoyaltyOptimization ple_tile_types={this.state.ple_tile_types} ple_tile_titles={this.state.ple_tile_titles} bdw_data={this.state.bdw_data} mad_data={this.state.mad_data} asi_data={this.state.asi_data} /> */}
            <CampaignsPromotionsAndLoyaltyOptimization  />
            {/* <ProductPromotionByChannel sma_product={this.state.sma_product} dsa_data={this.state.dsa_data} /> */}
            <ProductPromotionByChannel />
            {/* <ProductBundlesbyCustomerBehavior customer_pay={this.state.customer_pay} /> */}
            <ProductBundlesbyCustomerBehavior />
            {/* <NewCustomerAcquistion new_customer={this.state.new_customer} /> */}
            <NewCustomerAcquistion />
            <RealTimeLocationAnalysis />
            <PriceOptimization />
            {/* <PriceOptimization csr_data={this.state.csr_data} /> */}
            <ExportButtonGroup />
          </Col>
        </Row>
      </div>
    );
  }
}
