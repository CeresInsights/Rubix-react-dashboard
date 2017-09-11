import React from 'react';
import { connect } from 'react-redux';
import * as subDashActions from '../../actions/subDashActions';
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
        dispatch(subDashActions.fetchPmaData(this.state.apiKey));
    }
    handleCsvClick = () => {
        const { dispatch } = this.props;
        dispatch(subDashActions.fetchProdPayCsvData(this.state.apiKey));
        dispatch(subDashActions.fetchProdProductCsvData(this.state.apiKey));
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