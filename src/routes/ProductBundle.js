import React from 'react';
// import { connect } from 'react-redux';
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
class ProductBundlesbyCustomerBehavior extends React.Component {
  getObjectKeyIndex(obj, keyToFind) {
    var i = 0, key;

    for (key in obj) {
      if (key == keyToFind) {
        return i;
      }

      i++;
    }

    return null;
  }
  componentDidUpdate() {
    var color_array = ['#4572a7', '#aa4643', '#89a54e', '#80699b', '#3d96ae', '#db843d'];
    (() => {
      $('#cpp_chart').html('');
      var pie2 = Rubix.Pie('#cpp_chart', {
        title: 'Customer Product Preferences',
        height: 300
      });

      var products_data = this.props.products_data;
      var tmp_array = [];
      for (var i in products_data) {
        var t = new Object;
        t.name = i;
        t.value = products_data[i].total;
        t.color = color_array[this.getObjectKeyIndex(products_data, i)];
        tmp_array.push(t);
      }
      pie2.addData(tmp_array);
    })();

    //CPA Chart
    (() => {
      $('#cpa_chart').html('');
      var chart = new Rubix('#cpa_chart', {
        height: 300,
        title: 'Customer Product Appetite',
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

      var tmp = this.props.products_data;
      var tmp_array = [];
      for (var i in tmp) {
        var t = new Object;
        t.x = i;
        t.y = tmp[i].total;
        tmp_array.push(t);
      }
      fruits.addData(tmp_array);
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
                  <h4>Product Bundles by Consumer Behavior</h4>
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
      </PanelTabContainer>
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

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products_data: '',
      prod_pay: {},
      prod_product: {}
    };
  }
  componentDidMount() {
    var api_key = localStorage.getItem('api_key');

    $.ajax({
      url: 'https://ceres.link/api/app/products/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        this.setState({ 'products_data': data['product'] });
      }.bind(this),
      error: function (error) {
        console.log('error');
        console.log(error);
      }
    })

    //Get Data For Sub-Dashboard(Product App) Payment Preferences
    $.ajax({
      url: 'https://ceres.link/api/sub_board/prod_pay/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("SubPayUpdate", data);
        this.setState({ prod_pay: data })
      }.bind(this),
      error: function (error) {
        console.log('SubPayUpdate Error', error);
      }
    });

    //Get Data For Sub-Dashboard(Product App) Product Appetite
    $.ajax({
      url: 'https://ceres.link/api/sub_board/prod_product/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("SubAppetiteUpdate", data);
        this.setState({ prod_product: data })
      }.bind(this),
      error: function (error) {
        console.log('SubAppetiteUpdate Error', error);
      }
    });
  }
  render() {
    return (
      <div className='execdashboard'>
        <Row>
          <Col sm={12}>
            <ProductBundlesbyCustomerBehavior products_data={this.state.products_data} />
            <ExportButtonGroup />
          </Col>
        </Row>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//   subChannel: state.subChannel,
//   subProduct: state.subProduct
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Product);