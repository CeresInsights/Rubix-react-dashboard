import { connect } from 'react-redux';
import React from 'react';
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
export default class ExportButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: ''
    }
  }
  componentDidMount() {
    // let temp = {};
    // let apiKey = '';
    // temp = this.props.login;
    // apiKey = temp["key"];
    let apiKey = '';
    apiKey = localStorage.getItem('apiKey');
    this.setState({ apiKey: apiKey })

  }
  handlePmaClick = () => {
    const { dispatch } = this.props;
    dispatch(execDashActions.fetchPmaData(this.state.apiKey));
  }
  handleCsvClick = () => {
    const { dispatch } = this.props;
    dispatch(execDashActions.fetchBdwCsvData(this.state.apiKey));
    dispatch(execDashActions.fetchChannelCsvData(this.state.apiKey));
    dispatch(execDashActions.fetchProductCsvData(this.state.apiKey));
    dispatch(execDashActions.fetchDsaCsvData(this.state.apiKey));
    dispatch(execDashActions.fetchDemographicsCsvData(this.state.apiKey));
    dispatch(execDashActions.fetchProdPayCsvData(this.state.apiKey));
    dispatch(execDashActions.fetchMadCsvData(this.state.apiKey));
    dispatch(execDashActions.fetchProdProductCsvData(this.state.apiKey));
    dispatch(execDashActions.fetchAsiCsvData(this.state.apiKey));
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
                    <Button href="#" bsStyle='blue' onClick={this.handlePmaClick}>Push to Marketing Automation</Button>
                    <Button href="#" bsStyle='blue' onClick={this.handleCsvClick}>Export to CSV</Button>
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