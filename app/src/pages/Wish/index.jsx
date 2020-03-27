import React, { useState, useEffect } from 'react';
import { Tabs, Table } from 'antd';
import APIClient from 'utils/apiClient';
import moment from 'moment';
import Button from 'components/Button';
import BetModal from 'components/BetModal';
import './styles.scss';
import Nuberfromarter from 'utils/numberFormatter';
const { TabPane } = Tabs;
const myBetsKey = "my-bets";
const matchesKey = "matches";

const Wish = () => {
  const [matches, setMatches] = useState([]);
  const [isBetModalVisible, setIsBetModalVisible] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState({});

  useEffect(() => {


    getMatches();
  }, []);


  const getMatches = async () => {
    let response = await APIClient.request(
      '/api/match/get-upcoming-matches',
      {},
      'GET'
    );

    console.log(response);

    setMatches(response);
  }


  const tabChanged = (key) => {

  }

 
 

  return (
    <>
      <h1>this is wishes</h1>
    </>
  )
}

export default Wish;
