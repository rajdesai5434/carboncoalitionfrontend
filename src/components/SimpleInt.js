import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { Col, Row } from 'antd';
import { Divider } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const SimpleInt = () => {
  const [principal, setPrincipal] = useState('');
  const [rate] = useState(3);
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);
  const [CO2, setCO2] = useState(null);
  const [espresso, setESP] = useState(null);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      setResult(null);
      return;
    }

    const simpleInterest = (p * r * t) / (52*100);
    setResult(simpleInterest);

    const CO2 = simpleInterest * 0.67
    setCO2(CO2);

    const espresso = 0.09 * CO2 * 1000/t
    setESP(espresso);
  };

  return (
    <>
    <Divider orientation="center" style={{fontSize:20,fontWeight:"bold"}} plain>Carbon Credits Purchased</Divider>
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Principle"
      name="principle"
      onChange={(e) => setPrincipal(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your principle!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Time"
      name="time"
      onChange={(e) => setTime(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your time in weeks!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <button type="submit" onClick={calculateInterest}>Submit</button>
    </Form.Item>
  </Form>
  {result !== null && (
        <div>
        <Col span={20} offset={6}> 💰 {result.toFixed(2)} pounds interest will be earned </Col>
        <Col span={20} offset={6}> &#x1F4A8; {CO2.toFixed(2)} tons of carbon removed from environment </Col>
        <Col span={20} offset={6}> &#x2615; {espresso.toFixed(2)}/week will be carbon free</Col>
        </div>
      )}
    </>
  );
};

export default SimpleInt;
