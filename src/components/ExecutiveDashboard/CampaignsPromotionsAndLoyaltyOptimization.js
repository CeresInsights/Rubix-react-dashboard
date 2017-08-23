import React from 'react';
import { Link, withRouter } from 'react-router';
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

// @withRouter
export default class CampaignsPromotionsAndLoyaltyOptimization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ple_tile_types: [],
            ple_tile_titles: [],
            csr_total_market: '',
            csr_data: {},
            bdw_data: {},
            mad_data: {},
            asi_data: '',
            ple_tile_title1: '',
            ple_tile_percent1: '',
            ple_tile_number1: '',
            ple_tile_title2: '',
            ple_tile_percent2: '',
            ple_tile_number2: ''
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
    getPath(path) {
        var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
        path = `/${dir}/${path}`;
        return path;
    }

    componentDidMount() {
        let api_key = '';
        api_key = localStorage.getItem('api_key');
        console.log("EXEC DASH KEY", api_key);

        // CSR api
        $.ajax({
            url: 'https://ceres.link/api/app/csr/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("CSR data", data);
                this.setState({ csr_total_market: data["total_market_spend"] })
                this.setState({ csr_data: data });
            }.bind(this),
            error: function (error) {
                console.log('error', error);
            }
        });
        /////////////////////CPTA APIS////////////////
        // BWD api
        $.ajax({
            url: 'https://ceres.link/api/app/bdw/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("BDW data", data);
                this.setState({ 'bdw_data': data });
            }.bind(this),
            error: function (error) {
                console.log('bdw_data error', error);
            }
        });

        //MAD api
        $.ajax({
            url: 'https://ceres.link/api/app/mad/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("MAD data", data)
                this.setState({ 'mad_data': data });
            }.bind(this),
            error: function (error) {
                console.log('error', error);
            }
        });

        // ASI api
        $.ajax({
            url: 'https://ceres.link/api/app/asi/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("ADI data", data)
                this.setState({ 'asi_data': data });
            }.bind(this),
            error: function (error) {
                console.log('asi_data error', error);
            }
        });
        /////////////////PLE API////////////////////
        //Get Data For Executive Dashboard SMA Channel 
        $.ajax({
            url: 'https://ceres.link/api/exec_board/sma_channel/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("ExecChannel", data);

                let ple_tile_types = [];
                let ple_tile_title = [];
                let ple_tile_titles = [];

                let ple_tile_title1 = '';
                let ple_tile_percent1 = '';
                let ple_tile_number1 = '';
                let ple_tile_title2 = '';
                let ple_tile_percent2 = '';
                let ple_tile_number2 = ''

                ple_tile_types = Object.keys(data);
                this.setState({ ple_tile_types: ple_tile_types });

                for (let i = 0; i < ple_tile_types.length; i++) {
                    ple_tile_title = data[ple_tile_types[i]]["most popular"];
                    ple_tile_titles.push(ple_tile_title);
                }
                this.setState({ ple_tile_title1: ple_tile_titles[0][0] });
                this.setState({ ple_tile_percent1: ple_tile_titles[0][1] });
                this.setState({ ple_tile_number1: ple_tile_titles[0][2] });
                this.setState({ ple_tile_title2: ple_tile_titles[1][0] });
                this.setState({ ple_tile_percent2: ple_tile_titles[1][1] });
                this.setState({ ple_tile_number2: ple_tile_titles[1][2] });

            }.bind(this),
            error: function (error) {
                console.log('SubDashChannelError', error);
            }
        });
    }
    componentDidUpdate() {

        ////////////////////// CPTA chart /////////////////
        //////////BDW chart//////////
        (() => {
            $('#bdw_chart').html('');
            var bdw_chart = new Rubix('#bdw_chart', {
                height: 100,
                title: 'Customer Purchase Time Analysis',
                subtitle: 'Best Day Of Week',
                titleColor: '#D71F4B',
                subtitleColor: '#D71F4B',
                axis: {
                    x: {
                        type: 'ordinal',
                    },
                    y: {
                        type: 'linear',
                        tickFormat: 'd',
                        tickCount: 5
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

            var bdw = bdw_chart.column_series({
                name: 'Shopping Rate',
                color: '#D71F4B'
            });

            var tmp = this.state.bdw_data;
            var tmp_array = [];
            for (var i in tmp) {
                var t = new Object;
                t.x = i;
                t.y = tmp[i];
                tmp_array.push(t);
            }
            bdw.addData(tmp_array);

            //MAD chart
            $('#mad_chart').html('');
            var mad_chart = new Rubix('#mad_chart', {
                height: 100,
                title: 'Customer Purchase Time Analysis',
                subtitle: 'Monthly Activity Distribution',
                titleColor: '#D71F4B',
                subtitleColor: '#D71F4B',
                axis: {
                    x: {
                        type: 'ordinal',
                    },
                    y: {
                        type: 'linear',
                        tickFormat: 'd',
                        tickCount: 5
                    }
                },
                // tooltip: {
                //     color: '#D71F4B',
                //     format: {
                //         y: '.0f'
                //     }
                // },
                margin: {
                    left: 50
                },
                grouped: false,
                show_markers: true
            });

            var mad = mad_chart.column_series({
                name: 'Shopping Rate',
                color: '#D71F4B'
            });

            tmp = this.state.mad_data;
            tmp_array = [];
            for (var i in tmp) {
                var t = new Object;
                t.x = i;
                t.y = tmp[i];
                tmp_array.push(t);
            }
            // console.log("MAD ARRARY", tmp_array)
            mad.addData(tmp_array);

            ///////////////// CSR Charts/////////////////////
            /////////////CSR Pie Chart//////////////
            var color_array = ['#8064A2', '#C0504D', '#4F81BD', '#9BBB59'];
            $('#csr_pie_chart').html('');
            var pie = Rubix.Pie('#csr_pie_chart', {
                title: 'Market Share By CSR Tier',
                height: 300
            });

            var csr_data = this.state.csr_data;
            delete csr_data["total_market_spend"];
            var tmp_array = [];
            for (var i in csr_data) {
                var t = new Object;
                t.name = i;
                t.value = csr_data[i]["market_share_%"];
                t.color = color_array[this.getObjectKeyIndex(csr_data, i)];
                tmp_array.push(t);
            }

            pie.addData(tmp_array);


            ///////////CSR Bar Chart/////////////
            $('#csr_bar_chart').html('');
            var csr_bar_chart = new Rubix('#csr_bar_chart', {
                height: 300,
                title: 'CSR Tiers By High/Low Ranges',
                titleColor: '#D71F4B',
                axis: {
                    x: {
                        type: 'ordinal',
                    },
                    y: {
                        type: 'linear',
                        tickFormat: 'd',
                        tickCount: 5
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
                grouped: true,
                show_markers: true
            });

            var high_bar = csr_bar_chart.column_series({
                name: 'High',
                color: '#4F81BD'
            });
            var low_bar = csr_bar_chart.column_series({
                name: 'Low',
                color: '#C0504D',
            })

            var csr_data = this.state.csr_data;
            delete csr_data["total_market_spend"];

            let high_array = [];
            let low_array = [];

            for (var i in csr_data) {
                var high = new Object;
                var low = new Object;
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
    render() {
        let types = [];
        types = this.state.ple_tile_types;
        return (
            <PanelTabContainer id='campaigns_promotions_loyaltypanel' defaultActiveKey="cpta">
                <Panel>
                    <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
                        <Grid>
                            <Row>
                                <Col xs={12} className="text-center">
                                    {/* <Link className="title_link" to={::this.getPath('sub_campaigns')}><h4>Campaigns,Promotions, and Loyalty Optimization </h4></Link> */}
                                    <Link className="title_link" to="/ltr/sub_campaigns"><h4>Campaigns,Promotions, and Loyalty Optimization </h4></Link>
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
                            <NavItem eventKey="csr">
                                CSR
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
                                            <div id="asi_area" >
                                                <p className="cptaTxt">Customer Purchase Time Analysis</p>
                                                <p className="asiTxt">Average Shopping Interval</p>
                                                <div className="asi_tile">
                                                    <p className="daysTxt">Days</p>
                                                    <p className="daysNumTxt">{this.state.asi_data}</p>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="ple">
                                            {types &&
                                                <div>
                                                    <div className="tile_area1">
                                                        <div className="ple_tile1">
                                                            <p className="ple_type1">{types[0]}</p>
                                                            <p className="ple_title1">{this.state.ple_tile_title1}</p>
                                                            <p className="ple_percentage1">{this.state.ple_tile_percent1}</p>
                                                            <p className="ple_number1">{this.state.ple_tile_number1} mentions</p>
                                                        </div>
                                                    </div>
                                                    <div className="tile_area2">
                                                        <div className="ple_tile2">
                                                            <p className="ple_type2">{types[1]}</p>
                                                            <p className="ple_title2">{this.state.ple_tile_title2}</p>
                                                            <p className="ple_percentage2">{this.state.ple_tile_percent2}</p>
                                                            <p className="ple_number2">{this.state.ple_tile_number1} mentions</p>
                                                        </div>
                                                    </div>
                                                </div>}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="csr">
                                            <div id="csr_pie_chart"></div>
                                            <div id="csr_bar_chart"></div>
                                            <div className="csr_tile">
                                                <p className="csr_title">Total Market Spend</p>
                                                <p className="csr_content">{this.state.csr_total_market}</p>
                                            </div>
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