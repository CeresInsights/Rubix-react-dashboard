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

            recommenderTitles: [],
            recommenderContents: [],
            mainTileContentsChannel: []

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

        let sma_channel = {};
        let smart_channel = {};

        let mainTileTypesChannel = [];
        let mainTileContentsChannel = [];
        let mainTileTitlesChannel = [];

        let recommenderTypesChannel = [];
        let spectro_labels_channel = [];
        let spectro_data_channel = [];
        let recommenderContentsChannel = [];
        let optimizer_data_channel = [];
        let optimizer_labels_channel = [];
        let htmlTxtChannel = [];

        let mainTileTitlesRealChannel = [];
        let spectro_labels_real_channel = [];
        let mainTileContents_real_channel = [];

        let mainTileTypes = [];
        let mainTileTitlesReal = [];
        let spectro_labels_real = [];
        let mainTileContents = [];

        let recommenderContentsTemp = [];
        let recommenderContents = [];
        let recommenderTitles = [];
        let mainTileContentsReal = [];
        let mainTileContentsRealTemp = [];

        // let mainTileTitles = [];
        let mainTileTitlesChannelDisplay = [];

        /////////////////////////////// CPTA Apis/////////////////////////////////
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

        //Get Data For Sub-Dashboard(Campaigns App) SMA Channel and Recommender///////////////
        $.ajax({
            url: 'https://ceres.link/api/sub_board/sma_channel/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.setState({
                    sma_channel: data
                })
                ///////Main Tile Types Fetch///////////////
                mainTileTypesChannel = Object.keys(data);
                ////////////Main Tile Data Fetch////////////////
                mainTileTypesChannel.map((key) => {
                    mainTileContentsChannel.push(data[key]);
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
                $.ajax({
                    url: 'https://ceres.link/api/sub_board/smart_channel/api_key=' + api_key,
                    dataType: 'json',
                    type: 'GET',
                    success: function (data) {
                        this.setState({
                            smart_channel: data
                        })
                        ////// Recommender Type Fetch//////////////////////
                        recommenderTypesChannel = Object.keys(data);
                        ///////////////Recommender Data Fetch(html, spectrogram, optimizer_chart)/////////////
                        recommenderTypesChannel.map((key) => {
                            recommenderContentsChannel.push(data[key]);
                            htmlTxtChannel.push(data[key]["text/html"]);
                        })
                        recommenderContentsChannel.map((item) => {
                            spectro_labels_channel.push((item["spectrogram"])["labels"]);
                            spectro_data_channel.push((item["spectrogram"])["data"]);
                            optimizer_labels_channel.push((item["optimizer_chart"])["labels"]);
                            optimizer_data_channel.push((item["optimizer_chart"])["data"]);
                        })

                        // this.setState({
                        //     htmlTxtChannel: htmlTxtChannel,
                        //     spectro_labels_channel: spectro_labels_channel,
                        //     spectro_data_channel: spectro_data_channel,
                        //     optimizer_labels_channel: optimizer_labels_channel,
                        //     optimizer_data_channel: optimizer_data_channel
                        // })
                        ///// recommender labels array for getting best recommender data////////
                        spectro_labels_channel.map((itemArray) => {
                            itemArray.map((item) => {
                                spectro_labels_real_channel.push(item);
                            })
                        })

                        ////////////////Best Recommender Fetch////////////////////
                        recommenderTitles = mainTileTitlesRealChannel.filter(e => !spectro_labels_real_channel.includes(e));

                        //////////////////// Best Recommender Data and Main Tile Data Fetch ///////////////
                        /// Remove Best Recommender in main tile data and Best Recommender Data Fetch
                        mainTileContentsChannel.map((temp) => {
                            recommenderTitles.map((item) => {
                                recommenderContentsTemp.push(temp[item])
                                delete temp[item]
                            })
                        })
                        mainTileContentsChannel.map((temp) => {
                            mainTileTitlesChannelDisplay.push(Object.keys(temp))
                        })
                        // console.log("Wwwwwwwwwwwwwwwwww", mainTileTitlesChannelDisplay)
                        recommenderContentsTemp.map((item) => {
                            if (item !== undefined) {
                                recommenderContents.push(item)
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
                            recommenderTitles: recommenderTitles,
                            recommenderContents: recommenderContents,
                            // mainTileContentsReal: mainTileContentsReal
                            mainTileContentsChannel: mainTileContentsChannel,
                            mainTileTitlesChannelDisplay: mainTileTitlesChannelDisplay,

                            htmlTxtChannel: htmlTxtChannel,
                            spectro_labels_channel: spectro_labels_channel,
                            spectro_data_channel: spectro_data_channel,
                            optimizer_labels_channel: optimizer_labels_channel,
                            optimizer_data_channel: optimizer_data_channel
                        })

                    }.bind(this),
                    error: function (error) {
                        console.log('SubChannelSmartUpdateERROR', error);
                    }
                });

            }.bind(this),
            error: function (error) {
                console.log('SubChannelUpdateERROR', error);
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
    renderChannel = () => {

        let recommenderTypesChannel = [];
        let recommenderTitles = [];
        let recommenderContents = [];
        // let mainTileContentsReal = [];
        let mainTileContentsChannel = [];
        let mainTileTitlesChannelDisplay = [];

        let htmlTxtChannel = [];
        let spectro_labels_channel = [];
        let spectro_data_channel = [];
        let optimizer_labels_channel = [];
        let optimizer_data_channel = [];

        ///////Data Type///////////////////////
        recommenderTypesChannel = this.state.recommenderTypesChannel;

        /////////Best Recommender Data///////////////
        recommenderTitles = this.state.recommenderTitles;
        recommenderContents = this.state.recommenderContents;

        //////////Main Tile Data///////////////////////////
        // mainTileContentsReal = this.state.mainTileContentsReal;
        mainTileContentsChannel = this.state.mainTileContentsChannel;
        mainTileTitlesChannelDisplay = this.state.mainTileTitlesChannelDisplay;
        ////////////////////Recommender Data//////////////
        htmlTxtChannel = this.state.htmlTxtChannel;
        spectro_labels_channel = this.state.spectro_labels_channel;
        spectro_data_channel = this.state.spectro_data_channel;
        optimizer_labels_channel = this.state.optimizer_labels_channel;
        optimizer_data_channel = this.state.optimizer_data_channel;

        console.log("recommenderTypesChannel", recommenderTypesChannel)
        console.log("recommenderTitles", recommenderTitles)
        console.log("recommenderContents", recommenderContents)
        // console.log("mainTileContentsReal", mainTileContentsReal)
        console.log("mainTileTitlesChannelDisplay", mainTileTitlesChannelDisplay)
        console.log("mainTileContentsChannel", mainTileContentsChannel)
        console.log("htmlTxtChannel", htmlTxtChannel)
        console.log("spectro_labels_channel", spectro_labels_channel)
        console.log("spectro_data_channel", spectro_data_channel)
        console.log("optimizer_labels_channel", optimizer_labels_channel)
        console.log("optimizer_data_channel", optimizer_data_channel)

        let channelRecommenders = [];
        return (
            <Grid>
                <Row className="sub_channel">
                    {recommenderTypesChannel.map((item, index) => {
                        channelRecommenders.push(
                            <div className="channel_recommender_tile">
                                <p className="channel_best_recommender">Best Case</p>
                                <p className="channel_recommender_type">{item}</p>
                                <p className="channel_recommender_title">{recommenderTitles[index]}</p>
                                <p className="channel_recommender_percent">{recommenderContents[index]["percentage"]}</p>
                                <p className="channel_recommender_total">{recommenderContents[index]["total"]}</p>
                            </div>
                        )
                       
                    })
                    }
                    {channelRecommenders}
                </Row>
            </Grid>
        )

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
