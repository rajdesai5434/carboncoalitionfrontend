// CalculatorPage.js
import React from 'react';
import SimpleInt from './SimpleInt';
import EsspressoFootprintCalculator from './EsspressoFootprintCalculator';
import { Col, Row } from 'antd';

const CalculatorPage = () => {
  return (
    <div>
      <Row>
        <Col span={12} style={{ padding: '50px' }}><SimpleInt/></Col>
        <Col span={12} style={{ padding: '50px' }}><EsspressoFootprintCalculator/></Col>
      </Row>
    </div>
  );
};

export default CalculatorPage;
