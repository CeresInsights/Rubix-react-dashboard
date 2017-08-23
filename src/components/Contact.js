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
export default class Contact extends React.Component {
  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
  }

  render() {
    return (
      <div className='contact'>
      <Panel>
        <Row>
          <Col sm={12}>
            <div id="bg_img"></div>
            <Col sm={6} xs={12}>
              <h1 className="contact_title"> Contact us </h1>
              <p> Don't hesitate to contact us. We are here to help you </p>
              <Form>
                  <FormGroup controlId='username'>
                  <InputGroup bsSize='large'>
                    <InputGroup.Addon>
                      <Icon glyph='icon-stroke-gap-icons-User' />
                    </InputGroup.Addon>
                    <FormControl autoFocus type='text' className='border-focus-blue' placeholder='First name and last name' />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId='emailaddress'>
                  <InputGroup bsSize='large'>
                    <InputGroup.Addon>
                      <Icon glyph='icon-fontello-mail' />
                    </InputGroup.Addon>
                    <FormControl autoFocus type='email' className='border-focus-blue' placeholder='Email' />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId='phone'>
                  <InputGroup bsSize='large'>
                    <InputGroup.Addon>
                      <Icon glyph='icon-ikons-iphone' />
                    </InputGroup.Addon>
                    <FormControl type='phone' className='border-focus-blue' placeholder='Phone' />
                  </InputGroup>
                </FormGroup>
                <FormGroup controlId='message' className="message_wrapper">
                  <InputGroup bsSize='large'>
                    <InputGroup.Addon>
                      <Icon glyph='icon-fontello-pencil' />
                    </InputGroup.Addon>
                    <FormControl componentClass='textarea' rows='3' placeholder='Some text here...' />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Grid>
                    <Row>
                      <Col xs={6} collapseLeft collapseRight className='text-left'>
                        <Button outlined lg type='submit' bsStyle='blue'>Submit</Button>
                      </Col>
                    </Row>
                  </Grid>
                </FormGroup>
              </Form>
            </Col>
            <Col sm={6} xs={12}>
              <h1 className="contact_title sec"> About Company </h1>
              <p> We are both a consulting firm and technology company. Our focus is in partnering with our clients to provide you with the insight you need to complete in the Digital Economy </p>
              <p> Ceres leverages our propriteary Artifical Intelligence Powered Customer Insights Platform to not only analyze and predit customer behavior and intentions across multiple channels and devices, but our patented Ceres Intelligent Recommendation Engine provides suggested best courses of action which allows our clients to make informed decisions to structure such programs in real-time to target attractive customer segments and channels.</p>
              <div className="text-center">
                <img src='/imgs/common/logo.png' width="250" alt='Logo' />
                <p> Email: <a href="mail:info@ceres-a-i.com">info@ceres-a-i.com </a></p>
              </div>
            </Col>
          </Col>
        </Row>
      </Panel>
      </div>
    );
  }
}
