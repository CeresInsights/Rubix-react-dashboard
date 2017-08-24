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

export default class ProductPromotionByChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sma_product: {},
            smart_product: {},
            dsa: {},
            smart_dsa: {}
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

        let recommenderContentsPay = [];
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

        let recommenderContentsProduct = [];
        let recommenderContentsDsament = [];
        let recommenderContentsDsa = [];

        let mainTileTitlesDsament = [];
        let mainTileTitlesProduct = [];


        let api_key = localStorage.getItem('api_key');

        //Get Data For Sub-Dashboard(Promotion App) SMA Product
        $.ajax({
            url: 'https://ceres.link/api/sub_board/sma_product/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.setState({
                    sma_product: data
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
                //// Recommender API for Sub-Dashboard(Promotion App) SMA Product//////////////
                $.ajax({
                    url: 'https://ceres.link/api/sub_board/smart_product/api_key=' + api_key,
                    dataType: 'json',
                    type: 'GET',
                    success: function (data) {
                        this.setState({
                            smart_product: data
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

        //Get Data For Sub-Dashboard(Promotion App) Digital Shopping Activity
        $.ajax({
            url: 'https://ceres.link/api/sub_board/dsa/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.setState({
                    dsa: data
                })
                ///////Main Tile Types Fetch///////////////
                mainTileTypesDsa = Object.keys(data);
                ////////////Main Tile Data Fetch////////////////
                mainTileTypesDsa.map((key) => {
                    mainTileContentsDsa.push(data[key]);
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
                $.ajax({
                    url: 'https://ceres.link/api/sub_board/smart_dsa/api_key=' + api_key,
                    dataType: 'json',
                    type: 'GET',
                    success: function (data) {
                        console.log("smart_dsa", data)
                        this.setState({
                            smart_dsa: data
                        })
                        ////// Recommender Type Fetch//////////////////////
                        recommenderTypesDsa = Object.keys(data);
                        this.setState({
                            recommenderTypesDsa: recommenderTypesDsa
                        })
                        // ///////////////Recommender Data Fetch(html, spectrogram, optimizer_chart)/////////////
                        recommenderTypesDsa.map((key) => {
                            recommenderContentsDsa.push(data[key]);
                            htmlTxtDsa.push(data[key]["text/html"]);
                        })

                        recommenderContentsDsa.map((item) => {
                            spectro_labels_dsa.push((item["spectrogram"])["labels"]);
                            spectro_data_dsa.push((item["spectrogram"])["data"]);
                            optimizer_labels_dsa.push((item["optimizer_chart"])["labels"]);
                            optimizer_data_dsa.push((item["optimizer_chart"])["data"]);
                        })

                        this.setState({
                            htmlTxtDsa: htmlTxtDsa,
                            spectro_labels_dsa: spectro_labels_dsa,
                            spectro_data_dsa: spectro_data_dsa,
                            optimizer_labels_dsa: optimizer_labels_dsa,
                            optimizer_data_dsa: optimizer_data_dsa
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
                                delete temp[item]
                            })
                        })
                        recommenderContentsTempDsa.map((item) => {
                            if (item !== undefined) {
                                recommenderContentsDsament.push(item)
                            }
                        })

                        /////////Main Tile Data Fetch/////////////
                        mainTileContentsDsa.map((item) => {
                            mainTileTitlesDsament.push(Object.keys(item))
                            console.log("ASASASA", mainTileTitlesDsa)
                            mainTileTitlesDsament.map((temp) => {
                                temp.map((title) => {
                                    mainTileContentsRealTempDsa.push(item[title])
                                })
                            })
                        })

                        console.log("mainTileContentsRealTempDsa", mainTileContentsRealTempDsa)
                        mainTileContentsRealTempDsa.map((item) => {
                            if (item !== undefined) {
                                mainTileContentsRealDsa.push(item)
                            }
                        })

                        this.setState({
                            recommenderTitlesDsa: recommenderTitlesDsa,
                            recommenderContentsDsament: recommenderContentsDsament,
                            mainTileContentsRealDsa: mainTileContentsRealDsa
                        })

                    }.bind(this),
                    error: function (error) {
                        console.log('SubDsaSmartUpdateERROR', error);
                    }
                });

            }.bind(this),
            error: function (error) {
                console.log('SubDsaUpdateERROR', error);
            }
        });
    }
    renderDsa = () => {

        let recommenderTypesDsa = [];
        let recommenderTitlesDsa = [];
        let recommenderContentsDsament = [];
        let mainTileContentsRealDsa = [];

        let htmlTxtDsa = [];
        let spectro_labels_dsa = [];
        let spectro_data_dsa = [];
        let optimizer_labels_dsa = [];
        let optimizer_data_dsa = [];

        ///////Data Type///////////////////////
        recommenderTypesDsa = this.state.recommenderTypesDsa;

        /////////Best Recommender Data///////////////
        recommenderTitlesDsa = this.state.recommenderTitlesDsa;
        recommenderContentsDsament = this.state.recommenderContentsDsament;

        //////////Main Tile Data///////////////////////////
        mainTileContentsRealDsa = this.state.mainTileContentsRealDsa;

        ////////////////////Recommender Data//////////////
        htmlTxtDsa = this.state.htmlTxtDsa;
        spectro_labels_dsa = this.state.spectro_labels_dsa;
        spectro_data_dsa = this.state.spectro_data_dsa;
        optimizer_labels_dsa = this.state.optimizer_labels_dsa;
        optimizer_data_dsa = this.state.optimizer_data_dsa;

        // console.log("recommenderTypesDsa", recommenderTypesDsa)
        // console.log("recommenderTitlesDsa", recommenderTitlesDsa)
        // console.log("recommenderContentsDsament", recommenderContentsDsament)
        // console.log("mainTileContentsRealDsa", mainTileContentsRealDsa)
        // console.log("htmlTxtDsa", htmlTxtDsa)
        // console.log("spectro_labels_dsa", spectro_labels_dsa)
        // console.log("spectro_data_dsa", spectro_data_dsa)
        // console.log("optimizer_labels_dsa", optimizer_labels_dsa)
        // console.log("optimizer_data_dsa", optimizer_data_dsa)
    }
    renderProduct = () => {

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
    //         $('#pie-chart').html('');
    //         var pie = Rubix.Pie('#pie-chart', {
    //             title: 'Shopping Mode Analysis By Channel',
    //             height: 300
    //         });

    //         var channels_data = this.props.channels_data;
    //         var tmp_array = [];
    //         for (var i in channels_data) {
    //             var t = new Object;
    //             t.name = i;
    //             t.value = channels_data[i].total;
    //             t.color = color_array[this.getObjectKeyIndex(channels_data, i)];
    //             tmp_array.push(t);
    //         }

    //         pie.addData(tmp_array);

    //         $('#pie-chart2').html('');
    //         var pie1 = Rubix.Pie('#pie-chart2', {
    //             title: 'Digital Shopping Activity',
    //             height: 300
    //         });

    //         pie1.addData(tmp_array);

    //         $('#smabyproduct_chart').html('');
    //         var pie2 = Rubix.Pie('#smabyproduct_chart', {
    //             title: 'Shopping Mode Analysis By Product',
    //             height: 300
    //         });

    //         var products_data = this.props.products_data;
    //         tmp_array = [];
    //         for (var i in products_data) {
    //             var t = new Object;
    //             t.name = i;
    //             t.value = products_data[i].total;
    //             t.color = color_array[this.getObjectKeyIndex(products_data, i)];
    //             tmp_array.push(t);
    //         }
    //         pie2.addData(tmp_array);
    //     })();
    // }
    render() {
        return (
            <PanelTabContainer id='panel-body-header-footer-both-plain-tabs' defaultActiveKey="sma">
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
                                        {(this.state.sma_product!==null&&this.state.smart_product)&&
                                            <Tab.Pane eventKey="sma">
                                                {this.renderDsa()}
                                            </Tab.Pane>
                                        }
                                        {(this.state.dsa!==null&&this.state.smart_dsa)&&
                                            <Tab.Pane eventKey="dsa">
                                                {this.renderProduct()}
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
