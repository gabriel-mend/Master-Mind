import React, { useState } from 'react';
import { Link } from 'react-router-dom'


import { Container, Input, Button } from '../../components';
import { Content, Form, PasswordContainer } from '../Register/styles';

import { FiArrowLeft } from 'react-icons/fi'
import UndrawDev from '../../assets/undraw_dev.svg'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  function handleSubmit(event) {
    event.preventDefault()

  }

  return (
    <Container>
      <Content>
          <Link to="/">
            <FiArrowLeft size={30} color="#000500"/>
          </Link>
          <img src={UndrawDev} alt=""/>
          <Form onSubmit={handleSubmit}>
            <h1>Cadastar-se:</h1>
            <Input 
              type="text" 
              placeholder="Digite seu nome"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <Input 
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <PasswordContainer>
              <Input 
                type="password" 
                placeholder="Digite uma senha"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              <Input 
                type="password" 
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
              />
            </PasswordContainer>
            <Button>Cadastrar-se</Button>
          </Form>
      </Content>
    </Container>
  );
}
