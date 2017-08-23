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
    constructor() {
        super();
        this.state = {
            sma_channel: {},
            smart_channel: {},

            csr_total_market: '',
            csr_data: {},
            bdw_data: {},
            mad_data: {},
            asi_data: '',
            spectro_labels_real: [],
            mainTileTitles_real: []
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

        let mainTileTypes = [];
        let mainTileContents = [];
        let mainTileTitles = [];
        // let mainPercents = [];
        // let mainTotals = [];

        let recommenderTypes = [];
        let spectro_labels = [];
        let spectro_data = [];
        let recommenderContents = [];
        let optimizer_data = [];
        let optimizer_labels = [];
        let htmlTxt = [];

        let mainTileTitles_real = [];
        let spectro_labels_real = [];
        let mainTileContents_real = [];
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
        //Get Data For Sub-Dashboard(Campaigns App) SMA Channel///////////////
        $.ajax({
            url: 'https://ceres.link/api/sub_board/sma_channel/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.setState({
                    sma_channel: data
                })
                mainTileTypes = Object.keys(data);
                console.log("mainTileTypes", mainTileTypes)

                this.setState({ mainTileTypes: mainTileTypes })

                mainTileTypes.map((key) => {
                    mainTileContents.push(data[key]);
                })
                // console.log("mainTileContent", mainTileContents)
                this.setState({
                    mainTileContents: mainTileContents
                })
            

                mainTileContents.map((item) => {
                    mainTileTitles.push(Object.keys(item));
                })
                console.log("mainTileTitles", mainTileTitles);

                mainTileTitles.map((itemArray) => {
                    itemArray.map((item) => {
                        mainTileTitles_real.push(item);
                    })
                })
                // console.log("AAAAAA", mainTileTitles_real)

                this.setState({
                    mainTileTitles_real: mainTileTitles_real
                })
                // let percentTotals = [];

                // mainTileContents.map((item) => {
                //     mainTileTitles.map((titles) => {
                //         titles.map((title) => {
                //             console.log("adsfasfd", item)
                //             console.log("qweqweqwe", titles)
                //             console.log("zxcv", title)
                //             percentTotals.push(item[title]);
                //             console.log("444444", percentTotals)
                //         });
                //     });
                // })
                // console.log("percentTotals", percentTotals)
                // percentTotals.map((item) => {
                //     mainPercents.push(item["percentage"])
                //     mainTotals.push(item["total"])
                // })
                // console.log("mainPercents", mainPercents)
                // console.log("mainTotals", mainTotals)

            }.bind(this),
            error: function (error) {
                console.log('SubChannelUpdateERROR', error);
            }
        });

        //// Recommender API for Sub-Dashboard(Campaigns App)//////////////
        $.ajax({
            url: 'https://ceres.link/api/sub_board/smart_channel/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("SubChannelSmartUpdate", data);
                this.setState({
                    smart_channel: data
                })
                recommenderTypes = Object.keys(data);
                console.log("recommenderTypes", recommenderTypes);
                this.setState({
                    recommenderTypes: recommenderTypes
                })

                recommenderTypes.map((key) => {
                    recommenderContents.push(data[key]);
                    htmlTxt.push(data[key]["text/html"]);
                })
                console.log("htmlTxt", htmlTxt)
                recommenderContents.map((item) => {
                    spectro_labels.push((item["spectrogram"])["labels"]);
                    spectro_data.push((item["spectrogram"])["data"]);
                    optimizer_labels.push((item["optimizer_chart"])["labels"]);
                    optimizer_data.push((item["optimizer_chart"])["data"]);
                })
                spectro_labels.map((itemArray) => {
                    itemArray.map((item) => {
                        spectro_labels_real.push(item);
                    })
                })
                this.setState({
                    spectro_labels_real: spectro_labels_real
                })

                console.log("spectChartLabels", spectro_labels)
                // console.log("BBBB", spectro_labels_real)
                console.log("spectChartData", spectro_data)
                console.log("optimizeChartLabels", optimizer_labels)
                console.log("optimizeChartData", optimizer_data)

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
    renderChannel = () => {

        let mainTileTitles = [];
        let spectro_labels = [];
        let mainTileContents = [];
        let mainTileContents_real = [];

        mainTileTitles = this.state.mainTileTitles_real;
        spectro_labels = this.state.spectro_labels_real;
        mainTileContents = this.state.mainTileContents;

        console.log("mainTileContents", mainTileContents)
        // console.log("LENGTHTHTHTHTHT", mainTileContents.length)

        console.log("mainTileTitles", mainTileTitles)
        console.log("spectro_labels", spectro_labels)

        let recommender = [];
        recommender = mainTileTitles.filter(e => !spectro_labels.includes(e));
        console.log("recommender", recommender)

        // mainTileContents.map((temp) => {
        //     console.log("temp", temp)
        //     recommender.map((item) => {

        //         console.log("item", item)
        //         mainTileContents_real.push(delete temp[item]);
        //     })
        // })

        console.log("mainTileContents_real", mainTileContents_real)

        console.log("adsfasdfasf", recommender)
        return (
            <div>asdfadfasdfasda</div>
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
                                        {(this.state.sma_channel !== null && this.state.smart_channel) &&
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