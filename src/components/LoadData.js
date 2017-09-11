import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as dataActions from '../actions/dataActions';
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
  Progress,
  Form, FormGroup, InputGroup, FormControl
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class LoadData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
      progress_flag: false
    }
  }

  componentDidMount() {
    Messenger.options = {
      theme: 'flat'
    };
    let temp = {};
    let apiKey = '';
    temp = this.props.login;
    apiKey = temp["key"];
    this.setState({
      apiKey: apiKey
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let loadData = '';
    const { dispatch } = this.props;
    loadData = ReactDOM.findDOMNode(this.loadData).value;
    if (loadData) {
      this.setState({
        progress_flag: true
      })
    }

    dispatch(dataActions.fetchLoadData(this.state.apiKey, loadData));
  }
  componentWillReceiveProps(nextProps) {
    let loadData = '';
    loadData = nextProps.loadData;
    if (loadData) {
      this.setState({
        progress_flag: false
      })
    } 
  }
  render() {
    return (
      <Panel>
        <Row>
          <Col xs={12}>
            <p>Please Input the user data URL</p>
            <Form>
              <FormGroup controlId='dataLoad'>
                <InputGroup bsSize='large'>
                  <InputGroup.Addon>
                    <Icon bundle='glyphicon' glyph='align-justify' />
                  </InputGroup.Addon>
                  <FormControl autoFocus type='dataLoad' className='border-focus-blue' placeholder='Data Load URL' ref={(loadData) => this.loadData = loadData} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Grid>
                  <Row>
                    <Col xs={12} collapseLeft collapseRight className='text-right'>
                      <Button outlined lg type='submit' bsStyle='blue' onClick={this.handleClick}>Load Data</Button>
                    </Col>
                  </Row>
                </Grid>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {this.state.progress_flag &&
              <Progress active value={100} />
            }
          </Col>
        </Row>
      </Panel >
    );
  }
}
