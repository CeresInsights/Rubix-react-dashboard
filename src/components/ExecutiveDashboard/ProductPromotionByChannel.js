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
export default class ProductPromotionByChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dsa_keys: [],
            dsa_values: [],
            sma_product_keys: [],
            sma_product_values: [],
            dsa_data: {}
        }
    }
    componentDidMount() {
        let temp = {};
        let apiKey = '';
        temp = this.props.authReducer;
        apiKey = temp["key"];
        const { dispatch } = this.props;
        dispatch(execDashActions.fetchDsaData(apiKey));
        dispatch(execDashActions.fetchProductData(apiKey));
    }
    componentWillReceiveProps(nextProps) {
        ////////////////SMA Product Data operation/////////////////
        let temp_product = {};
        let sma_product_keys = [];
        let sma_product_values = [];
        
        temp_product = nextProps.product;
        sma_product_keys = Object.keys(temp_product);
        sma_product_keys.map((item) => {
            sma_product_values.push(temp_product[item]["most popular"])
        })
        this.setState({
            sma_product_keys: sma_product_keys,
            sma_product_values: sma_product_values
        })
        /////////////////DSA Data Operation/////////////////////
        let temp_dsa = {};
        let dsa_keys = [];
        let dsa_values = [];

        temp_dsa = nextProps.dsa;
        dsa_keys = Object.keys(temp_dsa);
        dsa_keys.map((item) => {
            dsa_values.push(temp_dsa[item]["most popular"])
        })
        this.setState({
            dsa_keys: dsa_keys,
            dsa_values: dsa_values
        })
    }

    renderSmaProductTiles = () => {
        let sma_product_keys = [];
        let sma_product_values = [];
        let temp_array = [];

        sma_product_keys = this.state.sma_product_keys;
        sma_product_values = this.state.sma_product_values;
        let product_tiles = [];
        for (let i = 0; i < sma_product_keys.length; i++) {
            temp_array[i] = sma_product_values[i];
            product_tiles.push(
                <div className="sma_product_tile">
                    <p className="sma_product_title">{sma_product_keys[i]}</p>
                    <p className="sma_product_content">{temp_array[i][0]}</p>
                    <div className="sma_product_bottom">
                        <p className="sma_product_percent">{temp_array[i][1]}</p>
                        <div className="sma_product_number_area">
                            <p className="sma_product_number">{temp_array[i][2]}</p>
                            <p>counts</p>
                        </div>
                    </div>
                </div>
            )
        }
        return product_tiles;
    }
    renderDsaTiles = () => {
        let dsa_keys = [];
        let dsa_values = [];
        let temp_array = [];

        dsa_keys = this.state.dsa_keys;
        dsa_values = this.state.dsa_values;

        let dsa_tiles = [];
        for (let i = 0; i < dsa_keys.length; i++) {
            temp_array[i] = dsa_values[i];
            dsa_tiles.push(
                <div className="dsa_tile">
                    <p className="dsa_title">{dsa_keys[i]}</p>
                    <p className="dsa_content">{temp_array[i][0]}</p>
                    <div className="dsa_bottom">
                        <p className="dsa_percent">{temp_array[i][1]}</p>
                        <div className="dsa_number_area">
                            <p className="dsa_number">{temp_array[i][2]}</p>
                            <p>counts</p>
                        </div>
                    </div>
                </div>
            )
        }
        return dsa_tiles;
    }
    render() {
        let sma_product_keys = [];
        let sma_product_values = [];
        let dsa_keys = [];
        let dsa_values = [];
        dsa_keys = this.state.dsa_keys;
        dsa_values = this.state.dsa_values;
        return (
            <PanelTabContainer id='panel-body-header-footer-both-plain-tabs' defaultActiveKey="sma">
                <Panel>
                    <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
                        <Grid>
                            <Row>
                                <Col xs={12} className="text-center">
                                    {/* <Link className="title_link" to={::this.getPath('sub_ppbc')}><h4>Product Promotion By Channel</h4></Link> */}
                                    <Link className="title_link" to="/ltr/sub_ppbc"><h4>Product Promotion By Channel</h4></Link>
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
                                        {(sma_product_keys !== null && sma_product_values !== null) &&
                                            <Tab.Pane eventKey="sma">
                                                {this.renderSmaProductTiles()}
                                            </Tab.Pane>
                                        }
                                        {(dsa_keys !== null && dsa_values !== null) &&
                                            <Tab.Pane eventKey="dsa">
                                                {this.renderDsaTiles()}
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