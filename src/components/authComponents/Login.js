import React from 'react';
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
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentWillReceiveProps(nextProps) {
  //   let loginData = {};
  //   loginData = nextProps.login;
  //   console.log("login AAAA", loginData);
  //   if (typeof (loginData) !== 'object') {
  //     this.errorNotification(loginData)
  //   }
  //     localStorage.setItem('apiKey', loginData.key);
  //     browserHistory.push('/ltr/executivedashboard');
    
  // }

  proceed_login = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { dispatch } = this.props;

    let un = ReactDOM.findDOMNode(this.username).value;
    let pw = ReactDOM.findDOMNode(this.password).value;

    dispatch(authActions.fetchLoginData(un, pw));

  }

  errorNotification(str) {
    Messenger().post({
      message: str,
      showCloseButton: true
    });
  }
  componentDidMount() {
    $('html').addClass('authentication');
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
                          <h3 style={{ margin: 0, padding: 25 }}>Log In</h3>
                        </div>
                        <div>
                          <div style={{ padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25 }}>
                            <Form onSubmit={this.proceed_login}>
                              <FormGroup controlId='username'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-mail' />
                                  </InputGroup.Addon>
                                  <FormControl autoFocus type='text' className='border-focus-blue' placeholder='Username' ref={(username) => this.username = username} />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup controlId='password'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroup.Addon>
                                  <FormControl type='password' className='border-focus-blue' placeholder='password' ref={(password) => this.password = password} />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <Grid>
                                  <Row>
                                    <Col xs={6} collapseLeft collapseRight style={{ paddingTop: 10 }}>
                                      <Link to="/ltr/signup">Create a CERES account</Link>
                                    </Col>
                                    <Col xs={6} collapseLeft collapseRight className='text-right'>
                                      <Button outlined lg type='submit' bsStyle='blue'>Login</Button>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col xs={6} collapseLeft collapseRight style={{ paddingTop: 10 }}>
                                      <Link to="/ltr/adminlogin">You have admin account?</Link>
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
            </Grid>
          </div>
        </div >
      </div >
    );
  }
}
