/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
// import { useAuth } from '../../hooks/auth';
import { Image, ActivityIndicator } from 'react-native';
import {
  Container, Input, Button, ButtonText,
} from './styles';

import logoImg from '../../assets/logo.png';

const Login = () => {
//   const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (!email) return;
    if (!password) return;
    setLoading(true);

    // try {
    //   await signIn(email, password);

    //   console.log('Login Sucess');

  //   history.push('/tarefas');
  // } catch (error) {
  //   console.log('Login  error', error);
  // } finally {
  //   setLoading(false);
  // }
  };

  return (
    <Container>
      <Image source={logoImg} />

      <Input
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Login"
      />
      <Input
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
      />

      <Button onPress={() => handleSubmit()}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <ButtonText>Acess</ButtonText>
        ) }
      </Button>

    </Container>
  );
};

export default Login;
