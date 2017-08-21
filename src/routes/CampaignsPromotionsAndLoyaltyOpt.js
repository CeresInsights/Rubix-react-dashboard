import React from 'react';
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
            ple_tile_types: [],
            ple_tile_titles: [],
            csr_total_market: '',
            csr_data: {},
            bdw_data: {},
            mad_data: {},
            asi_data: '',
            smart_channel: {}
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
        var api_key = localStorage.getItem('api_key');

        // MAD api
        $.ajax({
            url: 'https://ceres.link/api/app/mad/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.setState({ mad_data: data });
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
                this.setState({ asi_data: data });
            }.bind(this),
            error: function (error) {
                console.log('error', error);
            }
        });

        // BDW api
        $.ajax({
            url: 'https://ceres.link/api/app/bdw/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.setState({ bdw_data: data });
            }.bind(this),
            error: function (error) {
                console.log('error', error);
            }
        });
        //Get Data For Sub-Dashboard(Campaigns App) SMA Channel
        $.ajax({
            url: 'https://ceres.link/api/sub_board/sma_channel/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("SubChannelUpdate", data);
                let sma_channel_keys = [];
                sma_channel_keys = Object.keys(data);
                this.setState({sma_channel_keys: sma_channel_keys})

                // for(let i=0; i<sma_channel_keys.length; i++){
                    
                // }

            }.bind(this),
            error: function (error) {
                console.log('SubChannelUpdateERROR', error);
            }
        });
        //// Recommender API for Sub-Dashboard(Campaigns App)
        $.ajax({
            url: 'https://ceres.link/api/sub_board/smart_channel/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("SubChannelSmartUpdate", data);
                let smt_channel_keys = [];

                let spectrogram = [];
                let spectro_labels = [];
                let spectro_data = [];

                let optimizer_chart = [];
                let optimizer_labels = [];
                let optimizer_data = [];

                let htmlTxt = [];
                
                let temp_spectro = [];
                let temp_optimizer = [];

                smt_channel_keys = Object.keys(data);
                for (let i = 0; i < smt_channel_keys.length; i++) {
                    // htmlTxt = data[smt_channel_keys[i]]["text/html"];
                    temp_spectro[i]=data[smt_channel_keys[i]]["spectrogram"];
                    temp_optimizer[i]=data[smt_channel_keys[i]]["optimizer_chart"];

                    spectro_labels.push(temp_spectro[i]["labels"]);
                    spectro_data.push([temp_spectro[i]["data"]]);

                    optimizer_labels.push(temp_optimizer[i]["labels"]);
                    optimizer_data.push(temp_optimizer[i]["data"]);

                    spectrogram.push(data[smt_channel_keys[i]]["spectrogram"])
                    optimizer_chart.push(data[smt_channel_keys[i]]["optimizer_chart"]);
                }

                this.setState({ smart_channel: data })
            }.bind(this),
            error: function (error) {
                console.log('SubChannelSmartUpdateERROR', error);
            }
        });
        // CSR api
        $.ajax({
            url: 'https://ceres.link/api/app/csr/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.setState({ csr_total_market: data["total_market_spend"] })
                this.setState({ csr_data: data });
            }.bind(this),
            error: function (error) {
                console.log('error', error);
            }
        });
        
    }
    componentDidUpdate() {

        ////////////////////////// Sub dashboard CPTA////////////////////////        
        //BDW chart
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

            var bdw = chart.column_series({
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
        })();

        //MAD
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

            var mad = chart.column_series({
                name: 'Shopping Rate',
                color: '#D71F4B'
            });

            var tmp = this.state.mad_data;
            var tmp_array = [];
            for (var i in tmp) {
                var t = new Object;
                t.x = i;
                t.y = tmp[i];
                tmp_array.push(t);
            }
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
        // let types = [];
        // types = this.state.ple_tile_types;
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
                                            {/* {types &&
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
                                                </div>} */}
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
            </PanelTabContainer>
        );
    }
}