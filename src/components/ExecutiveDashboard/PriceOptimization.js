import React from 'react';
import { connect } from 'react-redux';
import * as execDashActions from '../../actions/execDashActions';
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
export default class PriceOptimization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      csr_total_market: '',
      csr_data: {},
      bdw_data: {},
      mad_data: {},
      csrChart: {},
    }
  }
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
  componentWillReceiveProps(nextProps) {

    let temp = {};
    let csr_total_market = '';
    let csrChart = {};
    temp = nextProps.csr;
    this.setState({
      csr_total_market: temp.csrTile,
      csrChart: temp.csrChart,
    });
  }
  componentDidUpdate() {
    (() => {

      ///////////////// CSR Charts/////////////////////
      /////////////CSR Pie Chart//////////////
      var color_array = ['#8064A2', '#C0504D', '#4F81BD', '#9BBB59'];
      $('#csr_pie_chart2').html('');
      var pie = Rubix.Pie('#csr_pie_chart2', {
        title: 'Market Share By CSR Tier',
        titleColor: '#D71F4B',
        height: 300
      });

      var csr_data = this.state.csrChart;
      delete csr_data["total_market_spend"];
      var tmp_array = [];
      for (var i in csr_data) {
        var t = {};
        t.name = i;
        t.value = csr_data[i]["market_share_%"];
        t.color = color_array[this.getObjectKeyIndex(csr_data, i)];
        tmp_array.push(t);
      }

      pie.addData(tmp_array);

      ///////////CSR Bar Chart/////////////
      $('#csr_bar_chart2').html('');
      var csr_bar_chart = new Rubix('#csr_bar_chart2', {
        height: 300,
        title: 'CSR Tiers By High/Low Ranges',
        titleColor: '#D71F4B',
        axis: {
          x: {
            type: 'ordinal',
            tickCount: 0
          },
          y: {
            type: 'linear',
            tickFormat: '.0f',
          }
        },
        tooltip: {
          color: '#D71F4B',
          format: {
            y: '.2f'
          }
        },
        margin: {
          left: 50
        },
        grouped: true,
      });

      var high_bar = csr_bar_chart.column_series({
        name: 'High',
        color: '#4F81BD'
      });
      var low_bar = csr_bar_chart.column_series({
        name: 'Low',
        color: '#C0504D',
      })

      var csr_data = this.state.csrChart;
      delete csr_data["total_market_spend"];

      let high_array = [];
      let low_array = [];

      for (var i in csr_data) {
        var high = {};
        var low = {};
        high.x = i;
        high.y = csr_data[i]["high"];
        high_array.push(high);

        low.x = i;
        low.y = csr_data[i]["low"];
        low_array.push(low);

      }
      high_bar.addData(high_array);
      low_bar.addData(low_array);
    })();
  }
  renderCsr = () => {
    let temp = '';
    temp = this.state.csr_total_market;
    return <Row>
      <Col md={4}>
        <div id="csr_pie_chart2"></div>
      </Col>
      <Col md={4}>
        <div id="csr_bar_chart2"></div>
      </Col>
      <Col md={4}>

        <div>
          <p className="csr_text">Total Market Spend</p>
          <div className="csr_tile">
            <p className="csr_content">{this.state.csr_total_market}</p>
          </div>
        </div>

      </Col>
    </Row>
  }
  render() {
    let csr_total_market = '';
    csr_total_market = this.state.csr_total_market;
    return (
      <PanelTabContainer id='price-optimization-panel-tab'>
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
                      {this.renderCsr()}
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

