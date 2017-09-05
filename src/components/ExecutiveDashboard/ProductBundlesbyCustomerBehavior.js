import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as execDashActions from '../../actions/execDashActions';
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

@connect((state) => state)
export default class ProductBundlesbyCustomerBehavior extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prod_pay_keys: [],
            prod_pay_values: [],
            prod_product_keys: [],
            prod_product_values: []
        }
    }
    componentDidMount() {
        let temp = {};
        let apiKey = '';
        temp = this.props.login;
        apiKey = temp["key"];
        const { dispatch } = this.props;
        dispatch(execDashActions.fetchProdPayData(apiKey));
        dispatch(execDashActions.fetchProdProductData(apiKey));
    }
    componentWillReceiveProps(nextProps) {
        ///////ProdPay Data Operation///////////
        let temp_pay = {};
        let prod_pay_keys = [];
        let prod_pay_values = [];

        temp_pay = nextProps.prodPay;
        prod_pay_keys = Object.keys(temp_pay);

        prod_pay_keys.map((item) => {
            prod_pay_values.push(temp_pay[item]["most popular"])
        })

        this.setState({
            prod_pay_keys: prod_pay_keys,
            prod_pay_values: prod_pay_values
        })
        /////////////////ProdProduct Data Operation//////////////
        let temp_product = {};
        let prod_product_keys = [];
        let prod_product_values = [];

        temp_product = nextProps.prodProduct;
        prod_product_keys = Object.keys(temp_product);

        prod_product_keys.map((item) => {
            prod_product_values.push(temp_product[item]["most popular"])
        })

        this.setState({
            prod_product_keys: prod_product_keys,
            prod_product_values: prod_product_values
        })
    }
    renderProdPayTiles = () => {
        let prod_pay_keys = [];
        let prod_pay_values = [];
        let temp_array = [];

        prod_pay_keys = this.state.prod_pay_keys;
        prod_pay_values = this.state.prod_pay_values;

        let prod_pay_tiles = [];
        for (let i = 0; i < prod_pay_keys.length; i++) {
            temp_array[i] = prod_pay_values[i];
            prod_pay_tiles.push(
                <div className="prod_product_tile">
                    <p className="prod_product_title">{prod_pay_keys[i]}</p>
                    <p className="prod_product_content">{temp_array[i][0]}</p>
                    <div className="prod_product_bottom">
                        <p className="prod_product_percent">{temp_array[i][1]}</p>
                        <div className="prod_product_number_area">
                            <p className="prod_product_number">{temp_array[i][2]}</p>
                            <p>counts</p>
                        </div>
                    </div>
                </div>
            )
        }
        return prod_pay_tiles;
    }

    renderProdProductTiles = () => {
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
                            <p>counts</p>
                        </div>
                    </div>
                </div>
            )
        }
        return prod_product_tiles;
    }

    render() {
        let prod_pay_keys = [];
        let prod_pay_values = [];
        let prod_product_keys = [];
        let prod_product_values = [];

        prod_pay_keys = this.state.prod_pay_keys;
        prod_pay_values = this.state.prod_pay_values;
        prod_product_keys = this.state.prod_product_keys;
        prod_product_values = this.state.prod_product_values;

        return (
            <PanelTabContainer id='panel-body-header-footer-both-plain-tabs' defaultActiveKey="cpp">
                <Panel>
                    <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
                        <Grid>
                            <Row>
                                <Col xs={12} className="text-center">
                                    {/* <Link className="title_link" to={::this.getPath('sub_pbbcb')}><h4>Product Bundles by Consumer Behavior</h4></Link> */}
                                    <Link className="title_link" to="/ltr/sub_pbbcb"><h4>Product Bundles by Consumer Behavior</h4></Link>
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
                                        {(prod_pay_keys !== null && prod_pay_values !== null) &&
                                            <Tab.Pane eventKey="cpp">
                                                {this.renderProdPayTiles()}
                                            </Tab.Pane>
                                        }
                                        {(prod_product_keys !== null && prod_product_values !== null) &&
                                            <Tab.Pane eventKey="cpa">
                                                {this.renderProdProductTiles()}
                                            </Tab.Pane>
                                        }
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