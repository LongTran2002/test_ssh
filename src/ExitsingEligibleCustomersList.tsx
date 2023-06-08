import React, { useState } from 'react';
import { Table, Checkbox } from 'antd';

const Data = 
[
  {
    "B2BY": true,
    "Name": "Freddie Cronin V",
    "Phone": true,
    "Email": true,
    "id": "1"
  },
  {
    "B2BY": true,
    "Name": "Janie Weissnat",
    "Phone": true,
    "Email": true,
    "id": "2"
  },
  {
    "B2BY": false,
    "Name": "Mrs. Victor Klocko",
    "Phone": true,
    "Email": true,
    "id": "3"
  },
  {
    "B2BY": true,
    "Name": "Carl Schmeler DVM",
    "Phone": false,
    "Email": true,
    "id": "4"
  },
  {
    "B2BY": true,
    "Name": "Dawn King",
    "Phone": true,
    "Email": true,
    "id": "5"
  },
  {
    "B2BY": false,
    "Name": "Jean Dare",
    "Phone": false,
    "Email": false,
    "id": "6"
  },
  {
    "B2BY": false,
    "Name": "Ella Pouros",
    "Phone": false,
    "Email": true,
    "id": "7"
  },
  {
    "B2BY": false,
    "Name": "Sandy Bruen",
    "Phone": true,
    "Email": true,
    "id": "8"
  },
  {
    "B2BY": false,
    "Name": "Vickie Beahan",
    "Phone": false,
    "Email": true,
    "id": "9"
  },
  {
    "B2BY": true,
    "Name": "Miss Vickie Langosh",
    "Phone": false,
    "Email": true,
    "id": "10"
  },
  {
    "B2BY": true,
    "Name": "Pat Altenwerth",
    "Phone": false,
    "Email": true,
    "id": "11"
  },
  {
    "B2BY": true,
    "Name": "Carrie Walter",
    "Phone": true,
    "Email": true,
    "id": "12"
  },
  {
    "B2BY": true,
    "Name": "Eduardo Kessler",
    "Phone": false,
    "Email": false,
    "id": "13"
  },
  {
    "B2BY": true,
    "Name": "Jeffery Lebsack",
    "Phone": false,
    "Email": true,
    "id": "14"
  },
  {
    "B2BY": false,
    "Name": "Miranda Bernier",
    "Phone": false,
    "Email": false,
    "id": "15"
  },
  {
    "B2BY": true,
    "Name": "Bryant Turner",
    "Phone": false,
    "Email": false,
    "id": "16"
  },
  {
    "B2BY": true,
    "Name": "Earnest Bailey MD",
    "Phone": true,
    "Email": true,
    "id": "17"
  },
  {
    "B2BY": false,
    "Name": "Veronica Abbott",
    "Phone": true,
    "Email": false,
    "id": "18"
  },
  {
    "B2BY": false,
    "Name": "Ms. Jody Hane",
    "Phone": true,
    "Email": false,
    "id": "19"
  },
  {
    "B2BY": false,
    "Name": "Eugene Gibson",
    "Phone": true,
    "Email": false,
    "id": "20"
  },
  {
    "B2BY": true,
    "Name": "Geneva Heaney",
    "Phone": false,
    "Email": true,
    "id": "21"
  }
]
const ExistingEligibleCustomersList = () => {


  const columns = [
    { title: 'Customer', dataIndex: 'Name', key: 'Name' },
    {
      title: 'B2B Y',
      dataIndex: 'B2BY',
      key: 'B2BY',
      render: (B2BY:any) => (
        <Checkbox
          checked={B2BY}
        />
      ),
    },
    {
        title: 'Phone',
        dataIndex: 'Phone',
        key: 'Phone',
        render: (Phone:any) => (
          <Checkbox
            checked={Phone}
          />
        ),
      },
      {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email',
        render: (Email:any) => (
          <Checkbox
            checked={Email}
          />
          
        ),
      },
  ];

  return <Table dataSource={Data} columns={columns} scroll={{ y: 240 }} pagination ={false}/>;
};

export default ExistingEligibleCustomersList;