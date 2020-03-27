import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import APIClient from 'utils/apiClient';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './styles.scss';


const WishRegister = () => {
  
  const [walletActions, setWalletActions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      let response = await APIClient.request(
        '/api/test/register-wish',
        {
          username: values.username, email: values.email, password: values.password, roles: ["user"]
        },
        'POST'
      );
      // jwt.saveToken(response.token, response.expiresIn);
      setLoading(false);
      message.info("You are sucesfully registered");
      // history.push("/login");
      //   NavLink.to("/login");
    } catch (err) {
      message.error("Username or password incorrect!");
      console.log(err);
      setLoading(false);
    }
  };


  return (
    <>

<TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          color='color="secondary'
        />

    </>

  )
}

export default WishRegister;