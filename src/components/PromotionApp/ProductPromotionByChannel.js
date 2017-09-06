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
export default class ProductPromotionByChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sma_product: {},
            smart_product: {},
            dsa: {},
            smart_dsa: {},
            recommenderTypesDsa: [],
            recommenderTitlesDsa: [],
            bestRecommenderContentsDsa: [],
            htmlTxtDsa: [],
            spectro_labels_dsa: [],
            spectro_data_dsa: [],
            optimizer_labels_dsa: [],
            optimizer_data_dsa: [],
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
        let mainTileTypesDsa = [];
        let mainTileTypesProd = [];

        let mainTileContentsDsa = [];
        let mainTileContentsProd = [];

        let mainTileTitlesDsa = [];
        let mainTileTitlesProd = [];

        let mainTileTitlesRealDsa = [];
        let mainTileTitlesRealProd = [];

        let mainTileContentsRealProd = [];
        let mainTileContentsRealDsa = [];

        let recommenderTypesDsa = [];
        let recommenderTypesProd = [];

        let recommenderTitlesDsa = [];
        let recommenderTitlesProd = [];

        let spectro_labels_dsa = [];
        let spectro_labels_prod = [];

        let spectro_data_dsa = [];
        let spectro_data_prod = [];

        let recommenderContentsProd = [];

        let recommenderContentsTempDsa = [];
        let recommenderContentsTempProd = [];

        let mainTileContentsRealTempDsa = [];
        let mainTileContentsRealTempProd = [];

        let optimizer_data_dsa = [];
        let optimizer_data_prod = [];

        let optimizer_labels_dsa = [];
        let optimizer_labels_prod = [];

        let htmlTxtDsa = [];
        let htmlTxtProd = [];

        let spectro_labels_real_dsa = [];
        let spectro_labels_real_prod = [];

        let spectro_data_real_dsa = [];
        let spectro_data_real_prod = [];

        let bestRecommenderContentsProd = [];
        let bestRecommenderContentsDsa = [];
        let recommenderContentsDsa = [];

        let mainTileTitlesDsament = [];
        let mainTileTitlesProduct = [];

        /////////////////////Data Operation////////////////////
        let subProduct = {};
        let subProductRecommender = {};
        let subDsa = {};
        let subDsaRecommender = {};

        subProduct = nextProps.subProduct;
        subProductRecommender = nextProps.subProductRecommender;
        subDsa = nextProps.subDsa;
        subDsaRecommender = nextProps.subDsaRecommender;
        //////////////////////////////////SMA///////////////////////////////
        //Get Data For Sub-Dashboard(Promotion App) SMA Product
        this.setState({
            sma_product: subProduct,
            smart_product: subProductRecommender,
            dsa: subDsa,
            smart_dsa: subDsaRecommender
        })
        ///////Main Tile Types Fetch///////////////
        mainTileTypesProd = Object.keys(subProduct);
        ////////////Main Tile Data Fetch////////////////
        mainTileTypesProd.map((key) => {
            mainTileContentsProd.push(subProduct[key]);
        })

        mainTileContentsProd.map((item) => {
            mainTileTitlesProd.push(Object.keys(item));
        })

        mainTileTitlesProd.map((itemArray) => {
            itemArray.map((item) => {
                mainTileTitlesRealProd.push(item);
            })
        })
        //// Recommender API for Sub-Dashboard(Promotion App) SMA Product//////////////

        // this.setState({
        //     smart_product: subProductRecommender
        // })
        ////// Recommender Type Fetch//////////////////////
        recommenderTypesProd = Object.keys(subProductRecommender);
        ///////////////Recommender Data Fetch(html, spectrogram, optimizer_chart)/////////////
        recommenderTypesProd.map((key) => {
            recommenderContentsProd.push(subProductRecommender[key]);
            htmlTxtProd.push(subProductRecommender[key]["text/html"]);
        })
        recommenderContentsProd.map((item) => {
            spectro_labels_prod.push((item["spectrogram"])["labels"]);
            spectro_data_prod.push((item["spectrogram"])["data"]);
            optimizer_labels_prod.push((item["optimizer_chart"])["labels"]);
            optimizer_data_prod.push((item["optimizer_chart"])["data"]);
        })

        ///// recommender labels array for getting best recommender data////////
        spectro_labels_prod.map((itemArray) => {
            itemArray.map((item) => {
                spectro_labels_real_prod.push(item);
            })
        })

        ////////////////Best Recommender Fetch////////////////////
        recommenderTitlesProd = mainTileTitlesRealProd.filter(e => !spectro_labels_real_prod.includes(e));

        //////////////////// Best Recommender Data and Main Tile Data Fetch ///////////////
        /// Remove Best Recommender in main tile data and Best Recommender Data Fetch
        mainTileContentsProd.map((temp) => {
            recommenderTitlesProd.map((item) => {
                recommenderContentsTempProd.push(temp[item])
            })
        })
        recommenderContentsTempProd.map((item) => {
            if (item !== undefined) {
                bestRecommenderContentsProd.push(item)
            }
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
        /////////////////////////////////////DSA/////////////////////////////////

        //Get Data For Sub-Dashboard(Promotion App) Digital Shopping Activity

        // this.setState({
        //     dsa: subDsa
        // })
        ///////Main Tile Types Fetch///////////////
        mainTileTypesDsa = Object.keys(subDsa);
        ////////////Main Tile Data Fetch////////////////
        mainTileTypesDsa.map((key) => {
            mainTileContentsDsa.push(subDsa[key]);
        })

        mainTileContentsDsa.map((item) => {
            mainTileTitlesDsa.push(Object.keys(item));
        })

        mainTileTitlesDsa.map((itemArray) => {
            itemArray.map((item) => {
                mainTileTitlesRealDsa.push(item);
            })
        })

        //// Recommender API for Sub-Dashboard(Promotion App Digital Shopping Activity)//////////////

        // this.setState({
        //     smart_dsa: subDsaRecommender
        // })
        ////// Recommender Type Fetch//////////////////////
        recommenderTypesDsa = Object.keys(subDsaRecommender);
        // ///////////////Recommender Data Fetch(html, spectrogram, optimizer_chart)/////////////
        recommenderTypesDsa.map((key) => {
            recommenderContentsDsa.push(subDsaRecommender[key]);
            htmlTxtDsa.push(subDsaRecommender[key]["text/html"]);
        })

        recommenderContentsDsa.map((item) => {
            spectro_labels_dsa.push((item["spectrogram"])["labels"]);
            spectro_data_dsa.push((item["spectrogram"])["data"]);
            optimizer_labels_dsa.push((item["optimizer_chart"])["labels"]);
            optimizer_data_dsa.push((item["optimizer_chart"])["data"]);
        })
        // ///// recommender labels array for getting best recommender data////////
        spectro_labels_dsa.map((itemArray) => {
            itemArray.map((item) => {
                spectro_labels_real_dsa.push(item);
            })
        })

        // // ////////////////Best Recommender Fetch////////////////////
        recommenderTitlesDsa = mainTileTitlesRealDsa.filter(e => !spectro_labels_real_dsa.includes(e));

        // // //////////////////// Best Recommender Data and Main Tile Data Fetch ///////////////
        // // /// Remove Best Recommender in main tile data and Best Recommender Data Fetch
        mainTileContentsDsa.map((temp) => {
            recommenderTitlesDsa.map((item) => {
                recommenderContentsTempDsa.push(temp[item])
            })
        })
        recommenderContentsTempDsa.map((item) => {
            if (item !== undefined) {
                bestRecommenderContentsDsa.push(item)
            }
        })

        this.setState({
            recommenderTypesDsa: recommenderTypesDsa,
            recommenderTitlesDsa: recommenderTitlesDsa,
            bestRecommenderContentsDsa: bestRecommenderContentsDsa,

            htmlTxtDsa: htmlTxtDsa,
            spectro_labels_dsa: spectro_labels_dsa,
            spectro_data_dsa: spectro_data_dsa,
            optimizer_labels_dsa: optimizer_labels_dsa,
            optimizer_data_dsa: optimizer_data_dsa
        })


    }
    componentDidMount() {

        let temp = {};
        let apiKey = '';
        temp = this.props.login;
        apiKey = temp["key"];
        const { dispatch } = this.props;
        dispatch(subDashActions.fetchProductData(apiKey));
        dispatch(subDashActions.fetchProductRecommenderData(apiKey));
        dispatch(subDashActions.fetchDsaData(apiKey));
        dispatch(subDashActions.fetchDsaRecommenderData(apiKey));

    }

    renderSpectroLineChartDsa = (index) => {

        (() => {
            $('#dsa_spectro_line_chart' + index).html('');
            var chart = new Rubix('#dsa_spectro_line_chart' + index, {
                height: 250,
                width: 350,
                // title: 'Comparative',
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
                // margin: {
                //     left: 50
                // },
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

            var max_number = 4;
            var labels_real = [];
            var data_real = [];

            labels = this.state.spectro_labels_dsa[index];
            data = this.state.spectro_data_dsa[index];

            if(labels.length>max_number){
              for(let i=0; i<max_number; i++){
                 labels_real.push(labels[Math.floor(Math.random()*labels.length)]);
                 data_real.push(data[Math.floor(Math.random()*data.length)]);
              }
            } else {
                labels_real = labels;
                data_real = data;
            }
console.log("labels_real", labels_real)
console.log("data_real", data_real)
            labels_real.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data_real[index];
                tmp_array.push(tmp);
            })

            spectrogram.addData(tmp_array);
        })();


    }
    renderSpectroLineChartProd = (index) => {

        (() => {
            $('#prod_spectro_line_chart' + index).html('');
            var chart = new Rubix('#prod_spectro_line_chart' + index, {
                height: 250,
                width: 350,
                // title: 'Comparative',
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
                // margin: {
                //     left: 50
                // },
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

            var max_number = 4;
            var labels_real = [];
            var data_real = [];

            labels = this.state.spectro_labels_prod[index];
            data = this.state.spectro_data_prod[index];

            if(labels.length>max_number){
              for(let i=0; i<max_number; i++){
                 labels_real.push(labels[Math.floor(Math.random()*labels.length)]);
                 data_real.push(data[Math.floor(Math.random()*data.length)]);
              }
            } else {
                labels_real = labels;
                data_real = data;
            }
            labels_real.map((label, index) => {
                var tmp = {};
                tmp.x = label;
                tmp.y = data_real[index];
                tmp_array.push(tmp);
            })
            spectrogram.addData(tmp_array);
        })();


    }
    renderOptimizerColumnChartDsa = (index) => {
        (() => {
            $('#dsa_optimizer_column_chart' + index).html('');
            var chart = new Rubix('#dsa_optimizer_column_chart' + index, {
                height: 250,
                width: 350,
                // title: 'Comparative',
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
                // margin: {
                //     left: 50
                // },
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

            labels = this.state.optimizer_labels_dsa[index];
            data = this.state.optimizer_data_dsa[index];

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
                height: 250,
                width: 350,
                // title: 'Comparative',
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
                // margin: {
                //     left: 50
                // },
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
    renderOptimizerBarChartDsa = (index) => {
        (() => {
            $('#dsa_optimizer_bar_chart' + index).html('');
            var chart = new Rubix('#dsa_optimizer_bar_chart' + index, {
                height: 250,
                width: 350,
                // title: 'Comparative',
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
                // margin: {
                //     left: 50
                // },
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

            labels = this.state.optimizer_labels_dsa[index];
            data = this.state.optimizer_data_dsa[index];

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
                height: 250,
                width: 350,
                // title: 'Comparative',
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
                // margin: {
                //     left: 50
                // },
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
    renderDsa = () => {

        let recommenderTypesDsa = [];
        let recommenderTitlesDsa = [];
        let bestRecommenderContentsDsa = [];
        let htmlTxtDsa = [];
        ///////Data Type///////////////////////
        recommenderTypesDsa = this.state.recommenderTypesDsa;
        /////////Best Recommender Data///////////////
        recommenderTitlesDsa = this.state.recommenderTitlesDsa;
        bestRecommenderContentsDsa = this.state.bestRecommenderContentsDsa;
        ////////////////////Recommender Data//////////////
        htmlTxtDsa = this.state.htmlTxtDsa;

        return (
            <Grid>
                {
                    recommenderTypesDsa.map((item, index) => {
                        //////////////////////////////////Sub dashboard Campaigns App PLE//////////////////
                        let num = Math.random() * 2;
                        console.log("MATH", num)
                        return <Row key={index} className="dsa_row">
                            <Col md={3}>
                                <div className="dsa_recommender_tile">
                                    <p className="da_best_recommender">Best Case</p>
                                    <p className="dsa_recommender_type">{item}</p>
                                    <p className="dsa_recommender_title">{recommenderTitlesDsa[index]}</p>
                                    <p className="pay_recommender_percent">{bestRecommenderContentsDsa[index]["percentage"]}</p>
                                    <p className="pay_recommender_total">{bestRecommenderContentsDsa[index]["total"]}</p>
                                </div>
                            </Col>
                            <Col md={3} className="dsa_spectro_chart">
                                <div id={'dsa_spectro_line_chart' + index}></div>
                            </Col>
                            <Col md={3} className="dsa_optimmizer_chart">
                                <div id={num < 1 ? "dsa_optimizer_column_chart" + index : "dsa_optimizer_bar_chart" + index}></div>
                            </Col>
                            <Col md={3}>
                                <div className="dsa_recommender_text_tile">
                                    <p className="dsa_recommender_text">{htmlTxtDsa[index]}</p>
                                </div>
                            </Col>
                        </Row>
                    })
                }
            </Grid>
        )
    }
    renderProduct = () => {

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
                        return <Row key={index} className="prod_row">
                            <Col md={3}>
                                <div className="prod_recommender_tile">
                                    <p className="prod_best_recommender">Best Case</p>
                                    <p className="prod_recommender_type">{item}</p>
                                    <p className="prod_recommender_title">{recommenderTitlesProd[index]}</p>
                                    <p className="prod_recommender_percent">{bestRecommenderContentsProd[index]["percentage"]}</p>
                                    <p className="prod_recommender_total">{bestRecommenderContentsProd[index]["total"]}</p>
                                </div>
                            </Col>
                            <Col md={3} className="prod_spectro_chart">
                                <div className={{ float: 'left' }} id={'prod_spectro_line_chart' + index}></div>
                            </Col>
                            <Col md={3} className="prod_optimmizer_chart">
                                <div id={num < 1 ? "prod_optimizer_column_chart" + index : "prod_optimizer_bar_chart" + index}></div>
                            </Col>
                            <Col md={3}>
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
    onTabSelect = (key) => {
        let recommenderTypesDsa = [];
        let recommenderTypesProd = [];
        recommenderTypesDsa = this.state.recommenderTypesDsa;
        recommenderTypesProd = this.state.recommenderTypesProd;
        if (key === 'dsa') {
            recommenderTypesDsa.map((item, index) => {
                setTimeout(() => {
                    let a = document.getElementById('dsa_spectro_line_chart' + index);
                    if (a) {
                        this.renderSpectroLineChartDsa(index);
                    }
                }, 150)
                setTimeout(() => {
                    let b = document.getElementById('dsa_optimizer_column_chart' + index);
                    if (b) {
                        this.renderOptimizerColumnChartDsa(index);
                    }
                }, 150)
                setTimeout(() => {
                    let c = document.getElementById('dsa_optimizer_bar_chart' + index);
                    if (c) {
                        this.renderOptimizerBarChartDsa(index);
                    }
                }, 150)
            })
        }
        if (key === 'sma') {
            recommenderTypesProd.map((item, index) => {
                setTimeout(() => {
                    let a = document.getElementById('prod_spectro_line_chart' + index);
                    if (a) {
                        this.renderSpectroLineChartProd(index);
                    }
                }, 250)
                setTimeout(() => {
                    let b = document.getElementById('prod_optimizer_column_chart' + index);
                    if (b) {
                        this.renderOptimizerColumnChartProd(index);
                    }
                }, 250)
                setTimeout(() => {
                    let c = document.getElementById('prod_optimizer_bar_chart' + index);
                    if (c) {
                        this.renderOptimizerBarChartProd(index);
                    }
                }, 250)
            })
        }
    }
    render() {
        return (
            <PanelTabContainer id='panel-body-header-footer-both-plain-tabs' defaultActiveKey="cpta" onSelect={this.onTabSelect}>
                <Panel>
                    <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
                        <Grid>
                            <Row>
                                <Col xs={12} className="text-center">
                                    <h4>Product Promotion By Channel</h4>
                                </Col>
                            </Row>
                        </Grid>
                        <Nav bsStyle="tabs" className='plain'>
                            <NavItem eventKey="cpta">
                                CPTA
                            </NavItem>
                            <NavItem eventKey="sma">
                                Shopping Modes Analysis
                            </NavItem>
                            <NavItem eventKey="dsa">
                                Digital Shopping Activity
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="cpta">
                                            <div>asdfasdfasfasfd</div>
                                        </Tab.Pane>
                                        {(this.state.sma_product !== null && this.state.smart_product !== null) &&
                                            <Tab.Pane eventKey="sma">
                                                {this.renderProduct()}
                                            </Tab.Pane>
                                        }
                                        {(this.state.dsa !== null && this.state.smart_dsa != null) &&
                                            <Tab.Pane eventKey="dsa">
                                                {this.renderDsa()}
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
