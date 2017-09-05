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
    Well,
    MenuItem
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class DatatableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pk: 'country',
            sk: 'united_states',
            ck: 'purchase_log_csv',
            table_data_header: [],
            table_data_content: [],
            // max_length: 0,
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
    componentDidMount() {
        let temp = {};
        let apiKey = ''
        temp = this.props.login;
        apiKey = temp["key"];
        console.log("apiKey", apiKey)
        const { dispatch } = this.props;
        dispatch(dataActions.fetchFilterContentData(apiKey));
        dispatch(dataActions.fetchBrowserData(apiKey));
        this.setState({ apiKey: apiKey })
    }
    componentWillReceiveProps(nextProps) {
        const { dispatch } = this.props;
        let temp_allKeys = {};
        let temp_browserData = {};
        let temp_selectedKeys = {};

        temp_allKeys = nextProps.allKeys;
        temp_browserData = nextProps.browserData;
        temp_selectedKeys = nextProps.selectedKeys;
        //////////Select option initial data///////////////
        this.setState({
            pri_keys: Object.keys(temp_allKeys),
            initial_data: temp_allKeys
        })

        let table_data_header = [];
        let table_data_content = [];
        // let length_array = [];

        ///////Initial Table header and body data//////////////////////
        table_data_header = Object.keys(temp_browserData);
        table_data_header.map((header, item) => {
            table_data_content.push(temp_browserData[header])
        })
        // table_data_content.map((content) => {
        //    length_array.push(content.length);   
        // })
        this.setState({
            table_data_header: table_data_header,
            table_data_content: table_data_content,
            // max_length: Math.max(...length_array)
        })
        /////////////dynamic table header and body data//////////
        if (Object.keys(temp_selectedKeys).length !== 0){
            let table_data_header = [];
            let table_data_content = [];

            table_data_header = Object.keys(temp_selectedKeys);
            table_data_header.map((header, item) => {
                table_data_content.push(temp_selectedKeys[header])
            })
            this.setState({
                table_data_header: table_data_header,
                table_data_content: table_data_content
            })
        }
    }

    // componentDidUpdate() {
    //     $(ReactDOM.findDOMNode(this.example))
    //         .addClass('nowrap')
    //         .dataTable({
    //             retrieve: true,
    //             responsive: true
    //         });
    // }
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
            dispatch(dataActions.fetchSelectedKeysData(this.state.apiKey, keyVal, 'united_states', 'purchase_log_csv'));
        }
        if (this.state.pk_selected && keyKind == 'second') {
            third_keys = this.state.pri_values[keyVal];
            this.setState({
                sk: keyVal,
                sk_selected: true,
                third_keys: third_keys
            });
            dispatch(dataActions.fetchSelectedKeysData(this.state.apiKey, this.state.pk, keyVal, 'purchase_log_csv'));
        }
        if (this.state.pk_selected && this.state.sk_selected && keyKind == 'third') {
            this.setState({
                ck_selected: true,
                ck: keyVal
            })
            dispatch(dataActions.fetchSelectedKeysData(this.state.apiKey, this.state.pk, this.state.sk, keyVal));
        }

    }

    render() {
        let _this = this;
        let pri_title = '', sec_title = '', third_title = '';
        let bread_pk = this.state.pk;
        let bread_sk = this.state.sk;
        let bread_ck = this.state.ck;
        let breadcrumb = '';

        if (bread_pk == '') {
            pri_title = 'Data Scope';
        } else {
            pri_title = bread_pk;
        }

        if (bread_sk == '') {
            sec_title = 'Scope Type';
        } else {
            sec_title = bread_sk;
        }

        if (bread_ck == '') {
            third_title = 'Scope Context';
        } else {
            third_title = bread_ck;
        }

        breadcrumb = <Well>
            <Breadcrumb>
                <Breadcrumb.Item>{bread_pk}</Breadcrumb.Item>
                <Breadcrumb.Item>{bread_sk}</Breadcrumb.Item>
                <Breadcrumb.Item>{bread_ck}</Breadcrumb.Item>
            </Breadcrumb>
        </Well>
        return (
            <PanelContainer noOverflow className='table_panel_wrapper'>
                <Panel>
                    <Grid>
                        <Row>
                            <Col xs={2}>
                                <DropdownButton bsStyle='darkgreen45' title={pri_title} id='primary_dropdown'>
                                    {this.state.pri_keys.map(function (keyVal, i) {
                                        return (<MenuItem key={i} eventKey={i} onSelect={() => _this.handleClick(keyVal, 'primary')}>{keyVal}</MenuItem>);
                                    })}
                                </DropdownButton>
                            </Col>
                            <Col xs={3}>
                                <DropdownButton bsStyle='darkgreen45' title={sec_title} id='secondary_dropdown'>
                                    {this.state.sec_keys.map(function (keyVal, i) {
                                        return (<MenuItem key={i} eventKey={i} onSelect={() => _this.handleClick(keyVal, 'second')}>{keyVal}</MenuItem>);
                                    })}
                                </DropdownButton>
                            </Col>
                            <Col xs={3}>
                                <DropdownButton bsStyle='darkgreen45' title={third_title} id='teritary_dropdown'>
                                    {this.state.third_keys.map(function (keyVal, i) {
                                        return (<MenuItem key={i} eventKey={i} onSelect={() => _this.handleClick(keyVal, 'third')}>{keyVal}</MenuItem>);
                                    })}
                                </DropdownButton>
                            </Col>
                            <Col xs={4}>
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
                                            {this.state.table_data_content.map((row, i) =>
                                                <tr key={i}>
                                                    {row.map((col, j) =>
                                                        <td key={j}>{col}</td>
                                                    )}
                                                </tr>
                                            )}
                                            {/* {this.state.table_data_content.map((colItem, i) =>
                                                
                                                colItem.map((rowItem, j) => {
                                                    <tr key={j}>
                                                        <td>asdfadsfasdf</td>
                                                    </tr>
                                                })

                                            )} */}
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