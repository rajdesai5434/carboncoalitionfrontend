import React, { useState, useEffect } from "react";
import WalletTokens from "./WalletTokens";
import CarbonBank from "./CarbonBank";
import Deposit from "./Deposit"
import Withdraw from "./Withdraw";
import { Col, Row } from 'antd';

const PortfolioPage = () => {
  return (
    <div>
      <Row gutter={[16, 8]}>
        <Col span={12} style={{ padding: '50px' }}><WalletTokens/></Col>
        <Col span={12} style={{ padding: '50px' }}><CarbonBank /></Col>
      </Row>
      <Row gutter={[16, 8]}>
        <Col span={12} style={{ padding: '50px' }}><Deposit/></Col>
        <Col span={12} style={{ padding: '50px' }}><Withdraw/></Col>
      </Row>
    </div>
  );
};

export default PortfolioPage;
