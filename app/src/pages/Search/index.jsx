import React, { useState, useEffect } from 'react';
import './styles.scss';
import APIClient from 'utils/apiClient';
import { Input, message, Table, Spin } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { LoadingOutlined } from '@ant-design/icons';

const Search = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const [loadingTable, setLoadingTable] = useState(false);
    const [loading, setLoading] = useState(false);
    const [wishSearch, setwishSearch] = useState('');
    const [wishes, setWishes] = useState([]);
    const onSearch = async (values) => {
        try {
            console.log(values);
            setLoading(true);
            setLoadingTable(true);
            let response = await APIClient.request(
                '/api/test/search',
                {
                    searchWish: wishSearch// String(values.search)
                },
                'GET'
            );
            console.log(response);
            setWishes(response);
            setLoading(false);
            //   history.replace('/');
        } catch (err) {
            message.error("Username or password incorrect!");
            console.log(err);
            setLoading(false);
        }
    };
    const columns = [
        {
            title: 'isDreamsComesTrue',
            dataIndex: 'isDreamsComesTrue',
            render: (value) => {
                if (value === false) { return 'false'; }
                else {return 'true'}
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
var SearchTable = loadingTable ? <Table dataSource={wishes} columns={columns} /> : <h1></h1>;
    return (
        <>
            <div className='search-input'>
                < Input name='search' placeholder="search" 
                
                
                onChange={(el) => {

                    setwishSearch(el.target.value)
                } } 


                prefix={<SearchOutlined onClick={onSearch} />}
                    loading={loading} onPressEnter={onSearch}>
                </Input></div>
            <hr/>
            <Spin
                spinning={loading} indicator={antIcon}>
                <div className='wish-table'>
                    {SearchTable} 
                </div></Spin>

        </>
    )

}
export default Search;