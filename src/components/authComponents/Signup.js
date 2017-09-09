import React from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import * as authActions from '../../actions/authActions';
import {
  Row,
  Col,
  Icon,
  Grid,
  Form,
  Badge,
  Panel,
  Button,
  PanelBody,
  FormGroup,
  LoremIpsum,
  InputGroup,
  FormControl,
  ButtonGroup,
  ButtonToolbar,
  PanelContainer,
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class Signup extends React.Component {
  back(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.router.goBack();
  }

  signup = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { dispatch } = this.props;
    let un = ReactDOM.findDOMNode(this.username).value;
    let pw = ReactDOM.findDOMNode(this.password).value;
    let email = ReactDOM.findDOMNode(this.email).value;
    let fn = ReactDOM.findDOMNode(this.firstname).value;
    let ln = ReactDOM.findDOMNode(this.lastname).value;
    let paycode = ReactDOM.findDOMNode(this.paycode).value;

    dispatch(authActions.fetchSignupData(un, pw, email, fn, ln, paycode));
  }
  componentWillReceiveProps(nextProps){
    let signupData = {};
    signupData = nextProps.signup;
    if(typeof(signupData)!=='object'){
      this.errorNotification(signupData);
    }
    
    if(signupData["status"] === 'User Registration Successful'){
      browserHistory.push('/ltr/login');
    }
  }
  errorNotification(str) {
    Messenger().post({
      message: str,
      showCloseButton: true
    });
  }
  componentDidMount() {
    $('html').addClass('authentication');
    Messenger.options = {
      theme: 'flat'
    };
  }

  componentWillUnmount() {
    $('html').removeClass('authentication');
  }
  render() {
    return (
      <div id='auth-container' className='login'>
        <div id='auth-row'>
          <div id='auth-cell'>
            <Grid>
              <Row>
                <Col sm={4} smOffset={4} xs={10} xsOffset={1} collapseLeft collapseRight>
                  <PanelContainer controls={false}>
                    <Panel>
                      <PanelBody style={{ padding: 0 }}>
                        <div className='text-center bg-darkblue fg-white'>
                          <h3 style={{ margin: 0, padding: 25 }}>Registration</h3>
                        </div>
                        <div>
                          <div style={{ padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25 }}>
                            <Form onSubmit={this.signup}>
                              <FormGroup controlId='username'>
                              <InputGroup bsSize='large'>
                                <InputGroup.Addon>
                                  <Icon glyph='icon-fontello-user' />
                                </InputGroup.Addon>
                                <FormControl autoFocus type='text' className='border-focus-blue' placeholder='Username' ref={(username) => this.username = username} />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup controlId='firstname'>
                              <InputGroup bsSize='large'>
                                <InputGroup.Addon>
                                  <Icon glyph='icon-fontello-user' />
                                </InputGroup.Addon>
                                <FormControl autoFocus type='text' className='border-focus-blue' placeholder='FirstName' ref={(firstname) => this.firstname = firstname} />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup controlId='lastname'>
                              <InputGroup bsSize='large'>
                                <InputGroup.Addon>
                                  <Icon glyph='icon-fontello-user' />
                                </InputGroup.Addon>
                                <FormControl autoFocus type='text' className='border-focus-blue' placeholder='LastName' ref={(lastname) => this.lastname = lastname} />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup controlId='email'>
                              <InputGroup bsSize='large'>
                                <InputGroup.Addon>
                                  <Icon glyph='icon-fontello-email' />
                                </InputGroup.Addon>
                                <FormControl autoFocus type='email' className='border-focus-blue' placeholder='Email Address' ref={(email) => this.email = email} />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup controlId='password'>
                              <InputGroup bsSize='large'>
                                <InputGroup.Addon>
                                  <Icon glyph='icon-fontello-key' />
                                </InputGroup.Addon>
                                <FormControl type='password' className='border-focus-blue' placeholder='Password' ref={(password) => this.password = password}/>
                              </InputGroup>
                            </FormGroup>
                            <FormGroup controlId='confirm_password'>
                              <InputGroup bsSize='large'>
                                <InputGroup.Addon>
                                  <Icon glyph='icon-fontello-key' />
                                </InputGroup.Addon>
                                <FormControl type='password' className='border-focus-blue' placeholder='Confirm Password' />
                              </InputGroup>
                            </FormGroup>

                            <FormGroup controlId='paycode'>
                              <InputGroup bsSize='large'>
                                <InputGroup.Addon>
                                  <Icon glyph='icon-fontello-dot-3' />
                                </InputGroup.Addon>
                                <FormControl autoFocus type='text' className='border-focus-blue' placeholder='Pay Code' ref={(paycode) => this.paycode =paycode} />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Grid>
                                <Row>
                                  <Col xs={12} collapseLeft collapseRight>
                                    <Button type='submit' outlined lg bsStyle='blue' block onClick={this.signup}>Create account</Button>
                                    <div className='text-center' style={{ marginTop: 25 }}>
                                      Already have an account? <Link to="/ltr/login">Login</Link>
                                    </div>
                                    <div className='text-center' style={{ marginTop: 25 }}>
                                      Have you already done email preregistration? <Link to="/ltr/queueemail">Email Preregistration</Link>
                                    </div>
                                    </Col>
                                  </Row>
                                </Grid>
                              </FormGroup>
                            </Form>
                          </div>
                        </div>
                      </PanelBody>
                    </Panel>
                  </PanelContainer>
                </Col>
              </Row>
            </Grid >
          </div >
        </div >
      </div >
    );
  }
}
