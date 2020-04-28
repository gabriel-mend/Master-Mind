import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { Content, Form, Logo, LinkCreateAccount } from './styles';
import { Container, Button, Input } from '../../components'
import UndrawProgress from '../../assets/undraw_progress_tracking.svg'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) =>  {
        event.preventDefault()
        console.log(email, password)
    }

    return (
        <Container>
            <Content>
                <Logo>Master Mind.</Logo>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        type="email"
                        placeholder="Seu email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <Input 
                        type="password"
                        placeholder="Sua senha"
                        value={password}
                        onChange={event => setPassword(event.target.value)}

                    />
                    <Button>Entrar</Button>
                    <Link to="/register" style={{ textDecoration: "none" }}>
                        <LinkCreateAccount>Nenhuma conta? Crie uma!</LinkCreateAccount>
                    </Link>
                </Form>
                <img src={UndrawProgress} alt="produtive"/>
            </Content>
        </Container>
    );
}
