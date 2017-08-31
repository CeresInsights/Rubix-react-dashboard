import React from 'react';
import Datatable from './DataTable';
import {
  Row,
  Col,
  Grid,
  Panel,
  Table,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
  DropdownButton,
  Breadcrumb,
  MenuItem
} from '@sketchpixy/rubix';
export default class DataBrowser extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <Datatable />
                      <br />
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Col>
      </Row>
    );
  }
}
