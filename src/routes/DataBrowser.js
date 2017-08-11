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
  MenuItem
} from '@sketchpixy/rubix';

class DatatableComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $(ReactDOM.findDOMNode(this.example))
      .addClass('nowrap')
      .dataTable({
        retrieve: true,
        responsive: true
      });
  }

  componentDidUpdate() {
    $(ReactDOM.findDOMNode(this.example))
      .addClass('nowrap')
      .dataTable({
        retrieve: true,
        responsive: true
      });
  }
  render() {

    const table_data_ready = this.props.got_data;
    const bread_pk = this.props.pk;
    const bread_sk = this.props.sk;
    const bread_ck = this.props.ck;
    let breadcrumb;
    if (bread_ck != '') {
      breadcrumb = <Breadcrumb><Breadcrumb.Item>{bread_pk}</Breadcrumb.Item><Breadcrumb.Item>{bread_sk}</Breadcrumb.Item><Breadcrumb.Item>{this.props.ck}</Breadcrumb.Item></Breadcrumb>
    } else if (bread_sk != '') {
      breadcrumb = <Breadcrumb><Breadcrumb.Item>{bread_pk}</Breadcrumb.Item><Breadcrumb.Item>{bread_sk}</Breadcrumb.Item></Breadcrumb>
    } else if (bread_pk != '') {
      breadcrumb = <Breadcrumb><Breadcrumb.Item>{bread_pk}</Breadcrumb.Item></Breadcrumb>
    }
    return (
      <PanelContainer noOverflow className='table_panel_wrapper'>
        <Panel>
          <Grid>
            <Row>
              <Col xs={12}>
                {breadcrumb}
                {!table_data_ready ? (
                  <p> Please Select Keys </p>
                ) : (
                    <Table ref={(c) => this.example = c} className='display' cellSpacing='0' width='100%' id="tbl_data_browser">
                      <thead>
                        <tr>

                          {this.props.table_data_header.map(function (element, i) {
                            return <th key={i}> {element} </th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.table_data_content.map((row, i) =>
                          <tr key={i}>
                            {row.map((col, j) =>
                              <td key={j}>{col}</td>
                            )}
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  )
                }
              </Col>
            </Row>
          </Grid>
        </Panel>
      </PanelContainer>
    );
  }
}

export default class DataBrowser extends React.Component {

  componentDidMount() {

    let api_key = localStorage.getItem('api_key');

    let table_data_content = {};

    $.ajax({
      url: 'https://ceres.link/api/override/api_key=' + api_key,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log("DataBrowserUpdate", data);
        this.setState({
          table_data_content: data,

        })
      }.bind(this),
      error: function (error) {
        console.log('DataBrowserUpdate Error', error);
      }
    });

  }
    componentDidUpdate() {
      // let api_key = localStorage.getItem('api_key');
      // let third_changed = this.props.third_changed;
      // if (third_changed) {
      //   let got_data = this.state.got_data;
      //   if (!got_data) {
      //     $.ajax({
      //       url: 'https://ceres.link/api/graphview/api_key=' + api_key,
      //       dataType: 'json',
      //       type: 'GET',
      //       success: function (data) {
      //         var products_cnt = data[Object.keys(data)[0]].length;
      //         var products_data = [];
      //         for (var i = 0; i < products_cnt; i++) {
      //           var tmp_array = [];
      //           for (let element in data) {
      //             tmp_array.push(data[element][i]);
      //           }
      //           products_data.push(tmp_array);
      //         }
      //         this.setState({ table_data: data, table_data_ready: true, table_data_header: Object.keys(data), table_data_content: products_data, got_data: true });
      //       }.bind(this),
      //       error: function (error) {
      //         console.log(error);
      //       }
      //     })
      //   }
      // }
    }

    constructor(props) {
      super(props);
      this.state = {
        pri_key: [],
        pri_active_key: '',
        sec_key: [],
        sec_active_key: '',
        third_key: [],
        third_active_key: '',
        meta_data: {},
        table_data: {},
        table_data_ready: false,
        table_data_header: [],
        table_data_content: [],
        got_data: false
      };
    }
    render() {
      const ready = this.props.third_changed;
      return (
        <Row>
          <Col xs={12}>
            <PanelContainer>
              <Panel>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <DatatableComponent pk={this.props.pk} sk={this.props.sk} ck={this.props.ck} table_data_header={this.state.table_data_header} got_data={this.state.got_data} table_data_content={this.state.table_data_content} />
                        <br />
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
        </Row>
      );
    }
  }
