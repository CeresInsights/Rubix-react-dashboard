import React from 'react';
import '../app.scss';
import { connect } from 'react-redux';
import * as subDashActions from '../../actions/subDashActions';
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
export default class CampaignsPromotionsAndLoyaltyOptimization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sma_channel: {},
            smart_channel: {},

            csr_total_market: '',
            csr_data: {},
            bdw_data: {},
            mad_data: {},
            asi_data: '',

            recommenderTypesChannel: [],
            htmlTxtChannel: [],
            spectro_labels_channel: [],
            spectro_data_channel: [],
            optimizer_labels_channel: [],
            optimizer_data_channel: [],

            recommenderTitlesChannel: [],
            bestRecommenderContentsChannel: [],
            mainTileContentsChannel: [],
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

        let sma_channel = {};
        let smart_channel = {};

        let mainTileTypesChannel = [];
        let mainTileContentsChannel = [];
        let mainTileTitlesChannel = [];

        let spectro_labels_channel = [];
        let spectro_data_channel = [];
        let spectro_labels_real_channel = [];
        let spectro_labels_real = [];
        let optimizer_data_channel = [];
        let optimizer_labels_channel = [];
        let htmlTxtChannel = [];

        let mainTileTitlesRealChannel = [];
        let mainTileContents_real_channel = [];

        let mainTileTypes = [];
        let mainTileTitlesReal = [];
        let mainTileContents = [];
        let mainTileContentsReal = [];
        let mainTileContentsRealTemp = [];

        let recommenderTypesChannel = [];
        let recommenderContentsTemp = [];
        let bestRecommenderContentsChannel = [];
        let recommenderContentsChannel = [];
        let recommenderTitlesChannel = [];

        // let mainTileTitles = [];
        let mainTileTitlesChannelDisplay = [];
        /////////////////Data Operation////////////////
        let mad = {};
        let asi = [];
        let bdw = {};
        let csr = {};
        let subChannel = {};
        let subChannelRecommender = {};

        mad = nextProps.mad;
        asi = nextProps.asi;
        bdw = nextProps.bdw;
        csr = nextProps.csr;
        subChannel = nextProps.subChannel;
        subChannelRecommender = nextProps.subChannelRecommender;
