import React from 'react';
import { Link } from 'react-router';

import {
  Row,
  Col,
  Icon,
  Lead,
  Grid,
  Panel,
  Button,
  PanelBody,
  LoremIpsum,
  PanelHeader,
  PanelContainer,
  ResponsiveEmbed,
  Progress,
  Form, FormGroup, InputGroup, FormControl
} from '@sketchpixy/rubix';

export default class LoadData extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      api_key: '',
      progress_flag: false
    }
  }
  componentDidMount() {
    // Messenger.options = {
    //   theme: 'flat'
    // };
    let api_key = '';
    api_key = localStorage.getItem('api_key');
    this.setState({
      api_key: api_key
    })
      
  }
  // handleClick(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   let email = $('#email').val();
  //   $.ajax({
  //     url: 'http://ceres.link/api/email/queue/data:email=' + email,
  //     dataType: 'json',
  //     type: 'GET',
  //     success: function (data) {
  //       this.errorNotification(data);
  //     }.bind(this),
  //     error: function (error) {
  //       console.log(error);
  //     }
  //   })
  // }
  handleClick = (e) => {
    // this.setState({
    //   progress_flag: true
    // })
    e.preventDefault();
    e.stopPropagation();
    let dataLoad = '';
    dataLoad = $('#dataLoad').val();
    console.log("AAAAAAAA", dataLoad)
    if(dataLoad!==undefined){
      this.setState({
        progress_flag: true
      })
    }
    $.ajax({
      url: 'https://ceres.link/api/add_data/api_key='+this.state.api_key+';data:'+dataLoad,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        if(data!==undefined){
          this.setState({
            progress_flag: false
          })
        }
        console.log("Successful Data Loader", data)
      }.bind(this),
      error: function (error) {
        console.log("DataLoadError", error);
      }
    })
  }

  // errorNotification(str) {
  //   Messenger().post({
  //     message: str,
  //     showCloseButton: true
  //   });
  // }
  render() {
    return (
      <Panel>
        <Row>
          <Col xs={12}>
            <p>Please Input the user data URL</p>
            <Form>
              <FormGroup controlId='dataLoad'>
                <InputGroup bsSize='large'>
                  <InputGroup.Addon>
                    <Icon bundle='glyphicon' glyph='align-justify' />
                  </InputGroup.Addon>
                  <FormControl autoFocus type='dataLoad' className='border-focus-blue' placeholder='Data Load URL' />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Grid>
                  <Row>
                    <Col xs={12} collapseLeft collapseRight className='text-right'>
                      <Button outlined lg type='submit' bsStyle='blue' onClick={this.handleClick}>Load Data</Button>
                      </Col>
                    </Row>
                  </Grid>
              </FormGroup>       
            </Form>       
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          {this.state.progress_flag&&
            <Progress active value={100} />
          }
          </Col>
        </Row>
      </Panel >
    );
  }
}
