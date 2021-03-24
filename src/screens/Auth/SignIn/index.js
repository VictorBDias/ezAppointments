import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Routes from '~/routes';

// CUSTOM IMPORTS
import logo from '~/assets/logo.png';

import {
  Container,
  Logo,
  Form,
  SubmitButton,
  SignLink,
  ButtonText,
  Input,
  InputLabel,
} from './styles';

const SignIn = () => {
  const formRef = React.useRef(null);
  const navigation = useNavigation();

  const handleSignIn = () => {
    const signed = true;
    Routes({ signed });
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Container>
          <Logo source={logo} />

          <Form ref={formRef} onSubmit={handleSignIn}>
            <InputLabel>Email</InputLabel>
            <Input
              title="Email"
              keyboardType="email-address"
              placeholder="Insira seu email"
              returnKeyType="next"
              autoCorrect={false}
              autoCapitalize="none"
            />

            <InputLabel>Senha</InputLabel>
            <Input
              name="password"
              style={{ marginTop: 8 }}
              placeholder="Insira sua senha"
              type="password"
              isPassword
            />

            <TouchableOpacity
              onPress={() => {
                if (formRef.current) formRef.current.submitForm();
              }}
            >
              <SubmitButton>
                <ButtonText>Entrar</ButtonText>
              </SubmitButton>
            </TouchableOpacity>
          </Form>

          <TouchableOpacity
            onPress={() => {
              if (formRef.current) formRef.current.submitForm();
            }}
          >
            <SignLink>
              <ButtonText>Criar Conta</ButtonText>
            </SignLink>
          </TouchableOpacity>
        </Container>
      </ScrollView>
    </>
  );
};

export default SignIn;
