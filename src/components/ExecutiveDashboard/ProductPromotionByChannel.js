import React from 'react';
import { Link } from 'react-router';
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

// @withRouter
export default class ProductPromotionByChannel extends React.Component {
    //   getPath(path) {
    //     var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    //     path = `/${dir}/${path}`;
    //     return path;
    //   }
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
        let api_key = '';
        api_key = localStorage.getItem('api_key');
        //Get Data For Executive Dashboard SMA Product
        $.ajax({
            url: 'https://ceres.link/api/exec_board/sma_product/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("ExecProduct", data);
                let sma_product_keys = [];
                let sma_product_values = [];

                sma_product_keys = Object.keys(data);
                for (let i = 0; i < sma_product_keys.length; i++) {
                    sma_product_values.push(data[sma_product_keys[i]]["most popular"]);
                }
                this.setState({
                    sma_product_keys: sma_product_keys,
                    sma_product_values: sma_product_values
                })
            }.bind(this),
            error: function (error) {
                console.log('ExecProductError', error);
            }
        });

        //Get Data For Executive Dashboard DSA
        $.ajax({
            url: 'https://ceres.link/api/exec_board/dsa/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                let dsa_keys = [];
                let dsa_values = [];

                dsa_keys = Object.keys(data);
                for (let i = 0; i < dsa_keys.length; i++) {
                    dsa_values.push(data[dsa_keys[i]]["most popular"]);
                }
                this.setState({
                    dsa_keys: dsa_keys,
                    dsa_values: dsa_values
                })
            }.bind(this),
            error: function (error) {
                console.log('ExecDsaError', error);
            }
        });

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