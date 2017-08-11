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

class ProductPromotionByChannel extends React.Component {
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
      $('#pie-chart').html('');
      var pie = Rubix.Pie('#pie-chart', {
        title: 'Shopping Mode Analysis By Channel',
        height: 300
      });

      var channels_data = this.props.channels_data;
      var tmp_array = [];
      for (var i in channels_data) {
        var t = new Object;
        t.name = i;
        t.value = channels_data[i].total;
        t.color = color_array[this.getObjectKeyIndex(channels_data, i)];
        tmp_array.push(t);
      }

      pie.addData(tmp_array);

      $('#pie-chart2').html('');
      var pie1 = Rubix.Pie('#pie-chart2', {
        title: 'Digital Shopping Activity',
        height: 300
      });

      pie1.addData(tmp_array);

      $('#smabyproduct_chart').html('');
      var pie2 = Rubix.Pie('#smabyproduct_chart', {
        title: 'Shopping Mode Analysis By Product',
        height: 300
      });

      var products_data = this.props.products_data;
      tmp_array = [];
      for (var i in products_data) {
        var t = new Object;
        t.name = i;
        t.value = products_data[i].total;
        t.color = color_array[this.getObjectKeyIndex(products_data, i)];
        tmp_array.push(t);
      }
      pie2.addData(tmp_array);
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
                  <h4>Product Promotion By Channel</h4>
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
                      <Col sm={6}>
                        <div id="pie-chart" > </div>
                      </Col>
                      <Col sm={6}>
                        <div id="smabyproduct_chart"> </div>
                      </Col>
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

export default class PPBC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels_data: '',
      products_data: '',
      sma_channel: {},
      sma_product: {},
      dsa_data: {}
    };
  }
  componentDidMount() {
    let api_key = localStorage.getItem('api_key');

    // let call_num = localStorage.getItem('call_number');
    // let prev_num = localStorage.getItem('prev_number');

    $.ajax({
      url: 'https://ceres.link/api/app/channels/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        this.setState({ 'channels_data': data['channel'] });
      }.bind(this),
      error: function (error) {
        console.log('error');
        console.log(error);
      }
    });
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

    });
      //Get Data For Sub-Dashboard(Promotion App) SMA Channel
      $.ajax({
        url: 'https://ceres.link/api/sub_board/sma_channel/api_key=' + api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("SubChannelUpdate", data);
          this.setState({ sma_channel: data })
        }.bind(this),
        error: function (error) {
          console.log('SubChannelUpdateERROR', error);
        }
      });

      //Get Data For Sub-Dashboard(Promotion App) SMA Product
      $.ajax({
        url: 'https://ceres.link/api/sub_board/sma_product/api_key=' + api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("SubProductUpdate", data);
          this.setState({ sma_product: data })
        }.bind(this),
        error: function (error) {
          console.log('SubProductUpdateERROR', error);
        }
      });

      //Get Data For Sub-Dashboard(Promotion App) DSA
      $.ajax({
        url: 'https://ceres.link/api/sub_board/dsa/api_key=' + api_key,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          console.log("SubDsaUpdate", data);
          this.setState({ dsa_data: data })
        }.bind(this),
        error: function (error) {
          console.log('SubDsaUpdateERROR', error);
        }
      });
    
  }
  render() {
    return (
      <div className='ppbc_wrapper'>
        <Row>
          <Col sm={12}>
            {/* <ProductPromotionByChannel channels_data={this.state.channels_data} products_data={this.state.products_data} /> */}
            <ProductPromotionByChannel sma_channel={this.state.sma_channel} sma_product={this.state.sma_product} dsa_data={this.state.dsa_data} />
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
// }

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PPBC);