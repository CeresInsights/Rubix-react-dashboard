import React from 'react';
import ExportButtonGroup from './ExportButtonGroup';
import ProductPromotionByChannel from './ProductPromotionByChannel';
import { Row, Col} from '@sketchpixy/rubix';

export default class Promotion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='ppbc_wrapper'>
                <Row>
                    <Col sm={12}>
                        <ProductPromotionByChannel />
                        <ExportButtonGroup />
                    </Col>
                </Row>
            </div>
        );
    }
}
