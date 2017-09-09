import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
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
            csr_total_market: '',
            csr_data: {},
            asi_data: '',
            prod_product_keys: [],
            prod_product_values: []
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
        let temp = {};
        let apiKey = ''
        temp = this.props.login;
        apiKey = temp["key"];
        console.log("apiKey", apiKey)
        const { dispatch } = this.props;
        dispatch(execDashActions.fetchMadData(apiKey));
        dispatch(execDashActions.fetchCsrData(apiKey));
        dispatch(execDashActions.fetchBdwData(apiKey));
        dispatch(execDashActions.fetchAsiData(apiKey));
        dispatch(execDashActions.fetchProdProductData(apiKey));
    }
    componentWillReceiveProps(nextProps) {

        //// sma channel data operation///////////
        let prod_product = {};
        let prod_product_keys = [];
        let prod_product_values = [];

        prod_product = nextProps.prodProduct;
        prod_product_keys = Object.keys(prod_product);

        prod_product_keys.map((item) => {
            prod_product_values.push(prod_product[item]["most popular"])
        })
        this.setState({
            prod_product_keys: prod_product_keys,
            prod_product_values: prod_product_values
        })
        /////////csr data operation//////////////
        let temp = {};
        temp = nextProps.csr;
        this.setState({ csr_total_market: temp["total_market_spend"] });
        this.setState({ csr_data: temp });
        ////////////api data operation/////////////
        this.setState({ asi_data: nextProps.asi });
        ////////////mad, bdw, csr data operation///////////
        (() => {
            $('#bdw_chart').html('');
            var bdw_chart = new Rubix('#bdw_chart', {
                height: 200,
                title: 'Customer Purchase Time Analysis',
                subtitle: 'Best Day Of Week',
                titleColor: '#D71F4B',
                subtitleColor: '#D71F4B',
                axis: {
                    x: {
                        type: 'ordinal',
                    },
                    y: {
                        type: 'linear',
                        tickFormat: '.2f',
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

            var bdw = bdw_chart.column_series({
                name: 'Shopping Rate',
                color: '#D71F4B'
            });

            var tmp = nextProps.bdw;
            var tmp_array = [];
            for (var i in tmp) {
                var t = {};
                t.x = i;
                t.y = tmp[i];
                tmp_array.push(t);
            }
            bdw.addData(tmp_array);

            //MAD chart
            $('#mad_chart').html('');
            var mad_chart = new Rubix('#mad_chart', {
                height: 200,
                title: 'Customer Purchase Time Analysis',
                subtitle: 'Monthly Activity Distribution',
                titleColor: '#D71F4B',
                subtitleColor: '#D71F4B',
                axis: {
                    x: {
                        type: 'ordinal',
                    },
                    y: {
                        type: 'linear',
                        tickFormat: '.2f',
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

            var mad = mad_chart.column_series({
                name: 'Shopping Rate',
                color: '#D71F4B'
            });

            tmp = nextProps.mad;
            tmp_array = [];
            for (var i in tmp) {
                var t = {};
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

            var csr_data = nextProps.csr;
            delete csr_data["total_market_spend"];
            var tmp_array = [];
            for (var i in csr_data) {
                var t = {};
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
                        tickFormat: '.0f',
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
                grouped: true,
            });

            var high_bar = csr_bar_chart.column_series({
                name: 'High',
                color: '#4F81BD'
            });
            var low_bar = csr_bar_chart.column_series({
                name: 'Low',
                color: '#C0504D',
            })

            var csr_data = nextProps.csr;
            delete csr_data["total_market_spend"];

            let high_array = [];
            let low_array = [];

            for (var i in csr_data) {
                var high = {};
                var low = {};
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

    renderProdProduct = () => {
        let prod_product_keys = [];
        let prod_product_values = [];
        let temp_array = [];

        prod_product_keys = this.state.prod_product_keys;
        prod_product_values = this.state.prod_product_values;

        let prod_product_tiles = [];
        for (let i = 0; i < prod_product_keys.length; i++) {
            temp_array[i] = prod_product_values[i];
            prod_product_tiles.push(
                <div className="prod_pay_tile">
                    <p className="prod_pay_title">{prod_product_keys[i]}</p>
                    <p className="prod_pay_content">{temp_array[i][0]}</p>
                    <div className="prod_pay_bottom">
                        <p className="prod_pay_percent">{temp_array[i][1]}</p>
                        <div className="prod_pay_number_area">
                            <p className="prod_pay_number">{temp_array[i][2]}</p>
                            <p className="counts">counts</p>
                        </div>
                    </div>
                </div>
            )
        }
        return prod_product_tiles;
    }
    render() {

        return (
            <PanelTabContainer id='campaigns_promotions_loyaltypanel' defaultActiveKey="cpta">
                <Panel>
                    <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
                        <Grid>
                            <Row>
                                <Col xs={12} className="text-center">
                                    <Link className="title_link" to="/sub_campaigns"><h4>Campaigns,Promotions, and Loyalty Optimization </h4></Link>
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
                                        {(this.state.prod_product_keys !== null && this.state.prod_product_values) &&
                                            <Tab.Pane eventKey="ple">
                                                {this.renderProdProduct()}
                                            </Tab.Pane>
                                        }
                                        <Tab.Pane eventKey="csr">
                                            <div id="csr_pie_chart"></div>
                                            <div id="csr_bar_chart"></div>
                                            <Col md={12}>
                                                {Object.keys(this.state.csr_data).length !== 0 &&
                                                    <div className="csr_tile">
                                                        <p className="csr_title">Total Market Spend</p>
                                                        <p className="csr_content">{this.state.csr_total_market}</p>
                                                    </div>
                                                }
                                            </Col>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelTabContainer >
        );
    }
}