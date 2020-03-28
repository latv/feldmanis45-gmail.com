import React, { useState, useEffect } from 'react';
import Router from 'components/Router';
import { Layout, Row, Col, Spin, Menu, Dropdown } from 'antd';
import { SearchOutlined, HeartOutlined, UserOutlined, LogoutOutlined, BgColorsOutlined } from '@ant-design/icons';
import APIClient from 'utils/apiClient';
import numberFormatter from 'utils/numberFormatter';
import SearchForWish from 'components/SearchForWish'
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import './styles.scss';

const { Header, Content, Footer } = Layout;
const xsWidth = 22;
const mdWidth = 18;
const lgWidth = 16;

const DefaultLayout = () => {
  const [wish, setWish] =useState(0);
  const [Profile, setProfile] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isSearchForWishModalOpen, setSearchForWish] = useState(false);

  // visible={isSearchForWishOpen}
  //       setIsSearchForWishModalOpen={setIsSearchForWishModalOpen}
  //       setSearchForWish={setSearchForWish}

  useEffect(() => {


    getProfile();
  }, []);


  const getProfile = async () => {
    let response = await APIClient.request(
      '/api/test/all',
      {},
      'GET'
    );
    console.log(response.username);
    setProfile(response.username);

    setIsLoading(false);
  }

  const logOut = async () => {
    try {
      let response = await APIClient.request(
        '/api/auth/logout',
        {},
        'POST'
      );

      console.log(response);
    } catch (err) {
      console.log(err)
    }

    Cookies.remove('jwt_token');
    document.location.reload(true);
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div onClick={() => {
           setSearchForWish(true)
        }}>Search for wish</div>
      </Menu.Item>

    </Menu>
  );


  return (
    <Layout className="min-h-100">
      <Header className="app-header">
        <Row justify="center" >
          <Col xs={xsWidth} md={mdWidth} lg={lgWidth}>



            <NavLink to="/">
              <HeartOutlined style={{ fontSize: '40px', padding: "10px", color: 'red' }} className="brand-logo" />
            </NavLink>
            <div className="app-header-content">
              <div className="wallet-amount">
                <Dropdown overlay={menu} trigger={['click']}>
                  <SearchOutlined />
                </Dropdown>
                <NavLink to="/wish-register">
                  <HeartOutlined />
                </NavLink>
                <p>Your username: </p>
                <Spin spinning={isLoading} className="amount-spinner">

                  <p className="amount-with-currency">{Profile}</p>

                </Spin>
              </div>
              <NavLink to="/wallet">
                <UserOutlined />
              </NavLink>
              <LogoutOutlined onClick={logOut} />
            </div>
          </Col>
        </Row>
      </Header>
      <Content className="app-content">
        <Row justify="center" >
          <Col xs={xsWidth} md={mdWidth} lg={lgWidth}>
            <Router />
          </Col>
        </Row>
      </Content>
      <Footer className="app-footer">
        <Row justify="center">
          <Col xs={xsWidth} md={mdWidth} lg={lgWidth}>
            @Copyright 2020, GetIT school
          </Col>
        </Row>
      </Footer>
      <SearchForWish
        visible={isSearchForWishModalOpen}
        setIsSearchForWishModalOpen={ setSearchForWish}
        setSearchForWish={setProfile} doesn neede
      />
    </Layout>
  )
}

export default DefaultLayout;
