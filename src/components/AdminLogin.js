import React from 'react';
import classNames from 'classnames';
import { Link, withRouter, browserHistory } from 'react-router';

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
export default class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.un = '';
        this.pw = '';
    }
    back(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.router.goBack();
    }

    proceed_login(e) {
        e.preventDefault();
        e.stopPropagation();
        this.un = $('#username').val();
        this.pw = $('#password').val();
        localStorage.setItem('un', this.un);
        localStorage.setItem('pw', this.pw);
        $.ajax({
            url: 'https://ceres.link/api/admin/login/data:area=home,un=' + this.un + ',pw=' + this.pw,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                if (data == 'Admin: <' + this.un + '> logged in to <home>') {
                    browserHistory.push('/ltr/executivedashboard');
                } else {
                    this.Notification(data);
                }
            }.bind(this),
            error: function (error) {
                console.log(error);
            }
        })
    }
    proceed_logout(e) {
        $.ajax({
            url: 'https://ceres.link/api/admin/logout/data:area=home,un=' + this.un + ',pw=' + this.pw,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.Notification(data);
            }.bind(this),
            error: function (error) {
                console.log(error);
            }
        })
    }
    Notification(str) {
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
                                            <PanelBody style={{ padding: 0 }}>
                                                <div className='text-center bg-darkblue fg-white'>
                                                    <h3 style={{ margin: 0, padding: 25 }}>Log In</h3>
                                                </div>
                                                <div>
                                                    <div style={{ padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25 }}>
                                                        <Form onSubmit={::this.proceed_login}>
                                                            <FormGroup controlId='username'>
                                                                <InputGroup bsSize='large'>
                                                                    <InputGroup.Addon>
                                                                        <Icon glyph='icon-fontello-mail' />
                                                                    </InputGroup.Addon>
                                                                    <FormControl autoFocus type='text' className='border-focus-blue' placeholder='Username' />
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <FormGroup controlId='password'>
                                                                <InputGroup bsSize='large'>
                                                                    <InputGroup.Addon>
                                                                        <Icon glyph='icon-fontello-key' />
                                                                    </InputGroup.Addon>
                                                                    <FormControl type='password' className='border-focus-blue' placeholder='password' />
                                                                </InputGroup>
                                                            </FormGroup>
                                                        <FormGroup>
                                                            <Grid>
                                                                <Row>
                                                                    <Col xs={6} collapseLeft collapseRight className='text-right'>
                                                                        <Button outlined lg type='submit' bsStyle='blue' onClick={::this.proceed_login}>Login</Button>
                                                                    </Col>
                                                                    <Col xs={6} collapseLeft collapseRight className='text-right'>
                                                                        <Button outlined lg type='submit' bsStyle='blue' onClick={::this.proceed_logout}>Logout</Button>
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
                        </div >
                    </div >
                </div >
    );
    }
}
