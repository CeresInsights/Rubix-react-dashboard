import { connect } from 'react-redux';
import React from 'react';

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
  
  @connect((state) => state)
  export default class ExportButtonGroup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        api_key: ''
      }
    }
    componentDidMount() {
      let api_key = {};
      api_key = this.props.authReducer
      this.setState({ api_key: api_key["key"] })
    }
    handlePmaClick = () => {
      $.ajax({
        url: 'https://ceres.link/api/pma_request/api_key=' + this.state.api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("PMA data", data)
        }.bind(this),
        error: function (error) {
          console.log('PMA error', error);
        }
      });
    }
    handleCsvClick = () => {
      //MAD
      $.ajax({
        url: 'https://ceres.link/api/app/mad/csv/api_key=' + this.state.api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("CSV mad", data)
        }.bind(this),
        error: function (error) {
          console.log('CSV mad', error);
        }
      });
  
      // ASI api
      $.ajax({
        url: 'https://ceres.link/api/app/asi/csv/api_key=' + this.state.api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("CSV asi", data)
        }.bind(this),
        error: function (error) {
          console.log('CSV asi', error);
        }
      });
  
      // BDW api
      $.ajax({
        url: 'https://ceres.link/api/app/bdw/csv/api_key=' + this.state.api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("CSV bdw", data)
        }.bind(this),
        error: function (error) {
          console.log('CSV bdw', error);
        }
      });
      //SMA channel
      $.ajax({
        url: 'https://ceres.link/api/exec_board/sma_channel/csv/api_key=' + this.state.api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("sma_channel", data)
        }.bind(this),
        error: function (error) {
          console.log('CSV sma_channel', error);
        }
      });
      //SMA product
      $.ajax({
        url: 'https://ceres.link/api/exec_board/sma_product/csv/api_key=' + this.state.api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("CSV sma_product", data)
        }.bind(this),
        error: function (error) {
          console.log('CSV sma_product', error);
        }
      });
      // DSA
      $.ajax({
        url: 'https://ceres.link/api/exec_board/dsa/csv/api_key=' + this.state.api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("CSV dsa", data)
        }.bind(this),
        error: function (error) {
          console.log('CSV dsa', error);
        }
      });
      //Demographics
      $.ajax({
        url: 'https://ceres.link/api/exec_board/demographics/csv/api_key=' + this.state.api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("CSV demographics", data)
        }.bind(this),
        error: function (error) {
          console.log('CSV demographics', error);
        }
      });
      //Prod_Pay
      $.ajax({
        url: 'https://ceres.link/api/exec_board/prod_pay/csv/api_key=' + this.state.api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("CSV prod_pay", data)
        }.bind(this),
        error: function (error) {
          console.log('CSV prod_pay', error);
        }
      });
      //Prod_Product
      $.ajax({
        url: 'https://ceres.link/api/exec_board/prod_product/csv/api_key=' + this.state.api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("CSV prod_product", data)
        }.bind(this),
        error: function (error) {
          console.log('CSV prod_product', error);
        }
      });
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
                      <Button href="#" bsStyle='blue' onClick={this.handlePmaClick}>Push to Marketing Automation</Button>
                      <Button href="#" bsStyle='blue' onClick={this.handleCsvClick}>Export to CSV</Button>
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