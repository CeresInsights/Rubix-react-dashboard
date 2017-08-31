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
    Form, FormGroup, InputGroup, FormControl,
    SplitButton, MenuItem
} from '@sketchpixy/rubix';

export default class SendEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storedEmails: [],
            un: '',
            pw: ''
        }
    }
    componentDidMount() {
        var storedEmails = [];
        storedEmails = JSON.parse(localStorage.getItem('emails'));
        var un = '';
        var pw = '';
        un = localStorage.getItem('un');
        pw = localStorage.getItem('pw');
        this.setState({
            storedEmails: storedEmails,
            un: un,
            pw: pw
        })
        Messenger.options = {
            theme: 'flat'
        };
    }

    handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        let email = $('#email').val();
        $.ajax({
            url: 'https://ceres.link/api/preregister/data:email=' + email,
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
    handleSelect = () => {
        console.log("adsfasdfasfasfsaddfsda")
    }
    render() {
        return (
            <Panel>
                <Row>
                    <Col xs={12}>
                        <h1 className="contact_title"> Send PayCode </h1>
                        <p> Please select a email address to send the token code</p>
                        <Form>
                            <Grid>
                                <Row>
                                    <Col xs={3}>
                                        <FormGroup controlId='formControlsSelectMultiple'>
                                            <FormControl componentClass="select" className='border-focus-blue' multiple onSelect={this.handleSelect}>
                                                {this.state.storedEmails.map((email, index) => {
                                                    return (
                                                        <option value={index} key={index}>{email}</option>
                                                    );
                                                })
                                                }
                                            </FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={3} collapseLeft collapseRight className='text-left'>
                                        <FormGroup>
                                            <Button outlined lg type='submit' bsStyle='blue' onClick={this.handleClick}>Send PayCode</Button>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Grid>

                        </Form>
                    </Col>
                </Row>
            </Panel>
        );
    }
}
