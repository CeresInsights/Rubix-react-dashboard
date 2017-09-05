import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import * as authActions from '../actions/authActions';
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

@connect((state) => state)
export default class SendEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pendingEmailList: [],
        }

    }
    componentWillReceiveProps(nextProps) {
        var pendingEmailData = {};
        pendingEmailData = nextProps.pendingEmail;
        console.log("PendingEmails", pendingEmailData)
        this.setState({
            pendingEmailList: pendingEmailData["pending_emails"]
        })
        Messenger.options = {
            theme: 'flat'
        };
    }
    handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let index = 0;
        let pendingEmailList = [];
        let preregisterEmail = '';

        index = ReactDOM.findDOMNode(this.preregisterEmail).value;
        pendingEmailList = this.state.pendingEmailList;
        preregisterEmail = pendingEmailList[index];

        const { dispatch } = this.props;
        dispatch(authActions.fetchEmailPreregisterData(preregisterEmail));
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
                    <Col xs={12}>
                        <h1 className="contact_title"> Send PayCode </h1>
                        <p> Please select a email address to send the token code</p>
                        <Form onSubmit={this.handleClick}>
                            <Grid>
                                <Row>
                                    <Col xs={3}>
                                        <FormGroup controlId='formControlsSelectMultiple'>
                                            <FormControl componentClass="select" className='border-focus-blue' multiple ref={(preregisterEmail) => this.preregisterEmail = preregisterEmail}>
                                                {this.state.pendingEmailList.map((email, index) => {
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
