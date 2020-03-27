import React, { useState, useEffect } from 'react';
import { Tabs, Table } from 'antd';
import APIClient from 'utils/apiClient';
import moment from 'moment';


import './styles.scss';


const Wish = () => {
  const [wishes, setWishes] = useState([]);
  // const [isBetModalVisible, setIsBetModalVisible] = useState(false);
  // const [selectedMatch, setSelectedMatch] = useState({});

  useEffect(() => {


    getMatches();
  }, []);


  const getMatches = async () => {
    let response = await APIClient.request(
      '/api/test/get-wishes',
      {},
      'GET'
    );

    console.log(response);

    setWishes(response);
  }


  const columns = [
    {
      title: 'isDreamsComesTrue',
      dataIndex: 'isDreamsComesTrue',
      render: (value) => {
        if (value === false) { return 'false'; }
        else { return 'true' }
      }

    },
    {
      title: 'Name',
      dataIndex: 'idUsername',
      key: 'idUsername',
    },
    {
      title: 'wish',
      dataIndex: 'wish',
      key: 'wish',
    },

  ];







  return (
    <>
      <div className= 'wish-table'>

        <Table dataSource={wishes} columns={columns} />
      </div>
    </>
  )
}

export default Wish;
