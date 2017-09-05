import React from 'react';
import ProductBundlesbyCustomerBehavior from './ProductBundlesbyCustomerBehavior';
import ExportButtonGroup from './ExportButtonGroup';
import { Row,Col } from '@sketchpixy/rubix';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='execdashboard'>
        <Row>
          <Col sm={12}>
            <ProductBundlesbyCustomerBehavior />
            <ExportButtonGroup />
          </Col>
        </Row>
      </div>
    );
  }
}
