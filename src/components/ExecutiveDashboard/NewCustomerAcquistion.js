import React from 'react';
import { Link } from 'react-router';
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
export default class NewCustomerAcquistion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demographics: {},
            age_avg: '',
            demo_contents: [],
            demo_contents_keys: [],
            demo_keys: [],
            demo_percent_total: []
        }
    }
    // componentDidMount() {
    //     let apiKey = '';
    //     apiKey = localStorage.getItem('apiKey');
    //     const { dispatch } = this.props;
    //     dispatch(execDashActions.fetchDemographicsData(apiKey));
    // }
    componentWillReceiveProps(nextProps) {


        let demographics = {};
        let demo_keys = [];
        let demo_contents = [];
        let demo_contents_keys = [];
        let demo_percent_total = [];
        let demo_percent_total_item = [];

        demographics = nextProps.demographics;
        if (Object.keys(demographics).length > 0) {
            // console.log("demo", demographics)
            let age_avg = 0;
            let demo = {};
            demo = demographics;
            this.setState({ age_avg: demo["age"]["average"] });
            delete demographics["age"];
            demo_keys = Object.keys(demographics);
            demo_keys.map((item) => {
                demo_contents.push(demographics[item])
            })
            demo_contents.map((content) => {
                demo_contents_keys.push(Object.keys(content));
            })
            demo_contents.map((content) => {
                demo_contents_keys.map((itemArray, index) => {
                    itemArray.map((item) => {
                        demo_percent_total_item.push(content[item])
                    })
                    demo_percent_total.push(demo_percent_total_item)

                })
            })
            demo_keys.map((item, index) => {
                setTimeout(() => {
                    let a = document.getElementById('demographics_pie_chart' + index);
                    if (a) {
                        this.renderDemographicsPieChart(index);
                    }
                }, 150)
                setTimeout(() => {
                    let b = document.getElementById('demographics_column_chart' + index);
                    if (b) {
                        this.renderDemographicsColumnChart(index);
                    }
                }, 150)
                // setTimeout(() => {
                //     let c = document.getElementById('demographics_bar_chart' + index);
                //     if (c) {
                //         this.renderDemographicsBarChart(index);
                //     }
                // }, 150)
            })
            this.setState({
                demographics: demographics,
                demo_keys: demo_keys,
                demo_contents: demo_contents,
                demo_contents_keys: demo_contents_keys,
                demo_percent_total: demo_percent_total
            })
        }
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
                        tickCount: 0
                    },
                    y: {
                        type: 'linear',
                        tickFormat: '.2f'
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
                grouped: false,
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
                        tickCount: 0
                    },
                    y: {
                        type: 'linear',
                        tickFormat: '.2f',
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
                grouped: false,
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
                            {/* <div id={num > 1 ? "demographics_bar_chart" + index : "demographics_column_chart" + index}></div> */}
                            <div id={"demographics_column_chart" + index}></div>
                        </Col>
                    </Row>
                })
                }
            </Grid>
        )
    }
    render() {
        return (
            <PanelTabContainer id='panel-body-header-footer-both-plain-tabs' defaultActiveKey="pms">
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
                                            <div>RoadMap</div>
                                        </Tab.Pane>
                                        {this.state.demo_keys.length > 0 &&
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