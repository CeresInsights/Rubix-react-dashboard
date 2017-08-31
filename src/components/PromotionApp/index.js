import React from 'react';
import ProductPromotionByChannel from './ProductPromotionByChannel';
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
    constructor(props) {
        super(props);
        this.state = {
            api_key: ''
        }
    }
    componentDidMount() {
        let api_key = '';
        api_key = localStorage.getItem('api_key');
        this.setState({ api_key: api_key })
    }
    handlePmaClick = () => {
        $.ajax({
            url: 'https://ceres.link/api/pma_request/api_key=' + this.state.api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("PMA data", data)
            }.bind(this),
            error: function (error) {
                console.log('PMA error', error);
            }
        });
    }
    handleCsvClick = () => {
        //SMA product
        $.ajax({
            url: 'https://ceres.link/api/sub_board/smart_product/csv/api_key=' + this.state.api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("CSV smart_product", data)
            }.bind(this),
            error: function (error) {
                console.log('CSV smart_product', error);
            }
        });
        //SMA dsa
        $.ajax({
            url: 'https://ceres.link/api/sub_board/smart_dsa/csv/api_key=' + this.state.api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                console.log("CSV smart_dsa", data)
            }.bind(this),
            error: function (error) {
                console.log('CSV smart_dsa', error);
            }
        });
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
export default class Promotion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='ppbc_wrapper'>
                <Row>
                    <Col sm={12}>
                        <ProductPromotionByChannel />
                        <ExportButtonGroup />
                    </Col>
                </Row>
            </div>
        );
    }
}
