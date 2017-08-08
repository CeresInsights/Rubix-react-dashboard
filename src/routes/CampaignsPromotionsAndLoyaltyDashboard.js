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

class CampaignsPromotionsAndLoyaltyOptimization extends React.Component {
  componentDidUpdate(){
    //CPTA chart
    (() => {
      $('#bdw_chart').html('');
        var chart = new Rubix('#bdw_chart', {
          height: 300,
          title: 'Best Day Of Week',
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

        var tmp = this.props.bdw_data;       
        var tmp_array = [];
        for (var i in tmp){         
          var t = new Object;
          t.x = i;
          t.y = tmp[i];
          tmp_array.push(t);
        }
        fruits.addData(tmp_array);
    })();

    //Montly Activity Distribution
    (() => {
      $('#mad_chart').html('');
        var chart = new Rubix('#mad_chart', {
          height: 300,
          title: 'Monthly Activity Distribution',
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

        var tmp = this.props.mad_data;       
        var tmp_array = [];
        for (var i in tmp){         
          var t = new Object;
          t.x = i;
          t.y = tmp[i];
          tmp_array.push(t);
        }
        fruits.addData(tmp_array);
    })();

    //Average Purchase Interval
    (() => {
      $('#asi_chart').html('');
        var chart = new Rubix('#asi_chart', {
          height: 300,
          title: 'Average Purchase Interval',
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

        var tmp = this.props.asi_data;       
        var tmp_array = [];
        for (var i in tmp){         
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
      $('#ple_chart').html('');
        var chart = new Rubix('#ple_chart', {
          height: 300,
          title: 'Product Loyalty Estimate',
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

        var tmp = this.props.ple_data;       
        var tmp_array = [];
        for (var i in tmp){         
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
      <PanelTabContainer id='campaigns_promotions_loyaltypanel' defaultActiveKey="cpta">
        <Panel>
          <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
            <Grid>
              <Row>
                <Col xs={12} className="text-center">
                  <h4>Campaigns,Promotions, and Loyalty Optimization</h4>
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
                      <div id="bdw_chart" ></div>
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
      </PanelTabContainer>
    );
  }
}

class ExportButtonGroup extends React.Component {
  componentDidMount(){

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
export default class Campaigns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bdw_data :'',
      mad_data :'',
      asi_data :'',
      ple_data :''
    };
  }
  // componentWillReceiveProps(nextProps){
  //   console.log("AAAAAAAAAAAAAAAAAA", nextProps.subChannel)
  //       console.log("BBBBBBBBBBBBBBBB", nextProps.subProduct )
  // }
  componentDidMount(){

    var api_key = localStorage.getItem('api_key');
    $.ajax({
      url: 'https://ceres.link/api/execboard/api_key='+api_key,
      dataType: 'json',
      type: 'GET',
      success:function(data){
        this.setState({'bdw_data':data['Customer Purchase Times Analysis']});
      }.bind(this),
      error:function(error){
        console.log('error');
        console.log(error);
      }
    });

    $.ajax({
      url: 'https://ceres.link/api/app/mad/api_key='+api_key,
      dataType: 'json',
      type: 'GET',
      success:function(data){
        this.setState({'mad_data':data});
      }.bind(this),
      error:function(error){
        console.log('error');
        console.log(error);
      }
    });
    
    $.ajax({
      url: 'https://ceres.link/api/app/asi/api_key='+api_key,
      dataType: 'json',
      type: 'GET',
      success:function(data){
        this.setState({'asi_data':data});
      }.bind(this),
      error:function(error){
        console.log('error');
        console.log(error);
      }
    });    

    $.ajax({
      url: 'https://ceres.link/api/app/products/api_key='+api_key,
      dataType: 'json',
      type: 'GET',
      success:function(data){       
        this.setState({'ple_data':data['product']});
      }.bind(this),
      error:function(error){
        console.log('error');
        console.log(error);
      }
    }); 
  }
  render() {
    return (
      <div className='execdashboard'>
        <Row>
          <Col sm={12}>      
            <CampaignsPromotionsAndLoyaltyOptimization ple_data={this.state.ple_data} bdw_data={this.state.bdw_data} mad_data={this.state.mad_data} asi_data={this.state.asi_data}/>
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

// export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);

