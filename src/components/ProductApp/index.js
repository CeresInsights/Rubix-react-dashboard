import React from 'react';
import ProductBundlesbyCustomerBehavior from './ProductBundlesbyCustomerBehavior';

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

class ExportButtonGroup extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <PanelTabContainer id='real-time-location-analysis-panel-tab' defaultActiveKey="rpa">
        <Panel>
          <PanelHeader className='bg-blue fg-white' style={{ display: 'block' }}>
            <Grid>
              <Row>
                <Col xs={12} className="text-center">
                  <h4>Export Dashboard</h4>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <ButtonGroup justified>
                    <Button href="#" bsStyle='blue'>Send Customized Email</Button>
                    <Button href="#" bsStyle='blue'>Push to Marketing Automation</Button>
                    <Button href="#" bsStyle='blue'>Export to CSV</Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelTabContainer>
    );
  }
}

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='execdashboard'>
        <Row>
          <Col sm={12}>
            <ProductBundlesbyCustomerBehavior />
            <ExportButtonGroup />
          </Col>
        </Row>
      </div>
    );
  }
}
