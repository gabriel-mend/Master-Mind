import React from 'react';
import { Link } from 'react-router-dom'

import { Container, Content, Form, Button, Logo, LinkCreateAccount } from './styles';
import ImageProdutive from '../../assets/undraw_progress_tracking.svg'

export default function Login() {
  return (
    <Container>
        <Content>
            <Logo>Master Mind</Logo>
            <Form>
                <input 
                    type="email"
                    placeholder="Seu email"
                />
                <input 
                    type="password"
                    placeholder="Sua senha"
                />
                <Button>Entrar</Button>
                <Link to="/register" style={{ textDecoration: "none" }}>
                    <LinkCreateAccount>Nenhuma conta? Crie uma!</LinkCreateAccount>
                </Link>
            </Form>
            <img src={ImageProdutive} alt="produtive"/>
        </Content>
    </Container>
  );
}
