import React from 'react';
import { Link, withRouter } from 'react-router';

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
  Form,FormGroup, InputGroup,FormControl
} from '@sketchpixy/rubix';

@withRouter
export default class SendEmail extends React.Component {
  componentDidMount(){
    Messenger.options = {
      theme: 'flat'
    };
  }
  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  handleClick(e){
    e.preventDefault();
    e.stopPropagation();
    let email = $('#email').val();
    $.ajax({
      url: 'http://ceres.link/api/email/queue/data:email='+email,
      dataType: 'json',
      type: 'GET',
      success:function(data){
        this.errorNotification(data);
      }.bind(this),
      error:function(error){
        console.log(error);
      }
    })
  }

  errorNotification(str) {
    Messenger().post({     
      message: str,
      showCloseButton: true
    });
  }
  render() {
    return (
      <Panel>
        <Row>
          <Col sm={12}>
            <div id="bg_img"></div>
            <Col xs={12}>
              <h1 className="contact_title"> Send PayCode </h1>
              <p> Send pay code to this email address</p>
              <Form>
                <FormGroup controlId='email'>
                  <InputGroup bsSize='large'>
                    <InputGroup.Addon>
                      <Icon glyph='icon-fontello-mail' />
                    </InputGroup.Addon>
                    <FormControl autoFocus type='email' className='border-focus-blue' placeholder='Email Address' />
                  </InputGroup>
                </FormGroup>     
                <FormGroup>
                  <Grid>
                    <Row>
                      <Col xs={12} collapseLeft collapseRight className='text-right'>
                        <Button outlined lg type='submit' bsStyle='blue' onClick={::this.handleClick}>Send PayCode</Button>
                      </Col>
                    </Row>
                  </Grid>
                </FormGroup>       
              </Form>
            </Col>          
          </Col>
        </Row>
      </Panel>
    );
  }
}
