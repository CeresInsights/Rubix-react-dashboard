import React from 'react';
import { Link, withRouter } from 'react-router';
// import '../app.scss';
import CampaignsPromotionsAndLoyaltyOptimization from './CampaignsPromotionsAndLoyaltyOptimization';
import ProductPromotionByChannel from './execProductPromotionByChannel';
import ProductBundlesbyCustomerBehavior from './execProductBundles';
import NewCustomerAcquistion from './execNewCustomer';

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

export default class ExecDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='execdashboard'>
        <Row>
          <Col sm={12}>
            <CampaignsPromotionsAndLoyaltyOptimization  />
            <ProductPromotionByChannel />
            <ProductBundlesbyCustomerBehavior />
            <NewCustomerAcquistion />
            <RealTimeLocationAnalysis />
            <PriceOptimization />
            <ExportButtonGroup />
          </Col>
        </Row>
      </div>
    );
  }
}
