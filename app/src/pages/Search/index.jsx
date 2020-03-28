import React from 'react';
import './styles.scss';
import { Input, Button } from 'antd';
const Search = () =>{
    
        return (
            <div className='search-input'>
                <Input.Search />
                <Button>search</Button>
            </div>
        )
    
}
export default  Search;