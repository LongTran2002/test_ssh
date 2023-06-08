import React, { useState } from 'react';
import './index.css';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  Key: React.Key;
  Name: string
  EmailId: string;
  B2B: boolean;
  PhoneNumber: string;
  Role: string
  Code: number
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'Name',
  },
  {
    title: 'EmailId',
    dataIndex: 'EmailId',
  },
  {
    title: 'B2B',
    dataIndex: 'B2B',
    render: (B2B: boolean) => {
        if (B2B===true) {
          return "Y"
        }
        else {
          return "N"
        }
    }
  },
  {
    title: 'PhoneNumber',
    dataIndex: 'PhoneNumber',
  },
  {
    title: 'Role',
    dataIndex: 'Role',
  },
  {
    title: 'PhoneNumber',
    dataIndex: 'PhoneNumber',
  },
];

const data: DataType[] = [
  {
    "Code": 74187,
    "Name": "Audie",
    "EmailId": "Nayeli_Friesen@yahoo.com",
    "B2B": true,
    "PhoneNumber": "444.897.4289 x85405",
    "Role": "Engineer",
    "Key": "1"
  },
  {
    "Code": 97697,
    "Name": "Josiane",
    "EmailId": "Mario.Smitham@hotmail.com",
    "B2B": false,
    "PhoneNumber": "(714) 385-2574 x05417",
    "Role": "Coordinator",
    "Key": "2"
  },
  {
    "Code": 99242,
    "Name": "Albin",
    "EmailId": "Ara_Armstrong91@gmail.com",
    "B2B": false,
    "PhoneNumber": "573-612-5278",
    "Role": "Designer",
    "Key": "3"
  },
  {
    "Code": 16031,
    "Name": "Meggie",
    "EmailId": "Melvin_Volkman76@gmail.com",
    "B2B": true,
    "PhoneNumber": "580.394.7291 x515",
    "Role": "Consultant",
    "Key": "4"
  },
  {
    "Code": 79646,
    "Name": "Madison",
    "EmailId": "Jairo8@hotmail.com",
    "B2B": false,
    "PhoneNumber": "(751) 825-3834 x1197",
    "Role": "Designer",
    "Key": "5"
  },
  {
    "Code": 55176,
    "Name": "Birdie",
    "EmailId": "Willow_Keeling65@hotmail.com",
    "B2B": true,
    "PhoneNumber": "(279) 780-6389 x0609",
    "Role": "Coordinator",
    "Key": "6"
  },
  {
    "Code": 87277,
    "Name": "Nikita",
    "EmailId": "Idella_Cummerata52@hotmail.com",
    "B2B": true,
    "PhoneNumber": "815-827-8384 x1261",
    "Role": "Administrator",
    "Key": "7"
  },
  {
    "Code": 11802,
    "Name": "Tracey",
    "EmailId": "Alanna32@gmail.com",
    "B2B": true,
    "PhoneNumber": "1-477-850-4403 x339",
    "Role": "Orchestrator",
    "Key": "8"
  },
  {
    "Code": 19430,
    "Name": "Abelardo",
    "EmailId": "Kaylie_Davis@hotmail.com",
    "B2B": false,
    "PhoneNumber": "1-553-684-6425",
    "Role": "Designer",
    "Key": "9"
  },
  {
    "Code": 59622,
    "Name": "Yvette",
    "EmailId": "Jaiden_Dach@hotmail.com",
    "B2B": false,
    "PhoneNumber": "900.624.3587 x126",
    "Role": "Representative",
    "Key": "10"
  },
  {
    "Code": 55652,
    "Name": "Susie",
    "EmailId": "Mikel_Halvorson44@gmail.com",
    "B2B": true,
    "PhoneNumber": "496.416.7880 x75919",
    "Role": "Technician",
    "Key": "11"
  },
  {
    "Code": 21480,
    "Name": "Thora",
    "EmailId": "Johann.Funk@yahoo.com",
    "B2B": false,
    "PhoneNumber": "(666) 801-1664",
    "Role": "Technician",
    "Key": "12"
  },
  {
    "Code": 81219,
    "Name": "Rosa",
    "EmailId": "Jimmie_Welch@hotmail.com",
    "B2B": true,
    "PhoneNumber": "(696) 566-7669 x4388",
    "Role": "Strategist",
    "Key": "13"
  },
  {
    "Code": 23787,
    "Name": "Branson",
    "EmailId": "Cassandre_Denesik@gmail.com",
    "B2B": false,
    "PhoneNumber": "(702) 326-0746",
    "Role": "Orchestrator",
    "Key": "14"
  },
  {
    "Code": 31837,
    "Name": "Thea",
    "EmailId": "Bernice_Abbott@gmail.com",
    "B2B": true,
    "PhoneNumber": "1-362-868-1467",
    "Role": "Executive",
    "Key": "15"
  },
  {
    "Code": 6155,
    "Name": "Dejah",
    "EmailId": "Merle_Bauch2@hotmail.com",
    "B2B": false,
    "PhoneNumber": "1-550-525-6204 x1097",
    "Role": "Designer",
    "Key": "16"
  },
  {
    "Code": 67574,
    "Name": "Jared",
    "EmailId": "Wilmer.Lebsack44@hotmail.com",
    "B2B": false,
    "PhoneNumber": "997.311.9292 x056",
    "Role": "Orchestrator",
    "Key": "17"
  },
  {
    "Code": 71373,
    "Name": "Loraine",
    "EmailId": "Randal51@hotmail.com",
    "B2B": true,
    "PhoneNumber": "436-706-8452 x05564",
    "Role": "Coordinator",
    "Key": "18"
  },
  {
    "Code": 19269,
    "Name": "Earnestine",
    "EmailId": "Pink15@yahoo.com",
    "B2B": true,
    "PhoneNumber": "1-238-600-3748 x28600",
    "Role": "Facilitator",
    "Key": "19"
  },
  {
    "Code": 1364,
    "Name": "Amy",
    "EmailId": "Elmer.Deckow51@gmail.com",
    "B2B": true,
    "PhoneNumber": "698-338-9366",
    "Role": "Coordinator",
    "Key": "20"
  },
  {
    "Code": 74502,
    "Name": "Hillard",
    "EmailId": "Davion_Will@hotmail.com",
    "B2B": false,
    "PhoneNumber": "1-268-311-6149 x3324",
    "Role": "Agent",
    "Key": "21"
  },
  {
    "Code": 84924,
    "Name": "Kiana",
    "EmailId": "Mariana.Roob@yahoo.com",
    "B2B": true,
    "PhoneNumber": "1-986-350-8522 x01730",
    "Role": "Assistant",
    "Key": "22"
  },
  {
    "Code": 23624,
    "Name": "Eleazar",
    "EmailId": "Velma.Goldner@yahoo.com",
    "B2B": true,
    "PhoneNumber": "(708) 818-3993 x8181",
    "Role": "Associate",
    "Key": "23"
  }
]


// rowSelection object indicates the need for row selection

const EligibleCustomersList: React.FC = () => {
  const [selectionType] = useState<'checkbox'>('checkbox');

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        rowSelection={{type: selectionType}}
        scroll={{ y: 240 }}
        pagination ={false}
      />
    </div>
  );
};

export default EligibleCustomersList;