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

export default class NewCustomerAcquistion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demographics: {},
            age_avg: 0,
            demo_contents: [],
            demo_contents_keys: [],
            demo_keys: [],
            demo_percent_total: []
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
                let age_avg = 0;
                let demographics = {};
                let demo_keys = [];
                let demo_contents = [];
                let demo_contents_keys = [];
                let demo_percent_total = [];
                let demo_percent_total_item = [];

                demographics = data;
                age_avg = data["age"]["average"];

                delete data["age"];
                demo_keys = Object.keys(data);
                demo_keys.map((item) => {
                    demo_contents.push(data[item])
                })
                demo_contents.map((content) => {
                    demo_contents_keys.push(Object.keys(content));
                })
                console.log("demo_contents_keys", demo_contents_keys)
                demo_contents.map((content) => {
                    demo_contents_keys.map((itemArray, index) => {
                        itemArray.map((item) => {
                            demo_percent_total_item.push(content[item])
                        })
                        demo_percent_total.push(demo_percent_total_item)

                    })
                    console.log("demo_percent_total", demo_percent_total)
                })
                this.setState({
                    demographics: demographics,
                    age_avg: age_avg,
                    demo_keys: demo_keys,
                    demo_contents: demo_contents,
                    demo_contents_keys: demo_contents_keys,
                    demo_percent_total: demo_percent_total
                })
            }.bind(this),
            error: function (error) {
                console.log('ExecNewCustomerError', error);
            }
        });
    }
    componentDidUpdate() {
    }
    renderDemographicsPieChart = (index) => {
        (() => {
            var color_array = ['#8064A2', '#C0504D', '#4F81BD', '#9BBB59'];
            $('#demographics_pie_chart' + index).html('');
            var chart = Rubix.Pie('#demographics_pie_chart' + index, {
                title: 'Demographics Pie',
                height: 250
            });

            var labels = [];
            var data = [];
            var tmp_array = [];

            labels = this.state.demo_contents_keys[index];
            data = this.state.demo_percent_total[index];

            labels.map((label, index) => {
                var tmp = {};
                tmp.name = label;
                tmp.value = data[index]["percentage"];
                tmp.color = color_array[index];
                tmp_array.push(tmp);
            })
            chart.addData(tmp_array);
        })();


    }
    renderDemographicsColumnChart = (index) => {
        (() => {
            $('#demographics_column_chart' + index).html('');
            var chart = new Rubix('#demographics_column_chart' + index, {
                height: 250,
                title: 'Demographics Column Chart',
                titleColor: '#D71F4B',
                axis: {
                    x: {
                        type: 'ordinal',
                    },
                    y: {
                        type: 'linear',
                        tickFormat: 'd'
                    }
                },
                // tooltip: {
                //   color: '#D71F4B',
                //   format: {
                //     y: '.0f'
                //   }
                // },
                margin: {
                    left: 50
                },
                grouped: false,
                show_markers: true
            });

            var demographics_column = chart.column_series({
                name: 'Column',
                color: '#D71F4B'
            });
            var labels = [];
            var data = [];
            var tmp_array = [];

            labels = this.state.demo_contents_keys[index];
            data = this.state.demo_percent_total[index];

            labels.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data[index]["total"];
                tmp_array.push(tmp);
            })
            demographics_column.addData(tmp_array);
        })();


    }
    renderDemographicsBarChart = (index) => {
        (() => {
            $('#demographics_bar_chart' + index).html('');
            var chart = new Rubix('#demographics_bar_chart' + index, {
                height: 250,
                title: 'Demographics Bar Chart',
                titleColor: '#D71F4B',
                axis: {
                    x: {
                        type: 'ordinal',
                    },
                    y: {
                        type: 'linear',
                        tickFormat: 'd'
                    }
                },
                // tooltip: {
                //   color: '#D71F4B',
                //   format: {
                //     y: '.0f'
                //   }
                // },
                margin: {
                    left: 50
                },
                grouped: false,
                show_markers: true
            });

            var demographics_bar = chart.bar_series({
                name: 'Bar',
                color: '#D71F4B'
            });
            var labels = [];
            var data = [];
            var tmp_array = [];

            labels = this.state.demo_contents_keys[index];
            data = this.state.demo_percent_total[index];

            labels.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data[index]["total"];
                tmp_array.push(tmp);
            })
            demographics_bar.addData(tmp_array);
        })();


    }
    renderDemographicsData = () => {
        let demo_keys = [];
        let demo_contents = [];
        let demo_contents_keys = [];
        demo_keys = this.state.demo_keys;
        return (
            <Grid>
                <Row>
                    <Col xs={12} className="age_tile_area">
                        <div className="pms_age_tile">
                            <p className="pms_age_tile_header">Average Age</p>
                            <p className="pms_age_tile_content">{Math.round(this.state.age_avg)}</p>
                        </div>
                    </Col>
                </Row>
                {demo_keys.map((item, index) => {
                    let num = Math.random() * 2;
                    return <Row key={index} className="demographices_row">
                        <Col xs={6} className="pie_chart_area">
                            <div id={"demographics_pie_chart" + index}></div>
                        </Col>
                        <Col xs={6} className="bar_chart_area">
                            <div id={num > 1 ? "demographics_bar_chart" + index : "demographics_column_chart" + index}></div>
                        </Col>
                    </Row>
                })
                }
            </Grid>
        )
    }
    onTabSelect = (key) => {
        let demo_keys = [];
        demo_keys = this.state.demo_keys;
        if (key === 'pms') {
            demo_keys.map((item, index) => {
                setTimeout(() => {
                    let a = document.getElementById('demographics_pie_chart' + index);
                    if (a) {
                        this.renderDemographicsPieChart(index);
                    }
                }, 300)
                setTimeout(() => {
                    let b = document.getElementById('demographics_column_chart' + index);
                    if (b) {
                        this.renderDemographicsColumnChart(index);
                    }
                }, 300)
                setTimeout(() => {
                    let c = document.getElementById('demographics_bar_chart' + index);
                    if (c) {
                        this.renderDemographicsBarChart(index);
                    }
                }, 300)
            })
        }

    }
    render() {
        return (
            <PanelTabContainer id='panel-body-header-footer-both-plain-tabs' defaultActiveKey="pclv" onSelect={this.onTabSelect}>
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
                                            {/* <MaleFemaleChart /> */}
                                            <div>good</div>
                                        </Tab.Pane>
                                        {this.state.demographics &&
                                            <Tab.Pane eventKey="pms">
                                                {this.renderDemographicsData()}
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