console.log("total_market_spend", csr["total_market_spend"])
        this.setState({
            mad_data: mad,
            asi_data: asi,
            bdw_data: bdw,
            sma_channel: subChannel,
            smart_channel: subChannelRecommender,
            csr_data: csr,
            csr_total_market: csr["total_market_spend"]
        })

        //Get Data For Sub-Dashboard(Campaigns App) SMA Channel and Recommender///////////////

        ///////Main Tile Types Fetch///////////////
        mainTileTypesChannel = Object.keys(subChannel);
        ////////////Main Tile Data Fetch////////////////
        mainTileTypesChannel.map((key) => {
            mainTileContentsChannel.push(subChannel[key]);
        })
        mainTileContentsChannel.map((item) => {
            mainTileTitlesChannel.push(Object.keys(item));
        })
        mainTileTitlesChannel.map((itemArray) => {
            itemArray.map((item) => {
                mainTileTitlesRealChannel.push(item);
            })
        })
        //// Recommender API for Sub-Dashboard(Campaigns App)//////////////

        ////// Recommender Type Fetch//////////////////////
        recommenderTypesChannel = Object.keys(subChannelRecommender);
        ///////////////Recommender Data Fetch(html, spectrogram, optimizer_chart)/////////////
        recommenderTypesChannel.map((key) => {
            recommenderContentsChannel.push(subChannelRecommender[key]);
            htmlTxtChannel.push(subChannelRecommender[key]["text/html"]);
        })
        recommenderContentsChannel.map((item) => {
            spectro_labels_channel.push((item["spectrogram"])["labels"]);
            spectro_data_channel.push((item["spectrogram"])["data"]);
            optimizer_labels_channel.push((item["optimizer_chart"])["labels"]);
            optimizer_data_channel.push((item["optimizer_chart"])["data"]);
        })

        ///// recommender labels array for getting best recommender data////////
        spectro_labels_channel.map((itemArray) => {
            itemArray.map((item) => {
                spectro_labels_real_channel.push(item);
            })
        })

        ////////////////Best Recommender Fetch////////////////////
        recommenderTitlesChannel = mainTileTitlesRealChannel.filter(e => !spectro_labels_real_channel.includes(e));

        //////////////////// Best Recommender Data and Main Tile Data Fetch ///////////////
        /// Remove Best Recommender in main tile data and Best Recommender Data Fetch
        mainTileContentsChannel.map((temp) => {
            recommenderTitlesChannel.map((item) => {
                recommenderContentsTemp.push(temp[item])
                // delete temp[item]
            })
        })
        // mainTileContentsChannel.map((temp) => {
        //     mainTileTitlesChannelDisplay.push(Object.keys(temp))
        // })
        recommenderContentsTemp.map((item) => {
            if (item !== undefined) {
                bestRecommenderContentsChannel.push(item)
            }
        })
        /////////Main Tile Data Fetch/////////////

        // mainTileContentsChannel.map((item) => {
        //     mainTileTitles.push(Object.keys(item))
        //     mainTileTitles.map((temp) => {
        //         temp.map((title) => {
        //             mainTileContentsRealTemp.push(item[title])
        //         })
        //     })
        // })
        // mainTileContentsRealTemp.map((item) => {
        //     if (item !== undefined) {
        //         mainTileContentsReal.push(item)
        //     }
        // })
        // console.log("mainTileContentsChannel", mainTileContentsChannel)
        this.setState({
            recommenderTypesChannel: recommenderTypesChannel,
            recommenderTitlesChannel: recommenderTitlesChannel,
            bestRecommenderContentsChannel: bestRecommenderContentsChannel,
            // // mainTileContentsReal: mainTileContentsReal
            // mainTileContentsChannel: mainTileContentsChannel,
            // mainTileTitlesChannelDisplay: mainTileTitlesChannelDisplay,

            htmlTxtChannel: htmlTxtChannel,
            spectro_labels_channel: spectro_labels_channel,
            spectro_data_channel: spectro_data_channel,
            optimizer_labels_channel: optimizer_labels_channel,
            optimizer_data_channel: optimizer_data_channel
        })

    }
    componentDidMount() {

        let temp = {};
        let apiKey = '';
        temp = this.props.login;
        apiKey = temp["key"];
        const { dispatch } = this.props;
        dispatch(execDashActions.fetchMadData(apiKey));
        dispatch(execDashActions.fetchCsrData(apiKey));
        dispatch(execDashActions.fetchBdwData(apiKey));
        dispatch(execDashActions.fetchAsiData(apiKey));

        dispatch(subDashActions.fetchChannelData(apiKey));
        dispatch(subDashActions.fetchChannelRecommenderData(apiKey));

    }
    componentDidUpdate() {
        ////////////////////////// Sub dashboard Campaigns App CPTA////////////////////////        
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
    renderSpectroLineChart = (index) => {

        (() => {
            $('#channel_spectro_line_chart' + index).html('');
            var chart = new Rubix('#channel_spectro_line_chart' + index, {
                height: 250,
                width: 350,
                title: 'Comparative',
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

            var spectrogram = chart.line_series({
                name: 'Spectrogram',
                color: '#D71F4B'
            });
            var labels = [];
            var data = [];
            var tmp_array = [];

            labels = this.state.spectro_labels_channel[index];
            data = this.state.spectro_data_channel[index];

            labels.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data[index];
                tmp_array.push(tmp);
            })
            spectrogram.addData(tmp_array);
        })();


    }
    renderOptimizerColumnChart = (index) => {
        (() => {
            $('#channel_optimizer_column_chart' + index).html('');
            var chart = new Rubix('#channel_optimizer_column_chart' + index, {
                height: 250,
                width: 350,
                title: 'Comparative',
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

            var optimizer_column = chart.column_series({
                name: 'Optimizer',
                color: '#D71F4B'
            });
            var labels = [];
            var data = [];
            var tmp_array = [];

            labels = this.state.optimizer_labels_channel[index];
            data = this.state.optimizer_data_channel[index];

            labels.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data[index];
                tmp_array.push(tmp);
            })
            optimizer_column.addData(tmp_array);
        })();


    }
    renderOptimizerBarChart = (index) => {
        (() => {
            $('#channel_optimizer_bar_chart' + index).html('');
            var chart = new Rubix('#channel_optimizer_bar_chart' + index, {
                height: 250,
                width: 350,
                title: 'Comparative',
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

            var optimizer_bar = chart.bar_series({
                name: 'Optimizer',
                color: '#D71F4B'
            });
            var labels = [];
            var data = [];
            var tmp_array = [];

            labels = this.state.optimizer_labels_channel[index];
            data = this.state.optimizer_data_channel[index];

            labels.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data[index];
                tmp_array.push(tmp);
            })
            optimizer_bar.addData(tmp_array);
        })();


    }
    renderChannel = () => {

        let recommenderTypesChannel = [];
        let recommenderTitlesChannel = [];
        let bestRecommenderContentsChannel = [];
        let htmlTxtChannel = [];
        ///////Data Type///////////////////////
        recommenderTypesChannel = this.state.recommenderTypesChannel;
        /////////Best Recommender Data///////////////
        recommenderTitlesChannel = this.state.recommenderTitlesChannel;
        bestRecommenderContentsChannel = this.state.bestRecommenderContentsChannel;
        ////////////////////Recommender Data//////////////
        htmlTxtChannel = this.state.htmlTxtChannel;

        return (
            <Grid>
                {
                    recommenderTypesChannel.map((item, index) => {
                        //////////////////////////////////Sub dashboard Campaigns App PLE//////////////////
                        let num = Math.random() * 2;
                        console.log("MATH", num)
                        return <Row key={index} className="channel_row">
                            <Col md={3}>
                                <div className="channel_recommender_tile">
                                    <p className="channel_best_recommender">Best Case</p>
                                    <p className="channel_recommender_type">{item}</p>
                                    <p className="channel_recommender_title">{recommenderTitlesChannel[index]}</p>
                                    <p className="channel_recommender_percent">{bestRecommenderContentsChannel[index]["percentage"]}</p>
                                    <p className="channel_recommender_total">{bestRecommenderContentsChannel[index]["total"]}</p>
                                </div>
                            </Col>
                            <Col md={3} className="channel_spectro_chart">
                                <div id={'channel_spectro_line_chart' + index}></div>
                            </Col>
                            <Col md={3} className="channel_optimmizer_chart">
                                <div id={num < 1 ? "channel_optimizer_column_chart" + index : "channel_optimizer_bar_chart" + index}></div>
                            </Col>
                            <Col md={3}>
                                <div className="channel_recommender_text_tile">
                                    <p className="channel_recommender_text">{htmlTxtChannel[index]}</p>
                                </div>
                            </Col>
                        </Row>
                    })
                }
            </Grid>
        )
    }
    onTabSelect = (key) => {
        let recommenderTypesChannel = [];
        recommenderTypesChannel = this.state.recommenderTypesChannel;
        if (key === 'ple') {
            recommenderTypesChannel.map((item, index) => {
                setTimeout(() => {
                    let a = document.getElementById('channel_spectro_line_chart' + index);
                    if (a) {
                        this.renderSpectroLineChart(index);
                    }
                }, 300)
                setTimeout(() => {
                    let b = document.getElementById('channel_optimizer_column_chart' + index);
                    if (b) {
                        this.renderOptimizerColumnChart(index);
                    }
                }, 300)
                setTimeout(() => {
                    let c = document.getElementById('channel_optimizer_bar_chart' + index);
                    if (c) {
                        this.renderOptimizerBarChart(index);
                    }
                }, 300)
            })
        }

    }
    render() {
        console.log("csr_total_market", this.state.csr_total_market)
        return (
            <PanelTabContainer id='campaigns_promotions_loyaltypanel' defaultActiveKey="cpta" onSelect={this.onTabSelect}>
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
                                        {(this.state.sma_channel !== null && this.state.smart_channel !== null) &&
                                            <Tab.Pane eventKey="ple">
                                                {this.renderChannel()}
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
            </PanelTabContainer>
        );
    }
}
