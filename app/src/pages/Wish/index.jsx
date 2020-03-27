import React, { useState, useEffect } from 'react';
import { Tabs, Table ,Spin} from 'antd';
import APIClient from 'utils/apiClient';
import moment from 'moment';

import { LoadingOutlined } from '@ant-design/icons';
import './styles.scss';


const Wish = () => {
  const [wishes, setWishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
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


  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;




  return (
    <>
      <Spin
        spinning={isLoading} indicator={antIcon}
      >
        <div className='wish-table'>

          <Table dataSource={wishes} columns={columns} />
        </div></Spin>
    </>
  )
}

export default Wish;
