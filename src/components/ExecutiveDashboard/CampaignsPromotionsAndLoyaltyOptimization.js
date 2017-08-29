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

export default class CampaignsPromotionsAndLoyaltyOptimization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            csr_total_market: '',
            csr_data: {},
            bdw_data: {},
            mad_data: {},
            asi_data: '',
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

    componentDidMount() {
        let api_key = '';
        api_key = localStorage.getItem('api_key');

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
                let sma_channel_keys = [];
                let sma_channel_values = [];

                sma_channel_keys = Object.keys(data);

                sma_channel_keys.map((item) => {
                    sma_channel_values.push(data[item]["most popular"])
                })
                this.setState({
                    sma_channel_keys: sma_channel_keys,
                    sma_channel_values: sma_channel_values
                })

            }.bind(this),
            error: function (error) {
                console.log('SubDashChannelError', error);
            }
        });
    }
    renderSmaChannel = () => {
        let sma_channel_keys = [];
        let sma_channel_values = [];
        let temp_array = [];

        sma_channel_keys = this.state.sma_channel_keys;
        sma_channel_values = this.state.sma_channel_values;

        let sma_channel_tiles = [];
        for (let i = 0; i < sma_channel_keys.length; i++) {
            temp_array[i] = sma_channel_values[i];
            sma_channel_tiles.push(
                <div className="sma_channel_tile">
                    <p className="sma_channel_title">{sma_channel_keys[i]}</p>
                    <p className="sma_channel_content">{temp_array[i][0]}</p>
                    <div className="sma_channel_bottom">
                        <p className="sma_channel_percent">{temp_array[i][1]}</p>
                        <div className="sma_channel_number_area">
                            <p className="sma_channel_number">{temp_array[i][2]}</p>
                            <p>counts</p>
                        </div>
                    </div>
                </div>
            )
        }
        return sma_channel_tiles;
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

        return (
            <PanelTabContainer id='campaigns_promotions_loyaltypanel' defaultActiveKey="cpta">
                <Panel>
                    <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
                        <Grid>
                            <Row>
                                <Col xs={12} className="text-center">
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
                                        {(this.state.sma_channel_keys !== null && this.state.sma_channel_values) &&
                                            <Tab.Pane eventKey="ple">
                                                {this.renderSmaChannel()}
                                            </Tab.Pane>
                                        }
                                        <Tab.Pane eventKey="csr">
                                            <div id="csr_pie_chart"></div>
                                            <div id="csr_bar_chart"></div>
                                            <Col md={12}>
                                                <div className="csr_tile">
                                                    <p className="csr_title">Total Market Spend</p>
                                                    <p className="csr_content">{this.state.csr_total_market}</p>
                                                </div>
                                            </Col>
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