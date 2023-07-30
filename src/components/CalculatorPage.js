// CalculatorPage.js
import React from 'react';
import SimpleInt from './SimpleInt';
import EsspressoFootprintCalculator from './EsspressoFootprintCalculator';
import { Col, Row } from 'antd';

const CalculatorPage = () => {
  return (
    <div>
      <h1>CalculatorPage</h1>
      <Row>
        <Col span={12}><SimpleInt/></Col>
        <Col span={12}><EsspressoFootprintCalculator/></Col>
      </Row>
    </div>
  );
};

export default CalculatorPage;
