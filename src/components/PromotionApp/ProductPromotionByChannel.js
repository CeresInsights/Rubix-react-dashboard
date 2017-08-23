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
            sma_product: [],
            smart_product: [],
            dsa_data: [],
            smart_dsa: []
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
        let mainTileTypesProduct = [];

        let mainTileContentsDsa = [];
        let mainTileContentsProduct = [];

        let mainTileTitlesDsa = [];
        let mainTileTitlesProduct = [];

        let mainTileTitlesRealDsa = [];
        let mainTileTitlesRealProduct = [];
        // let mainPercents = [];
        // let mainTotals = [];

        let recommenderTypesDsa = [];
        let recommenderTypesProduct = [];

        let spectro_labels_dsa = [];
        let spectro_labels_product = [];

        let spectro_data_dsa = [];
        let spectro_data_product = [];

        let recommenderContentsDsa = [];
        let recommenderContentsProduct = [];

        let optimizer_data_dsa = [];
        let optimizer_data_product = [];

        let optimizer_labels_dsa = [];
        let optimizer_labels_product = [];

        let htmlTxtDsa = [];
        let htmlTxtProduct = [];

        let spectro_labels_real_dsa = [];
        let spectro_labels_real_product = [];

        let spectro_data_real_dsa = [];
        let spectro_data_real_product = [];


        let api_key = localStorage.getItem('api_key');

        //Get Data For Sub-Dashboard(Promotion App) SMA Product
        $.ajax({
            url: 'https://ceres.link/api/sub_board/sma_product/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("SubProductUpdate", data);
                this.setState({ sma_product: data })
                mainTileTypesProduct = Object.keys(data);
                console.log("mainTileTypesProduct", mainTileTypesProduct)

                this.setState({ mainTileTypesProduct: mainTileTypesProduct })

                mainTileTypesProduct.map((key) => {
                    mainTileContentsProduct.push(data[key]);
                })
                console.log("mainTileContentsProduct", mainTileContentsProduct)
                this.setState({
                    mainTileContentsProduct: mainTileContentsProduct
                })

                mainTileContentsProduct.map((item) => {
                    mainTileTitlesProduct.push(Object.keys(item));
                })
                console.log("mainTileTitlesProduct", mainTileTitlesProduct);

                mainTileTitlesProduct.map((itemArray) => {
                    itemArray.map((item) => {
                        mainTileTitlesRealProduct.push(item);
                    })
                })
                console.log("mainTileTitlesRealProduct", mainTileTitlesRealProduct)

                this.setState({
                    mainTileTitlesRealProduct: mainTileTitlesRealProduct
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
                console.log('SubProductUpdateERROR', error);
            }
        });

        $.ajax({
            url: 'https://ceres.link/api/sub_board/smart_product/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("SubChannelUpdate", data);
                this.setState({ smart_product: data })
                recommenderTypesProduct = Object.keys(data);
                console.log("recommenderTypesProduct", recommenderTypesProduct);
                this.setState({
                    recommenderTypesProduct: recommenderTypesProduct
                })

                recommenderTypesProduct.map((key) => {
                    recommenderContentsProduct.push(data[key]);
                    htmlTxtProduct.push(data[key]["text/html"]);
                })
                console.log("htmlTxtPay", htmlTxtProduct)
                recommenderContentsProduct.map((item) => {
                    spectro_labels_product.push((item["spectrogram"])["labels"]);
                    spectro_data_product.push((item["spectrogram"])["data"]);
                    optimizer_labels_product.push((item["optimizer_chart"])["labels"]);
                    optimizer_data_product.push((item["optimizer_chart"])["data"]);
                })
                spectro_labels_product.map((itemArray) => {
                    itemArray.map((item) => {
                        spectro_labels_real_product.push(item);
                    })
                })
                this.setState({
                    spectro_labels_real_product: spectro_labels_real_product
                })

                console.log("spectChartLabelsProduct", spectro_labels_product)
                // console.log("BBBB", spectro_labels_real)
                console.log("spectChartDataProduct", spectro_data_product)
                console.log("optimizeChartLabelsProduct", optimizer_labels_product)
                console.log("optimizeChartDataProduct", optimizer_data_product)
            }.bind(this),
            error: function (error) {
                console.log('SubChannelUpdateERROR', error);
            }
        });

        //Get Data For Sub-Dashboard(Promotion App) DSA
        $.ajax({
            url: 'https://ceres.link/api/sub_board/dsa/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("SubDsaUpdate", data);
                this.setState({ dsa_data: data })
                mainTileTypesDsa = Object.keys(data);
                console.log("mainTileTypesDsa", mainTileTypesDsa)

                this.setState({ mainTileTypesDsa: mainTileTypesDsa })

                mainTileTypesDsa.map((key) => {
                    mainTileContentsDsa.push(data[key]);
                })
                console.log("mainTileContent", mainTileContentsDsa)
                this.setState({
                    mainTileContentsDsa: mainTileContentsDsa
                })

                mainTileContentsDsa.map((item) => {
                    mainTileTitlesDsa.push(Object.keys(item));
                })
                console.log("mainTileTitlesDsa", mainTileTitlesDsa);

                mainTileTitlesDsa.map((itemArray) => {
                    itemArray.map((item) => {
                        mainTileTitlesRealDsa.push(item);
                    })
                })
                console.log("mainTileTitlesRealDsa", mainTileTitlesRealDsa)

                this.setState({
                    mainTileTitlesRealDsa: mainTileTitlesRealDsa
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
                console.log('SubDsaUpdateERROR', error);
            }
        });

        $.ajax({
            url: 'https://ceres.link/api/sub_board/smart_dsa/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("SubChannelDsaUpdate", data);
                this.setState({ smart_dsa: data })
                recommenderTypesDsa = Object.keys(data);
                console.log("recommenderTypesDsa", recommenderTypesDsa);
                this.setState({
                    recommenderTypesDsa: recommenderTypesDsa
                })

                recommenderTypesDsa.map((key) => {
                    recommenderContentsDsa.push(data[key]);
                    htmlTxtDsa.push(data[key]["text/html"]);
                })
                console.log("htmlTxtDsa", htmlTxtDsa)
                recommenderContentsDsa.map((item) => {
                    spectro_labels_dsa.push((item["spectrogram"])["labels"]);
                    spectro_data_dsa.push((item["spectrogram"])["data"]);
                    optimizer_labels_dsa.push((item["optimizer_chart"])["labels"]);
                    optimizer_data_dsa.push((item["optimizer_chart"])["data"]);
                })
                spectro_labels_dsa.map((itemArray) => {
                    itemArray.map((item) => {
                        spectro_labels_real_dsa.push(item);
                    })
                })
                this.setState({
                    spectro_labels_real_dsa: spectro_labels_real_dsa
                })

                console.log("spectChartLabelsDsa", spectro_labels_dsa)
                // console.log("BBBB", spectro_labels_real)
                console.log("spectChartDataDsa", spectro_data_dsa)
                console.log("optimizeChartLabelsDsa", optimizer_labels_dsa)
                console.log("optimizeChartDataDsa", optimizer_data_dsa)
            }.bind(this),
            error: function (error) {
                console.log('SubChannelDsaUpdateERROR', error);
            }
        });
    }
    componentDidUpdate() {
        var color_array = ['#4572a7', '#aa4643', '#89a54e', '#80699b', '#3d96ae', '#db843d'];
        (() => {
            $('#pie-chart').html('');
            var pie = Rubix.Pie('#pie-chart', {
                title: 'Shopping Mode Analysis By Channel',
                height: 300
            });

            var channels_data = this.props.channels_data;
            var tmp_array = [];
            for (var i in channels_data) {
                var t = new Object;
                t.name = i;
                t.value = channels_data[i].total;
                t.color = color_array[this.getObjectKeyIndex(channels_data, i)];
                tmp_array.push(t);
            }

            pie.addData(tmp_array);

            $('#pie-chart2').html('');
            var pie1 = Rubix.Pie('#pie-chart2', {
                title: 'Digital Shopping Activity',
                height: 300
            });

            pie1.addData(tmp_array);

            $('#smabyproduct_chart').html('');
            var pie2 = Rubix.Pie('#smabyproduct_chart', {
                title: 'Shopping Mode Analysis By Product',
                height: 300
            });

            var products_data = this.props.products_data;
            tmp_array = [];
            for (var i in products_data) {
                var t = new Object;
                t.name = i;
                t.value = products_data[i].total;
                t.color = color_array[this.getObjectKeyIndex(products_data, i)];
                tmp_array.push(t);
            }
            pie2.addData(tmp_array);
        })();
    }
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
                                        <Tab.Pane eventKey="sma">
                                            <Col sm={6}>
                                                <div id="pie-chart" > </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div id="smabyproduct_chart"> </div>
                                            </Col>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="dsa">
                                            <div id="pie-chart2" > </div>
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
