import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

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

export default class QueueEmail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    sendQueueRequest(e) {
        e.preventDefault();
        e.stopPropagation();
        let email = $('#email').val();
        $.ajax({
            url: 'http://ceres.link/api/email/queue/data:email=' + email,
            dataType: 'json',
            type: 'GET',
            success: function (data) {
                this.errorNotification(data);
            }.bind(this),
            error: function (error) {
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
                                                    <h3 style={{ margin: 0, padding: 25 }}>Preregistration</h3>
                                                </div>
                                                <div>
                                                    <div style={{ padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25 }}>
                                                        <Form onSubmit={::this.sendQueueRequest}>
                                                            <FormGroup controlId='email'>
                                                                <InputGroup bsSize='large'>
                                                                    <InputGroup.Addon>
                                                                        <Icon glyph='icon-fontello-mail' />
                                                                    </InputGroup.Addon>
                                                                    <FormControl autoFocus type='text' className='border-focus-blue' placeholder='Email' />
                                                                </InputGroup>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <Grid>
                                                                    <Row>
                                                                        <Col xs={12} collapseLeft collapseRight>
                                                                            <Button outlined lg type='submit' bsStyle='blue' onClick={::this.sendQueueRequest}>Preregistration</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </Grid>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <Grid>
                                                                    <Row>
                                                                        <Col xs={12} collapseLeft collapseRight>
                                                                            <div className='text-center' style={{ marginTop: 25 }}>
                                                                                Did you get a pay code in your email? <Link to="/ltr/signup">Sign Up</Link>
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
                    </div >
                </div >
            </div >
    );
    }
}
