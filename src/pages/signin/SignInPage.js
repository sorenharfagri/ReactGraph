import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';
import { goToMain } from '../../helpers/RouteUtils'

import './SignInPage.scss';
import ErrorMessage from '../../components/ErrorMessage';
import AuthService from '../../services/auth.service'

const Heading = styled.h1`
  margin-top: 0;
`;

const FormContainer = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: #edf4ff;
  padding: 30px;
  border-radius: 5px;
`;

const FormField = styled(TextField)`
  width: 100%;
`;

//TODO FormIsValid function

const SignInPage = () => {

  const [errorMessages, setErrorMessages] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  useEffect(() => {
    if (AuthService.isLoggedIn()) {
      goToMain(history)
    }
  }, [])

  let submit = async () => {

    try {
      await AuthService.signin(username, password);
      history.push('/');
    } catch (error) {
      const errorMessage = error.response.data;
      console.log(`Error in login`, error)

      const errors = []

      if (errorMessage) {
        errors.push(errorMessage)
      }

      if (!errors.length) {
        errors.push('Something goes wrong')
      }

      setErrorMessages(errors)
    }
  };

  return (
    <div className="fullscreen-wrapper">
      <FormContainer>
        <Heading>Hello!</Heading>
        <p>Fill in your username and password to sign in.</p>

        {errorMessages && <ErrorMessage message={errorMessages} />}

        <div>
          <FormField
            id="outlined-name"
            label="Username"
            margin="dense"
            variant="outlined"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <FormField
            id="outlined-name"
            label="Password"
            margin="dense"
            variant="outlined"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <hr />
        <div>
          <Button
            style={{ marginBottom: '10px' }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={submit}
          >
            SIGN IN
            </Button>

        </div>
      </FormContainer>
    </div>
  );
}

export default SignInPage;
