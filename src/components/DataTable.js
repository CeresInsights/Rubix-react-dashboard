import React from 'react';
import ReactDOM from 'react-dom';

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

export default class DatatableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pk: '',
            sk: '',
            ck: '',
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
        // $(ReactDOM.findDOMNode(this.example))
        //     .addClass('nowrap')
        //     .dataTable({
        //         retrieve: true,
        //         responsive: true
        //     });

        let api_key = localStorage.getItem('api_key');
        $.ajax({
            url: 'https://ceres.link/api/graphmeta/api_key=' + api_key,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.setState({
                    pri_keys: Object.keys(data),
                    initial_data: data
                })
            }.bind(this),
            error: function (error) {
                console.log(error);
            }
        })

        let pk = 'country';
        let sk = 'united_states';
        let ck = 'purchase_log_csv';

        // let pk = 'country';
        // let sk = 'united_states';
        // let ck = 'customer_profile_csv';
        $.ajax({
            url: 'https://ceres.link/api/override/api_key=' + api_key + ';data:pk=' + pk + ',sk=' + sk + ',ck=' + ck,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                let table_data_header = [];
                let table_data_content = [];
                // let length_array = [];

                table_data_header = Object.keys(data);
                table_data_header.map((header, item) => {
                    table_data_content.push(data[header])
                })
                // table_data_content.map((content) => {
                //    length_array.push(content.length);   
                // })
                this.setState({
                    table_data_header: table_data_header,
                    table_data_content: table_data_content,
                    // max_length: Math.max(...length_array)
                })
                console.log("Default Successful Key Get Message", data)
            }.bind(this),
            error: function (error) {
                console.log("Default Failure Key Get Msg", error);
            }
        });
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

        let api_key = localStorage.getItem('api_key');
        let initial_data = this.state.initial_data;
        let sec_keys = [];
        let pri_values = {};
        let third_keys = [];
        let pk = '';
        let sk = '';
        let ck = '';

        if (keyKind == 'primary') {

            localStorage.setItem('pk', keyVal);
            pri_values = initial_data[keyVal];
            sec_keys = Object.keys(pri_values);
            this.setState({
                pk_selected: true,
                pk: keyVal,
                pri_values: pri_values,
                sec_keys: sec_keys
            })
            $.ajax({
                url: 'https://ceres.link/api/override/api_key=' + api_key + ';data:pk=' + keyVal + ',sk=united_states,ck=purchase_log_csv',
                dataType: 'json',
                type: 'GET',
                success: function (data) {
                    console.log("Successful Key Get Message", data)
                }.bind(this),
                error: function (error) {
                    console.log("Failure Key Get Msg", error);
                }
            });

        }
        if (this.state.pk_selected && keyKind == 'second') {
            localStorage.setItem('sk', keyVal);
            third_keys = this.state.pri_values[keyVal];
            this.setState({
                sk: keyVal,
                sk_selected: true,
                third_keys: third_keys
            })
            $.ajax({
                url: 'https://ceres.link/api/override/api_key=' + api_key + ';data:pk=' + this.state.pk + ',sk=' + keyVal + ',ck=purchase_log_csv',
                dataType: 'json',
                type: 'GET',
                success: function (data) {

                    console.log("Successful Key Get Message", data)
                }.bind(this),
                error: function (error) {
                    console.log("Failure Key Get Msg", error);
                }
            });
        }
        if (this.state.pk_selected && this.state.sk_selected && keyKind == 'third') {
            localStorage.setItem('ck', keyVal);
            this.setState({
                ck_selected: true,
                ck: keyVal
            })
            $.ajax({
                url: 'https://ceres.link/api/override/api_key=' + api_key + ';data:pk=' + this.state.pk + ',sk=' + this.state.sk + ',ck=' + keyVal,
                dataType: 'json',
                type: 'GET',
                success: function (data) {
                    let table_data_header = [];
                    let table_data_content = [];
    
                    table_data_header = Object.keys(data);
                    table_data_header.map((header, item) => {
                        table_data_content.push(data[header])
                    })
                    this.setState({
                        table_data_header: table_data_header,
                        table_data_content: table_data_content
                    })
                    console.log("Successful Key Get Message", data)
                }.bind(this),
                error: function (error) {
                    console.log("Failure Key Get Msg", error);
                }
            });
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