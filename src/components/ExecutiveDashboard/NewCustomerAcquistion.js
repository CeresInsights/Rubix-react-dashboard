import React from 'react';
import { Link } from 'react-router';
import '../app.scss';
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

export default class NewCustomerAcquistion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avg_age: 0,
            data_values_keys: [],
            data_percent: [],
            data_total: [],
            data_description: []
        }
    }
    componentDidMount() {

        let api_key = '';
        api_key = localStorage.getItem('api_key');
        //Get Data For Executive Dashboard Predictive Market Segmentation
        $.ajax({
            url: 'https://ceres.link/api/exec_board/demographics/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                // let avg_age = 0;
                // let data_keys = [];
                // let data_values = [];
                // let data_description = [];
                // let data_percent = [];
                // let data_total = [];

                // avg_age = data["age"]["average"];
                // delete data["age"];
                // console.log("DATA", data)
                // console.log("age", avg_age)
                // this.setState({
                //     avg_age: avg_age
                // })
            //     data_keys = Object.keys(data)
            //     console.log("data_keys", data_keys)
            //     for (let i = 0; i < data_keys.length; i++) {
            //         data_values.push(data[data_keys[i]]);
            //     }
            //     console.log("data_values", data_values)
            //     for (let k = 0; k < data_values.length; k++) {
            //         data_description.push(Object.keys(data_values[k]))
            //     }
            //     console.log("title", data_description)
            //     this.setState({
            //         data_description: data_description
            //     })
            //    for (let ii=0; ii<data_keys.lenght; ii++){
            //        for (let j = 0; j < data_description.length; j++) {
            //            data_percent.push(data_values[data_description[ii][j]]["percentage"]);
            //            data_total.push(data_values[data_description[ii][j]]["total"]);
            //        }
            //    }
            //     console.log("percent", data_percent)
            //     console.log("total", data_total)
            //     this.setState({
            //         data_percent: data_percent,
            //         data_total: data_total
            //     })

            }.bind(this),
            error: function (error) {
                console.log('ExecNewCustomerError', error);
            }
        });
    }
    componentDidUpdate() {
        // (() => {
        //     ///////////////// Predictive Market Segmentation Charts/////////////////////
        //     ///////////// Predictive Market Segmentation Bar Column Chart//////////////
        //     $('#pms_bar_chart').html('');
        //     var pms_bar_chart = new Rubix('#pms_bar_chart', {
        //         height: 100,
        //         title: 'Predictive Market Segmentation',
        //         titleColor: '#D71F4B',
        //         axis: {
        //             x: {
        //                 type: 'ordinal',
        //             },
        //             y: {
        //                 type: 'linear',
        //                 tickFormat: 'd',
        //                 tickCount: 5
        //             }
        //         },
        //         // tooltip: {
        //         //   color: '#D71F4B',
        //         //   format: {
        //         //     y: '.0f'
        //         //   }
        //         // },
        //         margin: {
        //             left: 50
        //         },
        //         grouped: false,
        //         show_markers: true
        //     });

        //     var bar = pms_bar_chart.column_series({
        //         name: 'Shopping Rate',
        //         color: '#D71F4B'
        //     });

        //     var tmp = this.state.bdw_data;
        //     var tmp_array = [];
        //     for (var i in tmp) {
        //         var t = new Object;
        //         t.x = i;
        //         t.y = tmp[i];
        //         tmp_array.push(t);
        //     }
        //     bar.addData(tmp_array);

        //     ///////////// Predictive Market Segmentation Pie Chart//////////////
        //     var color_array = ['#8064A2', '#C0504D', '#4F81BD', '#9BBB59'];
        //     $('#pms_pie_chart').html('');
        //     var pie = Rubix.Pie('#pms_pie_chart', {
        //         title: 'Predictive Market Segmentation',
        //         height: 300
        //     });

        //     var csr_data = this.state.csr_data;
        //     delete csr_data["total_market_spend"];
        //     var tmp_array = [];
        //     for (var i in csr_data) {
        //         var t = new Object;
        //         t.name = i;
        //         t.value = csr_data[i]["market_share_%"];
        //         t.color = color_array[this.getObjectKeyIndex(csr_data, i)];
        //         tmp_array.push(t);
        //     }

        //     pie.addData(tmp_array);

        // })();
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
                                        {this.state.avg_age &&
                                            <Tab.Pane eventKey="pms">
                                                <div id="pms_pie_chart"></div>
                                                <div id="pms_bar_chart"></div>
                                                <div className="pms_tile">
                                                    <p className="pms_tile_header">Average Age</p>
                                                    <p className="pms_tile_content">{this.state.avg_age}</p>
                                                </div>
                                            </Tab.Pane>
                                        }
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