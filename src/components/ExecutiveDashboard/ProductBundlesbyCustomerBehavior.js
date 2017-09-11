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
export default class ProductBundlesbyCustomerBehavior extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prod_pay_keys: [],
      prod_pay_values: [],
      product_keys: [],
      product_values: []
    }
  }
  // componentDidMount() {
  //   let apiKey = '';
  //   apiKey = localStorage.getItem('apiKey');
  //   const { dispatch } = this.props;
  //   dispatch(execDashActions.fetchProductData(apiKey));
  //   dispatch(execDashActions.fetchProdPayData(apiKey));
  // }
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
    /////////////////Product Data Operation//////////////
    let temp_product = {};
    let product_keys = [];
    let product_values = [];

    temp_product = nextProps.product;
    product_keys = Object.keys(temp_product);

    product_keys.map((item) => {
      product_values.push(temp_product[item]["most popular"])
    })

    this.setState({
      product_keys: product_keys,
      product_values: product_values
    })
  }
  renderProdPayTiles = () => {
    let prod_pay_keys = [];
    let prod_pay_values = [];
    let temp_array = [];

    prod_pay_keys = this.state.prod_pay_keys;
    prod_pay_values = this.state.prod_pay_values;

    let prod_pay_tiles = [];
    if (prod_pay_keys.length > 0) {
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
                <p className="counts">counts</p>
              </div>
            </div>
          </div>
        )
      }
    }
    return prod_pay_tiles;
  //   prod_pay_keys.map((pay_key, index) => {
  //     prod_pay_values.map((pay_value) => {
  //         return <div className="prod_pay_tile" key={index}>
  //                     <p className="prod_pay_title">{pay_key}</p>
  //                     <p className="prod_pay_content">{pay_value[0]}</p>
  //                     <div className="prod_pay_bottom">
  //                         <p className="prod_pay_percent">{pay_value[1]}</p>
  //                         <div className="prod_pay_number_area">
  //                             <p className="prod_pay_number">{pay_value[2]}</p>
  //                             <p className="counts">counts</p>
  //                         </div>
  //                     </div>
  //                 </div>
  //     })
  // })
  }

  renderProductTiles = () => {
    let product_keys = [];
    let product_values = [];
    let temp_array = [];

    product_keys = this.state.product_keys;
    product_values = this.state.product_values;

    let product_tiles = [];
    for (let i = 0; i < product_keys.length; i++) {
      temp_array[i] = product_values[i];
      product_tiles.push(
        <div className="prod_pay_tile">
          <p className="prod_pay_title">{product_keys[i]}</p>
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
    return product_tiles;
  }

  render() {
    let prod_pay_keys = [];
    let prod_pay_values = [];
    let product_keys = [];
    let product_values = [];

    prod_pay_keys = this.state.prod_pay_keys;
    prod_pay_values = this.state.prod_pay_values;
    product_keys = this.state.product_keys;
    product_values = this.state.product_values;

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
                    {(product_keys !== null && product_values !== null) &&
                      <Tab.Pane eventKey="cpa">
                        {this.renderProductTiles()}
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