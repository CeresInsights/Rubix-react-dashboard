import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as dataActions from '../actions/dataActions';
import {
    Row,
    Col,
    Grid,
    Panel,
    Table,
    PanelBody,
    PanelHeader,
    FormControl,
    PanelContainer,
    DropdownButton,
    Breadcrumb,
    Button,
    Well,
    MenuItem
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class DatatableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pk: '',
            sk: '',
            ck: '',
            pri_title: '',
            sec_title: '',
            third_title: '',
            table_data_header: [],
            table_data_content: [],
            max_length: 0,
            pri_keys: [],
            pri_values: {},
            pk: '',
            pk_selected: false,
            sec_keys: [],
            sk: '',
            sk_selected: false,
            third_keys: [],
            ck: '',
            ck_selected: false,
            initial_data: {},
        };
    }
    componentWillMount() {
        let apiKey = '';
        apiKey = localStorage.getItem('apiKey');
        this.setState({ apiKey: apiKey })

        let temp_allKeys = {};
        let temp_defaultBrowserData = {};
        let table_data_header = [];
        let table_data_content = [];

        temp_defaultBrowserData = this.props.defaultBrowserData;
        temp_allKeys = this.props.allKeys;
        this.setState({
            pri_keys: Object.keys(temp_allKeys),
            initial_data: temp_allKeys
        })
        /////Initial Table header and body data//////////////////////
        if (Object.keys(temp_defaultBrowserData).length !== 0) {
            let table_data_header_default = [];
            let table_data_content_default = [];
            table_data_header_default = Object.keys(temp_defaultBrowserData);
            table_data_header_default.map((header, index) => {
                table_data_content_default.push(temp_defaultBrowserData[header])
            })
            this.setState({
                table_data_header: table_data_header_default,
                table_data_content: table_data_content_default
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        const { dispatch } = this.props;
        let temp_selectedBrowserData = {};
        temp_selectedBrowserData = nextProps.selectedBrowserData;
        //////////Select option initial data///////////////

        let table_data_header = [];
        let table_data_content = [];

        /////////////dynamic table header and body data//////////
        if (Object.keys(temp_selectedBrowserData).length !== 0) {
            let table_data_header_selected = [];
            let table_data_content_selected = [];

            table_data_header_selected = Object.keys(temp_selectedBrowserData);
            table_data_header_selected.map((header, index) => {
                table_data_content_selected.push(temp_selectedBrowserData[header])
            })
            this.setState({
                table_data_header: table_data_header_selected,
                table_data_content: table_data_content_selected
            })

        }
    }
    handleClick(keyVal, keyKind) {

        let initial_data = this.state.initial_data;
        let sec_keys = [];
        let pri_values = {};
        let third_keys = [];
        let pk = '';
        let sk = '';
        let ck = '';
        const { dispatch } = this.props;
        if (keyKind == 'primary') {
            pri_values = initial_data[keyVal];
            sec_keys = Object.keys(pri_values);
            this.setState({
                pk_selected: true,
                pk: keyVal,
                pri_values: pri_values,
                sec_keys: sec_keys
            })
        }
        if (this.state.pk_selected && keyKind == 'second') {
            third_keys = this.state.pri_values[keyVal];
            this.setState({
                sk: keyVal,
                sk_selected: true,
                third_keys: third_keys
            });
        }
        if (this.state.pk_selected && this.state.sk_selected && keyKind == 'third') {
            this.setState({
                ck_selected: true,
                ck: keyVal
            })
            dispatch(dataActions.fetchSelectedBrowserData(this.state.apiKey, this.state.pk, this.state.sk, keyVal));
        }

    }
    handleClearKeys = () => {
        this.setState({
            pk: '',
            sk: '',
            ck: '',
        })
        const { dispatch } = this.props;
        dispatch(dataActions.fetchSelectedBrowserData(this.state.apiKey, 'country', 'united_states', 'purchase_log_csv'));
    }

    render() {
        let _this = this;
        let pri_title = '', sec_title = '', third_title = '';

        let breadcrumb = ''
        let breadcrumb_pk = 'country';
        let breadcrumb_sk = 'united_states';
        let breadcrumb_ck = 'purchase_log_csv';

        if (this.state.pk === '') {
            this.state.pri_title = 'Data Scope';
        } else {
            this.state.pri_title = this.state.pk;
            breadcrumb_pk = this.state.pk;
        }
        if (this.state.sk === '') {
            this.state.sec_title = 'Scope Type';
        } else {
            this.state.sec_title = this.state.sk;
            breadcrumb_sk = this.state.sk;
        }
        if (this.state.ck === '') {
            this.state.third_title = 'Scope Context';
        } else {
            this.state.third_title = this.state.ck;
            breadcrumb_ck = this.state.ck;
        }

        breadcrumb = <Well>
            <Breadcrumb>
                <Breadcrumb.Item>{breadcrumb_pk}</Breadcrumb.Item>
                <Breadcrumb.Item>{breadcrumb_sk}</Breadcrumb.Item>
                <Breadcrumb.Item>{breadcrumb_ck}</Breadcrumb.Item>
            </Breadcrumb>
        </Well>
        return (
            <PanelContainer overflow className='table_panel_wrapper'>
                <Panel>
                    <Grid>
                        <Row>
                            <Col md={2}>
                                <DropdownButton bsStyle='darkgreen45' title={this.state.pri_title} id='primary_dropdown'>
                                    {this.state.pri_keys.map(function (keyVal, i) {
                                        return (<MenuItem key={i} eventKey={i} onSelect={() => _this.handleClick(keyVal, 'primary')}>{keyVal}</MenuItem>);
                                    })}
                                </DropdownButton>
                            </Col>
                            <Col md={2}>
                                <DropdownButton bsStyle='darkgreen45' title={this.state.sec_title} id='secondary_dropdown'>
                                    {this.state.sec_keys.map(function (keyVal, i) {
                                        return (<MenuItem key={i} eventKey={i} onSelect={() => _this.handleClick(keyVal, 'second')}>{keyVal}</MenuItem>);
                                    })}
                                </DropdownButton>
                            </Col>
                            <Col md={2}>
                                <DropdownButton bsStyle='darkgreen45' title={this.state.third_title} id='teritary_dropdown'>
                                    {this.state.third_keys.map(function (keyVal, i) {
                                        return (<MenuItem key={i} eventKey={i} onSelect={() => _this.handleClick(keyVal, 'third')}>{keyVal}</MenuItem>);
                                    })}
                                </DropdownButton>
                            </Col>
                            <Col md={2}>
                                <Button bsStyle='danger' onClick={this.handleClearKeys}>Clear Selections</Button>
                            </Col>
                            <Col md={4}>
                                {breadcrumb}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                {
                                    <Table ref={(c) => this.example = c} className='display' cellSpacing='0' width='100%' id="tbl_data_browser">
                                        <thead>
                                            <tr>
                                                {this.state.table_data_header.map(function (element, i) {
                                                    return <th key={i}> {element} </th>;
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.table_data_content[0] && this.state.table_data_content[0].map((row, i) => {
                                                return <tr key={i}>
                                                    {
                                                        this.state.table_data_content.map((col, j) => {
                                                            return <td key={j}>{col[i]}</td>
                                                        })
                                                    }
                                                </tr>
                                            }
                                            )}
                                        </tbody>
                                    </Table>
                                }
                            </Col>
                        </Row>
                    </Grid>
                </Panel >
            </PanelContainer >
        );
    }
}