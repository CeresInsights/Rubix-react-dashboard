import React from 'react';
import { connect } from 'react-redux';
import * as subDashActions from '../../actions/subDashActions';
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
export default class ProductBundlesbyCustomerBehavior extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prod_pay: [],
            prod_product: [],
            smart_pay: [],
            smart_prod: [],
            recommenderTypesPay: [],
            recommenderTitlesPay: [],
            bestRecommenderContentsPay: [],
            htmlTxtPay: [],
            spectro_labels_pay: [],
            spectro_data_pay: [],
            optimizer_labels_pay: [],
            optimizer_data_pay: [],
            recommenderTypesProd: [],
            recommenderTitlesProd: [],
            bestRecommenderContentsProd: [],
            htmlTxtProd: [],
            spectro_labels_prod: [],
            spectro_data_prod: [],
            optimizer_labels_prod: [],
            optimizer_data_prod: [],
        };
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
        let mainTileTypesPay = [];
        let mainTileTypesProd = [];

        let mainTileContentsPay = [];
        let mainTileContentsProd = [];

        let mainTileTitlesPay = [];
        let mainTileTitlesProd = [];

        let mainTileTitlesRealPay = [];
        let mainTileTitlesRealProd = [];

        let mainTileContentsRealProd = [];
        let mainTileContentsRealPay = [];

        let recommenderTypesPay = [];
        let recommenderTypesProd = [];

        let recommenderTitlesPay = [];
        let recommenderTitlesProd = [];

        let spectro_labels_pay = [];
        let spectro_labels_prod = [];

        let spectro_data_pay = [];
        let spectro_data_prod = [];

        let recommenderContentsPay = [];
        let bestRecommenderContentsPay = [];
        let recommenderContentsProd = [];
        let bestRecommenderContentsProd = [];

        let recommenderContentsTempPay = [];
        let recommenderContentsTempProd = [];

        let mainTileContentsRealTempPay = [];
        let mainTileContentsRealTempProd = [];

        let optimizer_data_pay = [];
        let optimizer_data_prod = [];

        let optimizer_labels_pay = [];
        let optimizer_labels_prod = [];

        let htmlTxtPay = [];
        let htmlTxtProd = [];

        let spectro_labels_real_pay = [];
        let spectro_labels_real_prod = [];

        let spectro_data_real_pay = [];
        let spectro_data_real_prod = [];

        let mainTileTitlesPayment = [];
        let mainTileTitlesProduct = [];
        /////////////////Data Operation//////////////////////
        let subProdPay = {};
        let subProdPayRecommender = {};
        let subProdProduct = {};
        let subProdProductRecommender = {};

        subProdPay = nextProps.subProdPay;
        subProdPayRecommender = nextProps.subProdPayRecommender;
        subProdProduct = nextProps.subProdProduct;
        subProdProductRecommender = nextProps.subProdProductRecommender;

        if (Object.keys(subProdPay).length > 0 && Object.keys(subProdPayRecommender).length > 0) {
            this.setState({
                prod_pay: subProdPay,
                smart_pay: subProdPayRecommender,
                prod_product: subProdProduct,
                smart_prod: subProdProductRecommender
            })
            //Get Data For Sub-Dashboard(Product App) Payment Preferences

            ///////Main Tile Types Fetch///////////////
            mainTileTypesPay = Object.keys(subProdPay);
            ////////////Main Tile Data Fetch////////////////
            mainTileTypesPay.map((key, index) => {
                mainTileContentsPay.push(subProdPay[key]);
            })

            mainTileContentsPay.map((item, index) => {
                mainTileTitlesPay.push(Object.keys(item));
            })

            mainTileTitlesPay.map((itemArray, index) => {
                itemArray.map((item, index) => {
                    mainTileTitlesRealPay.push(item);
                })
            })

            //// Recommender API for Sub-Dashboard(Product App Payment Preferences)//////////////

            ////// Recommender Type Fetch//////////////////////
            recommenderTypesPay = Object.keys(subProdPayRecommender);
            // ///////////////Recommender Data Fetch(html, spectrogram, optimizer_chart)/////////////
            recommenderTypesPay.map((key, index) => {
                recommenderContentsPay.push(subProdPayRecommender[key]);
                htmlTxtPay.push(subProdPayRecommender[key]["text/html"]);
            })

            recommenderContentsPay.map((item, index) => {
                spectro_labels_pay.push((item["spectrogram"])["labels"]);
                spectro_data_pay.push((item["spectrogram"])["data"]);
                optimizer_labels_pay.push((item["optimizer_chart"])["labels"]);
                optimizer_data_pay.push((item["optimizer_chart"])["data"]);
            })

            // ///// recommender labels array for getting best recommender data////////
            spectro_labels_pay.map((itemArray, index) => {
                itemArray.map((item, index) => {
                    spectro_labels_real_pay.push(item);
                })
            })

            // // ////////////////Best Recommender Fetch////////////////////
            recommenderTitlesPay = mainTileTitlesRealPay.filter(e => !spectro_labels_real_pay.includes(e));

            // // //////////////////// Best Recommender Data and Main Tile Data Fetch ///////////////
            // // /// Remove Best Recommender in main tile data and Best Recommender Data Fetch
            mainTileContentsPay.map((temp, index) => {
                recommenderTitlesPay.map((item, index) => {
                    recommenderContentsTempPay.push(temp[item])
                })
            })
            recommenderContentsTempPay.map((item) => {
                if (item !== undefined) {
                    bestRecommenderContentsPay.push(item)
                }
            })
            recommenderTypesPay.map((item, index) => {
                setTimeout(() => {
                    let a = document.getElementById('pay_spectro_line_chart' + index);
                    if (a) {
                        this.renderSpectroLineChartPay(index);
                    }
                }, 150)
                setTimeout(() => {
                    let b = document.getElementById('pay_optimizer_column_chart' + index);
                    if (b) {
                        this.renderOptimizerColumnChartPay(index);
                    }
                }, 150)
                setTimeout(() => {
                    let c = document.getElementById('pay_optimizer_bar_chart' + index);
                    if (c) {
                        this.renderOptimizerBarChartPay(index);
                    }
                }, 150)
            })
            this.setState({
                recommenderTypesPay: recommenderTypesPay,
                recommenderTitlesPay: recommenderTitlesPay,
                bestRecommenderContentsPay: bestRecommenderContentsPay,

                htmlTxtPay: htmlTxtPay,
                spectro_labels_pay: spectro_labels_pay,
                spectro_data_pay: spectro_data_pay,
                optimizer_labels_pay: optimizer_labels_pay,
                optimizer_data_pay: optimizer_data_pay
            })
        }
        if (Object.keys(subProdProduct).length > 0 && Object.keys(subProdProductRecommender).length > 0) {
            this.setState({
                prod_product: subProdProduct,
                smart_prod: subProdProductRecommender
            })
            //Get Data For Sub-Dashboard(Product App) Product Appetite

            ///////Main Tile Types Fetch///////////////
            mainTileTypesProd = Object.keys(subProdProduct);
            ////////////Main Tile Data Fetch////////////////
            mainTileTypesProd.map((key, index) => {
                mainTileContentsProd.push(subProdProduct[key]);
            })

            mainTileContentsProd.map((item, index) => {
                mainTileTitlesProd.push(Object.keys(item));
            })

            mainTileTitlesProd.map((itemArray, index) => {
                itemArray.map((item) => {
                    mainTileTitlesRealProd.push(item);
                })
            })
            //// Recommender API for Sub-Dashboard(Product App) Product Appetite//////////////

            ////// Recommender Type Fetch//////////////////////
            recommenderTypesProd = Object.keys(subProdProductRecommender);
            ///////////////Recommender Data Fetch(html, spectrogram, optimizer_chart)/////////////
            recommenderTypesProd.map((key, index) => {
                recommenderContentsProd.push(subProdProductRecommender[key]);
                htmlTxtProd.push(subProdProductRecommender[key]["text/html"]);
            })
            recommenderContentsProd.map((item, index) => {
                spectro_labels_prod.push((item["spectrogram"])["labels"]);
                spectro_data_prod.push((item["spectrogram"])["data"]);
                optimizer_labels_prod.push((item["optimizer_chart"])["labels"]);
                optimizer_data_prod.push((item["optimizer_chart"])["data"]);
            })
            ///// recommender labels array for getting best recommender data////////
            spectro_labels_prod.map((itemArray, index) => {
                itemArray.map((item, index) => {
                    spectro_labels_real_prod.push(item);
                })
            })

            ////////////////Best Recommender Fetch////////////////////
            recommenderTitlesProd = mainTileTitlesRealProd.filter(e => !spectro_labels_real_prod.includes(e));

            //////////////////// Best Recommender Data and Main Tile Data Fetch ///////////////
            /// Remove Best Recommender in main tile data and Best Recommender Data Fetch
            mainTileContentsProd.map((temp, index) => {
                recommenderTitlesProd.map((item, index) => {
                    recommenderContentsTempProd.push(temp[item])
                })
            })
            recommenderContentsTempProd.map((item, index) => {
                if (item !== undefined) {
                    bestRecommenderContentsProd.push(item)
                }
            })
            recommenderTypesProd.map((item, index) => {
                setTimeout(() => {
                    let a = document.getElementById('prod_spectro_line_chart' + index);
                    if (a) {
                        this.renderSpectroLineChartProd(index);
                    }
                }, 150)
                setTimeout(() => {
                    let b = document.getElementById('prod_optimizer_column_chart' + index);
                    if (b) {
                        this.renderOptimizerColumnChartProd(index);
                    }
                }, 150)
                setTimeout(() => {
                    let c = document.getElementById('prod_optimizer_bar_chart' + index);
                    if (c) {
                        this.renderOptimizerBarChartProd(index);
                    }
                }, 150)
            })
            this.setState({
                recommenderTypesProd: recommenderTypesProd,
                recommenderTitlesProd: recommenderTitlesProd,
                bestRecommenderContentsProd: bestRecommenderContentsProd,

                htmlTxtProd: htmlTxtProd,
                spectro_labels_prod: spectro_labels_prod,
                spectro_data_prod: spectro_data_prod,
                optimizer_labels_prod: optimizer_labels_prod,
                optimizer_data_prod: optimizer_data_prod
            })
        }
    }
    renderSpectroLineChartPay = (index) => {

        (() => {
            $('#pay_spectro_line_chart' + index).html('');
            var chart = new Rubix('#pay_spectro_line_chart' + index, {
                height: 200,
                title: 'Comparative',
                titleColor: '#D71F4B',
                axis: {
                    x: {
                        type: 'ordinal',
                        tickCount: 0,
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

            var spectrogram = chart.line_series({
                name: 'Spectrogram',
                color: '#D71F4B'
            });
            var labels = [];
            var data = [];
            var tmp_array = [];

            labels = this.state.spectro_labels_pay[index];
            data = this.state.spectro_data_pay[index];

            labels.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data[index];
                tmp_array.push(tmp);
            })
            spectrogram.addData(tmp_array);
        })();


    }
    renderSpectroLineChartProd = (index) => {

        (() => {
            $('#prod_spectro_line_chart' + index).html('');
            var chart = new Rubix('#prod_spectro_line_chart' + index, {
                height: 200,
                title: 'Comparative',
                titleColor: '#D71F4B',
                axis: {
                    x: {
                        type: 'ordinal',
                        tickCount: 0,
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
            var spectrogram = chart.line_series({
                name: 'Spectrogram',
                color: '#D71F4B'
            });
            var labels = [];
            var data = [];
            var tmp_array = [];

            labels = this.state.spectro_labels_prod[index];
            data = this.state.spectro_data_prod[index];

            labels.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data[index];
                tmp_array.push(tmp);
            })
            spectrogram.addData(tmp_array);
        })();


    }
    renderOptimizerColumnChartPay = (index) => {
        (() => {
            $('#pay_optimizer_column_chart' + index).html('');
            var chart = new Rubix('#pay_optimizer_column_chart' + index, {
                height: 200,
                title: 'Comparative',
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

            var optimizer_column = chart.column_series({
                name: 'Optimizer',
                color: '#D71F4B'
            });
            var labels = [];
            var data = [];
            var tmp_array = [];

            labels = this.state.optimizer_labels_pay[index];
            data = this.state.optimizer_data_pay[index];

            labels.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data[index];
                tmp_array.push(tmp);
            })
            optimizer_column.addData(tmp_array);
        })();
    }
    renderOptimizerColumnChartProd = (index) => {
        (() => {
            $('#prod_optimizer_column_chart' + index).html('');
            var chart = new Rubix('#prod_optimizer_column_chart' + index, {
                height: 200,
                title: 'Comparative',
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

            var optimizer_column = chart.column_series({
                name: 'Optimizer',
                color: '#D71F4B'
            });
            var labels = [];
            var data = [];
            var tmp_array = [];

            labels = this.state.optimizer_labels_prod[index];
            data = this.state.optimizer_data_prod[index];

            labels.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data[index];
                tmp_array.push(tmp);
            })
            optimizer_column.addData(tmp_array);
        })();
    }
    renderOptimizerBarChartPay = (index) => {
        (() => {
            $('#pay_optimizer_bar_chart' + index).html('');
            var chart = new Rubix('#pay_optimizer_bar_chart' + index, {
                height: 200,
                title: 'Comparative',
                titleColor: '#D71F4B',
                axis: {
                    x: {
                        type: 'ordinal',
                        tickCount: 0
                    },
                    y: {
                        type: 'linear',
                        tickFormat: '.2f',
                        tickCount: 0
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

            var optimizer_bar = chart.bar_series({
                name: 'Optimizer',
                color: '#D71F4B'
            });
            var labels = [];
            var data = [];
            var tmp_array = [];

            labels = this.state.optimizer_labels_pay[index];
            data = this.state.optimizer_data_pay[index];

            labels.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data[index];
                tmp_array.push(tmp);
            })
            optimizer_bar.addData(tmp_array);
        })();


    }
    renderOptimizerBarChartProd = (index) => {
        (() => {
            $('#prod_optimizer_bar_chart' + index).html('');
            var chart = new Rubix('#prod_optimizer_bar_chart' + index, {
                height: 200,
                title: 'Comparative',
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

            var optimizer_bar = chart.bar_series({
                name: 'Optimizer',
                color: '#D71F4B'
            });
            var labels = [];
            var data = [];
            var tmp_array = [];

            labels = this.state.optimizer_labels_prod[index];
            data = this.state.optimizer_data_prod[index];

            labels.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data[index];
                tmp_array.push(tmp);
            })
            optimizer_bar.addData(tmp_array);
        })();


    }
    renderPay = () => {

        let recommenderTypesPay = [];
        let recommenderTitlesPay = [];
        let bestRecommenderContentsPay = [];
        let htmlTxtPay = [];
        ///////Data Type///////////////////////
        recommenderTypesPay = this.state.recommenderTypesPay;
        /////////Best Recommender Data///////////////
        recommenderTitlesPay = this.state.recommenderTitlesPay;
        bestRecommenderContentsPay = this.state.bestRecommenderContentsPay;
        ////////////////////Recommender Data//////////////
        htmlTxtPay = this.state.htmlTxtPay;

        return (
            <Grid>
                {
                    recommenderTypesPay.map((item, index) => {
                        //////////////////////////////////Sub dashboard Campaigns App PLE//////////////////
                        let num = Math.random() * 2;
                        return <Row key={index} className="pay_row">
                            <Col md={2} className="pay_recommender_tile_area">
                                <div className="pay_recommender_tile">
                                    <p className="pay_best_recommender">Best Case</p>
                                    <p className="pay_recommender_type">{item}</p>
                                    <p className="pay_recommender_title">{recommenderTitlesPay[index]}</p>
                                    <p className="pay_recommender_percent">{bestRecommenderContentsPay[index]["percentage"]}</p>
                                    <p className="pay_recommender_total">{bestRecommenderContentsPay[index]["total"]}</p>
                                </div>
                            </Col>
                            <Col md={4} className="pay_spectro_chart">
                                <div id={'pay_spectro_line_chart' + index} className="pay_spectro_line_chart"></div>
                            </Col>
                            <Col md={4} className="pay_optimmizer_chart">
                                {/* <div id={num < 1 ? "pay_optimizer_column_chart" + index : "pay_optimizer_bar_chart" + index}></div> */}
                                <div id={"pay_optimizer_bar_chart" + index}></div>
                            </Col>
                            <Col md={2} className="pay_recommender_text_tile_area">
                                <div className="pay_recommender_text_tile">
                                    <p className="pay_recommender_text">{htmlTxtPay[index]}</p>
                                </div>
                            </Col>
                        </Row>
                    })
                }
            </Grid>
        )
    }
    renderProd = () => {

        let recommenderTypesProd = [];
        let recommenderTitlesProd = [];
        let bestRecommenderContentsProd = [];
        let htmlTxtProd = [];
        ///////Data Type///////////////////////
        recommenderTypesProd = this.state.recommenderTypesProd;
        /////////Best Recommender Data///////////////
        recommenderTitlesProd = this.state.recommenderTitlesProd;
        bestRecommenderContentsProd = this.state.bestRecommenderContentsProd;

        ////////////////////Recommender Data//////////////
        htmlTxtProd = this.state.htmlTxtProd;

        return (
            <Grid>
                {
                    recommenderTypesProd.map((item, index) => {
                        //////////////////////////////////Sub dashboard Campaigns App PLE//////////////////
                        let num = Math.random() * 2;
                        console.log("MATH", num)
                        return <Row key={index} className="prod_row">
                            <Col md={2} className="prod_recommender_tile_area">
                                <div className="prod_recommender_tile">
                                    <p className="prod_best_recommender">Best Case</p>
                                    <p className="prod_recommender_type">{item}</p>
                                    <p className="prod_recommender_title">{recommenderTitlesProd[index]}</p>
                                    <p className="prod_recommender_percent">{bestRecommenderContentsProd[index]["percentage"]}</p>
                                    <p className="prod_recommender_total">{bestRecommenderContentsProd[index]["total"]}</p>
                                </div>
                            </Col>
                            <Col md={4} className="prod_spectro_chart_area">
                                <div id={'prod_spectro_line_chart' + index}></div>
                            </Col>
                            <Col md={4} className="prod_optimmizer_chart_area">
                                {/* <div id={num < 1 ? "prod_optimizer_column_chart" + index : "prod_optimizer_bar_chart" + index}></div> */}
                                <div id={"prod_optimizer_column_chart" + index}></div>
                            </Col>
                            <Col md={2} className="prod_recommender_text_tile_area">
                                <div className="prod_recommender_text_tile">
                                    <p className="prod_recommender_text">{htmlTxtProd[index]}</p>
                                </div>
                            </Col>
                        </Row>
                    })
                }
            </Grid>
        )
    }
    render() {
        return (
            <PanelTabContainer id='panel-body-header-footer-both-plain-tabs' defaultActiveKey="cpp">
                <Panel>
                    <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
                        <Grid>
                            <Row>
                                <Col xs={12} className="text-center">
                                    <h4>Product Bundles by Consumer Behavior</h4>
                                </Col>
                            </Row>
                        </Grid>
                        <Nav bsStyle="tabs" className='plain'>
                            <NavItem eventKey="cpp">
                                Customer Payment Preferences
                            </NavItem>
                            <NavItem eventKey="cpa">
                                Customer Product Appetite
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content>
                                        {(this.state.prod_pay !== null && this.state.smart_pay !== null) &&
                                            <Tab.Pane eventKey="cpp">
                                                {this.renderPay()}
                                            </Tab.Pane>
                                        }
                                        {(this.state.prod_product !== null && this.state.smart_prod !== null) &&
                                            <Tab.Pane eventKey="cpa">
                                                {this.renderProd()}
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