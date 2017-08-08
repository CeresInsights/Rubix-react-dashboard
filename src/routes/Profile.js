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
      <div className='profile'>
      <Panel>
        <Row>
          <Col sm={12}>
            <div className="bg_img text-right">
              <Button md style={{marginBottom: 5}} className="follow_btn" bsStyle='primary'><Icon glyph='icon-feather-check' />FOLLOW</Button>
              <Button md style={{marginBottom: 5}} className="connect_btn" bsStyle='primary'><Icon glyph='icon-feather-link' />CONNECT</Button>
            </div>

            <Col sm={3} xs={12}>
              <div className="profile_img_wrapper text-right">
                <div className="imgWrapper text-right">
                  <img src="/imgs/app/profile_face1.jpg" />
                </div>
                <div className="clearfix"></div>
                <p> 1,543 </p>
                <span> Followers </span> 
                <p> 419 </p>
                <span> Connections </span>
              </div>
            </Col>
            <Col sm={6} xs={12} className="profile_content">
              <h1> John Doe </h1>
              <h2> CEO,SmartAdmin </h2>
              <p><Icon glyph='icon-fontello-phone-3' />(313) 464-6473</p>
              <p><Icon glyph='icon-fontello-mail-alt' /><a href="mail:ceo@smartadmin.com"> ceo@sartadmin.com </a></p>
              <p><Icon glyph='icon-ikons-skype' />john12 </p>
              <p><Icon glyph='icon-outlined-calendar' />Free after 4:30 PM </p>
              <h3> A little about me ... </h3>
              <span> Rubix is built on top of React which uses a Virtual DOM implementation for ultra-high performance and semantic markup coupled with CommonJS for composable Components.</span> <br/>
              <Button md style={{marginBottom: 5}} className='send_btn' bsStyle='primary'>SEND MESSAGE</Button>
            </Col>

            <Col sm={3} xs={12}>
            <Row className="connections_imgs_wrapper">
              <h2> Connections </h2>
              <Col sm={3}>
                <div className="connection_wrapper">
                  <img src="/imgs/app/profile_face2.jpg" />
                </div>
              </Col>
              <Col sm={3}>
                <div className="connection_wrapper">
                  <img src="/imgs/app/profile_face3.jpg" />
                </div>
              </Col>
              <Col sm={3}>
                <div className="connection_wrapper">
                  <img src="/imgs/app/profile_face2.jpg" />
                </div>
              </Col>
              <Col sm={3}>
                <div className="connection_wrapper">
                  <img src="/imgs/app/profile_face3.jpg" />
                </div>
              </Col>
              </Row>

              <Row className="connections_imgs_wrapper">
              <Col sm={3}>
                <div className="connection_wrapper">
                  <img src="/imgs/app/profile_face2.jpg" />
                </div>
              </Col>
              <Col sm={3}>
                <div className="connection_wrapper">
                  <img src="/imgs/app/profile_face3.jpg" />
                </div>
              </Col>
              <Col sm={6} className="more_link_wrapper">
                <div className="more_link">
                  <a href="#">413 more</a>
                </div>
              </Col>
              </Row>

              <Row className="connections_imgs_wrapper">
              <h2> Recent visitors </h2>
              <Col sm={3}>
                <div className="connection_wrapper">
                  <img src="/imgs/app/profile_face2.jpg" />
                </div>
              </Col>
              <Col sm={3}>
                <div className="connection_wrapper">
                  <img src="/imgs/app/profile_face3.jpg" />
                </div>
              </Col>
              <Col sm={3}>
                <div className="connection_wrapper">
                  <img src="/imgs/app/profile_face2.jpg" />
                </div>
              </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Panel>
      </div>
    );
  }
}
