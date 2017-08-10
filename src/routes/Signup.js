import React from 'react';
import classNames from 'classnames';
import { Link, withRouter,browserHistory} from 'react-router';

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

@withRouter
export default class Signup extends React.Component {
  back(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.router.goBack();
  }

  signup(e){
    e.preventDefault();
    e.stopPropagation();
    var un = $('#username').val();
    var pw = $('#password').val();
    var t  = $('#paycode').val();
    var e  = $('#email').val();
    $.ajax({
      url: 'https://ceres.link/api/register/data:un='+un+',pw='+pw+',t='+t+',e='+e+',fn="",ln="",s="Male",dobm="",dobd="",doby=""',
      dataType: 'json',
      type: 'GET',
      success:function(data){        
        if(data.status=='User Registration Successful'){
          localStorage.setItem('api_key', data.key);
          browserHistory.push('/ltr/execdashboard');
        }else{
          this.errorNotification(data);
        }
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
  componentDidMount() {
    $('html').addClass('authentication');
  //   $.ajax({
  //     url: 'https://ceres.link/api/preregister/data:email=rkxld3j@dispostable.com',
  //     dataType: 'json',
  //     type: 'GET',
  //     success:function(data){
  //       console.log(data);
  //     }.bind(this),
  //     error:function(error){
  //       console.log(error);
  //     }
  //   })
    Messenger.options = {
      theme: 'flat'
    };
  }

  componentWillUnmount() {
    $('html').removeClass('authentication');
  }

  getPath(path) {
    var dir = this.props.location.pathname.search('rtl') !== -1 ? 'rtl' : 'ltr';
    path = `/${dir}/${path}`;
    return path;
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
                      <PanelBody style={{padding: 0}}>
                        <div className='text-center bg-darkblue fg-white'>
                          <h3 style={{margin: 0, padding: 25}}>Registration</h3>
                        </div>
                        <div>
                          <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>
                            <Form onSubmit={::this.signup}>
                              <FormGroup controlId='username'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-user' />
                                  </InputGroup.Addon>
                                  <FormControl autoFocus type='text' className='border-focus-blue' placeholder='Username' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup controlId='email'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-email' />
                                  </InputGroup.Addon>
                                  <FormControl autoFocus type='email' className='border-focus-blue' placeholder='Email Address' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup controlId='password'>
                                <InputGroup bsSize='large'>
                                  <InputGroup.Addon>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroup.Addon>
                                  <FormControl type='password' className='border-focus-blue' placeholder='Password' />
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
                                  <FormControl autoFocus type='text' className='border-focus-blue' placeholder='Pay Code' />
                                </InputGroup>
                              </FormGroup>

                              <FormGroup>
                                <Grid>
                                  <Row>
                                    <Col xs={12} collapseLeft collapseRight>
                                      <Button type='submit' outlined lg bsStyle='blue' block onClick={::this.signup}>Create account</Button>
                                      <div className='text-center' style={{marginTop: 25}}>
                                        Already have an account? <Link to={::this.getPath('login')}>Login</Link>
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
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
