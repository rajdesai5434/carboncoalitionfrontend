import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
  }
];
const TokenTable = ({tokens}) => <Table columns={columns} dataSource={tokens} pagination={false}/>;
export default TokenTable;