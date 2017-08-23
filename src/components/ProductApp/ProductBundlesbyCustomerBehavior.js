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
            smart_prod_pay: [],
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

        let mainTileTypesPay = [];
        let mainTileTypesProd = [];

        let mainTileContentsPay = [];
        let mainTileContentsProd = [];

        let mainTileTitlesPay = [];
        let mainTileTitlesProd = [];

        let mainTileTitlesRealPay = [];
        let mainTileTitlesRealProd = [];
        // let mainPercents = [];
        // let mainTotals = [];

        let recommenderTypesPay = [];
        let recommenderTypesProd = [];

        let spectro_labels_pay = [];
        let spectro_labels_prod = [];

        let spectro_data_pay = [];
        let spectro_data_prod = [];

        let recommenderContentsPay = [];
        let recommenderContentsProd = [];

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

        var api_key = localStorage.getItem('api_key');

        //Get Data For Sub-Dashboard(Product App) Payment Preferences
        $.ajax({
            url: 'https://ceres.link/api/sub_board/prod_pay/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("SubPayUpdate", data);
                this.setState({ prod_pay: data })

                mainTileTypesPay = Object.keys(data);
                console.log("mainTileTypesPay", mainTileTypesPay)

                this.setState({ mainTileTypesPay: mainTileTypesPay })

                mainTileTypesPay.map((key) => {
                    mainTileContentsPay.push(data[key]);
                })
                console.log("mainTileContent", mainTileContentsPay)
                this.setState({
                    mainTileContentsPay: mainTileContentsPay
                })

                mainTileContentsPay.map((item) => {
                    mainTileTitlesPay.push(Object.keys(item));
                })
                console.log("mainTileTitles", mainTileTitlesPay);

                mainTileTitlesPay.map((itemArray) => {
                    itemArray.map((item) => {
                        mainTileTitlesRealPay.push(item);
                    })
                })
                console.log("mainTileTitlesRealPay", mainTileTitlesRealPay)

                this.setState({
                    mainTileTitlesRealPay: mainTileTitlesRealPay
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
                console.log('SubPayUpdate Error', error);
            }
        });

        $.ajax({
            url: 'https://ceres.link/api/sub_board/smart_pay/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("SubPayRecommendarUpdate", data);
                this.setState({ smart_prod_pay: data })
                recommenderTypesPay = Object.keys(data);
                console.log("recommenderTypesPay", recommenderTypesPay);
                this.setState({
                    recommenderTypesPay: recommenderTypesPay
                })

                recommenderTypesPay.map((key) => {
                    recommenderContentsPay.push(data[key]);
                    htmlTxtPay.push(data[key]["text/html"]);
                })
                console.log("htmlTxtPay", htmlTxtPay)
                recommenderContentsPay.map((item) => {
                    spectro_labels_pay.push((item["spectrogram"])["labels"]);
                    spectro_data_pay.push((item["spectrogram"])["data"]);
                    optimizer_labels_pay.push((item["optimizer_chart"])["labels"]);
                    optimizer_data_pay.push((item["optimizer_chart"])["data"]);
                })
                spectro_labels_pay.map((itemArray) => {
                    itemArray.map((item) => {
                        spectro_labels_real_pay.push(item);
                    })
                })
                this.setState({
                    spectro_labels_real_pay: spectro_labels_real_pay
                })

                console.log("spectChartLabels", spectro_labels_pay)
                // console.log("BBBB", spectro_labels_real)
                console.log("spectChartData", spectro_data_pay)
                console.log("optimizeChartLabels", optimizer_labels_pay)
                console.log("optimizeChartData", optimizer_data_pay)
            }.bind(this),
            error: function (error) {
                console.log('SubPayRecommendarUpdate Error', error);
            }
        });

        //Get Data For Sub-Dashboard(Product App) Product Appetite
        $.ajax({
            url: 'https://ceres.link/api/sub_board/prod_product/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("SubAppetiteUpdate", data);
                this.setState({ prod_product: data })

                mainTileTypesProd = Object.keys(data);
                console.log("mainTileTypesPay", mainTileTypesProd)

                this.setState({ mainTileTypesProd: mainTileTypesProd })

                mainTileTypesProd.map((key) => {
                    mainTileContentsProd.push(data[key]);
                })
                console.log("mainTileContent", mainTileContentsProd)
                this.setState({
                    mainTileContentsProd: mainTileContentsProd
                })

                mainTileContentsProd.map((item) => {
                    mainTileTitlesProd.push(Object.keys(item));
                })
                console.log("mainTileTitlesProd", mainTileTitlesProd);

                mainTileTitlesProd.map((itemArray) => {
                    itemArray.map((item) => {
                        mainTileTitlesRealProd.push(item);
                    })
                })
                console.log("mainTileTitlesRealProd", mainTileTitlesRealProd)

                this.setState({
                    mainTileTitlesRealProd: mainTileTitlesRealProd
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
                console.log('SubAppetiteUpdate Error', error);
            }
        });

        $.ajax({
            url: 'https://ceres.link/api/sub_board/smart_prod/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("SubAppetiteRecommendarUpdate", data);
                this.setState({ smart_prod: data })
                recommenderTypesProd = Object.keys(data);
                console.log("recommenderTypesPay", recommenderTypesProd);
                this.setState({
                    recommenderTypesProd: recommenderTypesProd
                })

                recommenderTypesProd.map((key) => {
                    recommenderContentsProd.push(data[key]);
                    htmlTxtProd.push(data[key]["text/html"]);
                })
                console.log("htmlTxtPay", htmlTxtPay)
                recommenderContentsProd.map((item) => {
                    spectro_labels_prod.push((item["spectrogram"])["labels"]);
                    spectro_data_prod.push((item["spectrogram"])["data"]);
                    optimizer_labels_prod.push((item["optimizer_chart"])["labels"]);
                    optimizer_data_prod.push((item["optimizer_chart"])["data"]);
                })
                spectro_labels_prod.map((itemArray) => {
                    itemArray.map((item) => {
                        spectro_labels_real_prod.push(item);
                    })
                })
                this.setState({
                    spectro_labels_real_prod: spectro_labels_real_prod
                })

                console.log("spectChartLabels", spectro_labels_prod)
                // console.log("BBBB", spectro_labels_real)
                console.log("spectChartData", spectro_data_prod)
                console.log("optimizeChartLabels", optimizer_labels_prod)
                console.log("optimizeChartData", optimizer_data_prod)
            }.bind(this),
            error: function (error) {
                console.log('SubAppetiteRecommendarUpdate Error', error);
            }
        });
    }
    componentDidUpdate() {
        var color_array = ['#4572a7', '#aa4643', '#89a54e', '#80699b', '#3d96ae', '#db843d'];
        (() => {
            $('#cpp_chart').html('');
            var pie2 = Rubix.Pie('#cpp_chart', {
                title: 'Customer Product Preferences',
                height: 300
            });

            var products_data = this.props.products_data;
            var tmp_array = [];
            for (var i in products_data) {
                var t = new Object;
                t.name = i;
                t.value = products_data[i].total;
                t.color = color_array[this.getObjectKeyIndex(products_data, i)];
                tmp_array.push(t);
            }
            pie2.addData(tmp_array);
        })();

        //CPA Chart
        (() => {
            $('#cpa_chart').html('');
            var chart = new Rubix('#cpa_chart', {
                height: 300,
                title: 'Customer Product Appetite',
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
                tooltip: {
                    color: '#D71F4B',
                    format: {
                        y: '.0f'
                    }
                },
                margin: {
                    left: 50
                },
                grouped: false,
                show_markers: true
            });

            var fruits = chart.column_series({
                name: 'Shopping Rate',
                color: '#D71F4B'
            });

            var tmp = this.props.products_data;
            var tmp_array = [];
            for (var i in tmp) {
                var t = new Object;
                t.x = i;
                t.y = tmp[i].total;
                tmp_array.push(t);
            }
            fruits.addData(tmp_array);
        })();
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
                                        <Tab.Pane eventKey="cpp">
                                            <div id="cpp_chart"></div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="cpa">
                                            <div id="cpa_chart"></div>
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