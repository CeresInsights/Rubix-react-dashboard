import React from 'react';

import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider, DropdownButton, MenuItem, Button
} from '@sketchpixy/rubix';

import { Link } from 'react-router';

import ChatComponent from './chat';
import StatisticsComponent from './statistics';
import TimelineComponent from './timeline';
import NotificationsComponent from './notifications';
import ApplicationSidebar from './ApplicationSidebar';

export default class SidebarContainer extends React.Component {

  render() {
    return (
      <div id='sidebar'>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/app/avatars/avatar0.png' width='40' height='40' />
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{ top: 23, fontSize: 16, lineHeight: 1, position: 'relative' }}>Anna Sanchez</div>
                <div>
                  <Progress id='demo-progress' value={30} color='#ffffff' />
                  <Link to="/lock">
                    <Icon id='demo-icon' bundle='fontello' glyph='lock-5' />
                  </Link>
                </div>
              </Col>
            </Row>
          </Grid>
      </div>
      <SidebarControls>
        <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />
        <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1} />
        <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2} />
        <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3} />
        <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4} />
      </SidebarControls>
      <div id='sidebar-container'>
        <Sidebar sidebar={0}>
          <ApplicationSidebar />
        </Sidebar>
        <Sidebar sidebar={1}>
          <ChatComponent />
        </Sidebar>
        <Sidebar sidebar={2}>
          <StatisticsComponent />
        </Sidebar>
        <Sidebar sidebar={3}>
          <TimelineComponent />
        </Sidebar>
        <Sidebar sidebar={4}>
          <NotificationsComponent />
        </Sidebar>
      </div>
      </div >
    );
  }
}
