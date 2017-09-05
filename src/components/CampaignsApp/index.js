import React from 'react';
import CampaignsPromotionsAndLoyaltyOptimization from './CampaignsPromotionsAndLoyaltyOptimization';
import ExportButtonGroup from './ExportButtonGroup';
import { Row, Col} from '@sketchpixy/rubix';

export default class Campaigns extends React.Component {
  render() {
    return (
      <div className='execdashboard'>
        <Row>
          <Col sm={12}>
            <CampaignsPromotionsAndLoyaltyOptimization />
            <ExportButtonGroup />
          </Col>
        </Row>
      </div>
    );
  }
}
