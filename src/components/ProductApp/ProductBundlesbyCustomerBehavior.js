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
export default class ProductBundlesbyCustomerBehavior extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prod_pay: [],
            prod_product: [],
            smart_pay: [],
            smart_prod: []
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
    componentDidMount() {
        var api_key = localStorage.getItem('api_key');
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
        let recommenderContentsProd = [];

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

        let recommenderContentsProduct = [];
        let recommenderContentsPayment = [];

        let mainTileTitlesPayment = [];
        let mainTileTitlesProduct = [];

        //Get Data For Sub-Dashboard(Product App) Payment Preferences
        $.ajax({
            url: 'https://ceres.link/api/sub_board/prod_pay/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.setState({
                    prod_pay: data
                })
                ///////Main Tile Types Fetch///////////////
                mainTileTypesPay = Object.keys(data);
                ////////////Main Tile Data Fetch////////////////
                mainTileTypesPay.map((key) => {
                    mainTileContentsPay.push(data[key]);
                })

                mainTileContentsPay.map((item) => {
                    mainTileTitlesPay.push(Object.keys(item));
                })

                mainTileTitlesPay.map((itemArray) => {
                    itemArray.map((item) => {
                        mainTileTitlesRealPay.push(item);
                    })
                })

                //// Recommender API for Sub-Dashboard(Product App Payment Preferences)//////////////
                $.ajax({
                    url: 'https://ceres.link/api/sub_board/smart_pay/api_key=' + api_key,
                    dataType: 'json',
                    type: 'GET',
                    success: function (data) {
                        console.log("PAY", data)
                        this.setState({
                            smart_pay: data
                        })
                        ////// Recommender Type Fetch//////////////////////
                        recommenderTypesPay = Object.keys(data);
                        console.log("recommenderTypesPay", recommenderTypesPay)
                        this.setState({
                            recommenderTypesPay: recommenderTypesPay
                        })
                        // ///////////////Recommender Data Fetch(html, spectrogram, optimizer_chart)/////////////
                        recommenderTypesPay.map((key) => {
                            recommenderContentsPay.push(data[key]);
                            htmlTxtPay.push(data[key]["text/html"]);
                        })

                        recommenderContentsPay.map((item) => {
                            spectro_labels_pay.push((item["spectrogram"])["labels"]);
                            spectro_data_pay.push((item["spectrogram"])["data"]);
                            optimizer_labels_pay.push((item["optimizer_chart"])["labels"]);
                            optimizer_data_pay.push((item["optimizer_chart"])["data"]);
                        })

                        this.setState({
                            htmlTxtPay: htmlTxtPay,
                            spectro_labels_pay: spectro_labels_pay,
                            spectro_data_pay: spectro_data_pay,
                            optimizer_labels_pay: optimizer_labels_pay,
                            optimizer_data_pay: optimizer_data_pay
                        })
                        // ///// recommender labels array for getting best recommender data////////
                        spectro_labels_pay.map((itemArray) => {
                            itemArray.map((item) => {
                                spectro_labels_real_pay.push(item);
                            })
                        })

                        // // ////////////////Best Recommender Fetch////////////////////
                        recommenderTitlesPay = mainTileTitlesRealPay.filter(e => !spectro_labels_real_pay.includes(e));

                        // // //////////////////// Best Recommender Data and Main Tile Data Fetch ///////////////
                        // // /// Remove Best Recommender in main tile data and Best Recommender Data Fetch
                        mainTileContentsPay.map((temp) => {
                            recommenderTitlesPay.map((item) => {
                                recommenderContentsTempPay.push(temp[item])
                                delete temp[item]
                            })
                        })
                        // console.log("mainTileContentsPay", mainTileContentsPay)
                        // console.log("recommenderContentsTemp", recommenderContentsTemp)
                        recommenderContentsTempPay.map((item) => {
                            if (item !== undefined) {
                                recommenderContentsPayment.push(item)
                            }
                        })

                        /////////Main Tile Data Fetch/////////////
                        mainTileContentsPay.map((item) => {
                            mainTileTitlesPayment.push(Object.keys(item))
                            console.log("ASASASA", mainTileTitlesPay)
                            mainTileTitlesPayment.map((temp) => {
                                temp.map((title) => {
                                    mainTileContentsRealTempPay.push(item[title])
                                })
                            })
                        })

                        console.log("mainTileContentsRealTempPay", mainTileContentsRealTempPay)
                        mainTileContentsRealTempPay.map((item) => {
                            if (item !== undefined) {
                                mainTileContentsRealPay.push(item)
                            }
                        })

                        this.setState({
                            recommenderTitlesPay: recommenderTitlesPay,
                            recommenderContentsPayment: recommenderContentsPayment,
                            mainTileContentsRealPay: mainTileContentsRealPay
                        })

                    }.bind(this),
                    error: function (error) {
                        console.log('SubPaySmartUpdateERROR', error);
                    }
                });

            }.bind(this),
            error: function (error) {
                console.log('SubPayUpdateERROR', error);
            }
        });

        //Get Data For Sub-Dashboard(Product App) Product Appetite
        $.ajax({
            url: 'https://ceres.link/api/sub_board/prod_product/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.setState({
                    prod_product: data
                })
                ///////Main Tile Types Fetch///////////////
                mainTileTypesProd = Object.keys(data);
                ////////////Main Tile Data Fetch////////////////
                mainTileTypesProd.map((key) => {
                    mainTileContentsProd.push(data[key]);
                })

                mainTileContentsProd.map((item) => {
                    mainTileTitlesProd.push(Object.keys(item));
                })

                mainTileTitlesProd.map((itemArray) => {
                    itemArray.map((item) => {
                        mainTileTitlesRealProd.push(item);
                    })
                })
                //// Recommender API for Sub-Dashboard(Product App) Product Appetite//////////////
                $.ajax({
                    url: 'https://ceres.link/api/sub_board/smart_prod/api_key=' + api_key,
                    dataType: 'json',
                    type: 'GET',
                    success: function (data) {
                        this.setState({
                            smart_prod: data
                        })
                        ////// Recommender Type Fetch//////////////////////
                        recommenderTypesProd = Object.keys(data);
                        this.setState({
                            recommenderTypesProd: recommenderTypesProd
                        })
                        ///////////////Recommender Data Fetch(html, spectrogram, optimizer_chart)/////////////
                        recommenderTypesProd.map((key) => {
                            recommenderContentsProd.push(data[key]);
                            htmlTxtProd.push(data[key]["text/html"]);
                        })
                        recommenderContentsProd.map((item) => {
                            spectro_labels_prod.push((item["spectrogram"])["labels"]);
                            spectro_data_prod.push((item["spectrogram"])["data"]);
                            optimizer_labels_prod.push((item["optimizer_chart"])["labels"]);
                            optimizer_data_prod.push((item["optimizer_chart"])["data"]);
                        })

                        this.setState({
                            htmlTxtProd: htmlTxtProd,
                            spectro_labels_prod: spectro_labels_prod,
                            spectro_data_prod: spectro_data_prod,
                            optimizer_labels_prod: optimizer_labels_prod,
                            optimizer_data_prod: optimizer_data_prod
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
                                delete temp[item]
                            })
                        })
                        recommenderContentsTempProd.map((item) => {
                            if (item !== undefined) {
                                recommenderContentsProduct.push(item)
                            }
                        })
                        /////////Main Tile Data Fetch/////////////
                        mainTileContentsProd.map((item) => {
                            mainTileTitlesProduct.push(Object.keys(item))
                            mainTileTitlesProduct.map((temp) => {
                                temp.map((title) => {
                                    mainTileContentsRealTempProd.push(item[title])
                                })
                            })
                        })
                        mainTileContentsRealTempProd.map((item) => {
                            if (item !== undefined) {
                                mainTileContentsRealProd.push(item)
                            }
                        })

                        this.setState({
                            recommenderTitlesProd: recommenderTitlesProd,
                            recommenderContentsProduct: recommenderContentsProduct,
                            mainTileContentsRealProd: mainTileContentsRealProd
                        })

                    }.bind(this),
                    error: function (error) {
                        console.log('SubProductSmartUpdateERROR', error);
                    }
                });

            }.bind(this),
            error: function (error) {
                console.log('SubPayUpdateERROR', error);
            }
        });

    }
    renderPay = () => {

        let recommenderTypesPay = [];
        let recommenderTitlesPay = [];
        let recommenderContentsPayment = [];
        let mainTileContentsRealPay = [];

        let htmlTxtPay = [];
        let spectro_labels_pay = [];
        let spectro_data_pay = [];
        let optimizer_labels_pay = [];
        let optimizer_data_pay = [];

        ///////Data Type///////////////////////
        recommenderTypesPay = this.state.recommenderTypesPay;

        /////////Best Recommender Data///////////////
        recommenderTitlesPay = this.state.recommenderTitlesPay;
        recommenderContentsPayment = this.state.recommenderContentsPayment;

        //////////Main Tile Data///////////////////////////
        mainTileContentsRealPay = this.state.mainTileContentsRealPay;

        ////////////////////Recommender Data//////////////
        htmlTxtPay = this.state.htmlTxtPay;
        spectro_labels_pay = this.state.spectro_labels_pay;
        spectro_data_pay = this.state.spectro_data_pay;
        optimizer_labels_pay = this.state.optimizer_labels_pay;
        optimizer_data_pay = this.state.optimizer_data_pay;

        console.log("recommenderTypesPay", recommenderTypesPay)
        console.log("recommenderTitlesPay", recommenderTitlesPay)
        console.log("recommenderContentsPayment", recommenderContentsPayment)
        console.log("mainTileContentsRealPay", mainTileContentsRealPay)
        console.log("htmlTxtPay", htmlTxtPay)
        console.log("spectro_labels_pay", spectro_labels_pay)
        console.log("spectro_data_pay", spectro_data_pay)
        console.log("optimizer_labels_pay", optimizer_labels_pay)
        console.log("optimizer_data_pay", optimizer_data_pay)
    }
    renderProd = () => {

        let recommenderTypesProd = [];
        let recommenderTitlesProd = [];
        let recommenderContentsProduct = [];
        let mainTileContentsRealProd = [];

        let htmlTxtProd = [];
        let spectro_labels_prod = [];
        let spectro_data_prod = [];
        let optimizer_labels_prod = [];
        let optimizer_data_prod = [];

        ///////Data Type///////////////////////
        recommenderTypesProd = this.state.recommenderTypesProd;

        /////////Best Recommender Data///////////////
        recommenderTitlesProd = this.state.recommenderTitlesProd;
        recommenderContentsProduct = this.state.recommenderContentsProduct;

        //////////Main Tile Data///////////////////////////
        mainTileContentsRealProd = this.state.mainTileContentsRealProd;

        ////////////////////Recommender Data//////////////
        htmlTxtProd = this.state.htmlTxtProd;
        spectro_labels_prod = this.state.spectro_labels_prod;
        spectro_data_prod = this.state.spectro_data_prod;
        optimizer_labels_prod = this.state.optimizer_labels_prod;
        optimizer_data_prod = this.state.optimizer_data_prod;

        console.log("recommenderTypesProd", recommenderTypesProd)
        console.log("recommenderTitlesProd", recommenderTitlesProd)
        console.log("recommenderContentsProduct", recommenderContentsProduct)
        console.log("mainTileContentsRealProd", mainTileContentsRealProd)
        console.log("htmlTxtProd", htmlTxtProd)
        console.log("spectro_labels_prod", spectro_labels_prod)
        console.log("spectro_data_prod", spectro_data_prod)
        console.log("optimizer_labels_prod", optimizer_labels_prod)
        console.log("optimizer_data_prod", optimizer_data_prod)
    }
    // componentDidUpdate() {
    //     var color_array = ['#4572a7', '#aa4643', '#89a54e', '#80699b', '#3d96ae', '#db843d'];
    //     (() => {
    //         $('#cpp_chart').html('');
    //         var pie2 = Rubix.Pie('#cpp_chart', {
    //             title: 'Customer Product Preferences',
    //             height: 300
    //         });

    //         var products_data = this.props.products_data;
    //         var tmp_array = [];
    //         for (var i in products_data) {
    //             var t = new Object;
    //             t.name = i;
    //             t.value = products_data[i].total;
    //             t.color = color_array[this.getObjectKeyIndex(products_data, i)];
    //             tmp_array.push(t);
    //         }
    //         pie2.addData(tmp_array);
    //     })();

    //     //CPA Chart
    //     (() => {
    //         $('#cpa_chart').html('');
    //         var chart = new Rubix('#cpa_chart', {
    //             height: 300,
    //             title: 'Customer Product Appetite',
    //             titleColor: '#D71F4B',
    //             subtitleColor: '#D71F4B',
    //             axis: {
    //                 x: {
    //                     type: 'ordinal',
    //                 },
    //                 y: {
    //                     type: 'linear',
    //                     tickFormat: 'd'
    //                 }
    //             },
    //             tooltip: {
    //                 color: '#D71F4B',
    //                 format: {
    //                     y: '.0f'
    //                 }
    //             },
    //             margin: {
    //                 left: 50
    //             },
    //             grouped: false,
    //             show_markers: true
    //         });

    //         var fruits = chart.column_series({
    //             name: 'Shopping Rate',
    //             color: '#D71F4B'
    //         });

    //         var tmp = this.props.products_data;
    //         var tmp_array = [];
    //         for (var i in tmp) {
    //             var t = new Object;
    //             t.x = i;
    //             t.y = tmp[i].total;
    //             tmp_array.push(t);
    //         }
    //         fruits.addData(tmp_array);
    //     })();
    // }
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
                                        {(this.state.prod_pay !== null && this.state.smart_pay) &&
                                            <Tab.Pane eventKey="cpp">
                                                {this.renderPay()}
                                            </Tab.Pane>
                                        }
                                        {(this.state.prod_product !== null && this.state.smart_prod) &&
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