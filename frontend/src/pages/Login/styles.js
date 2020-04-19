import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    max-width: 1110px;
    height: 100vh;  
    margin: 0 auto;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    aling-items: center;
    justify-content: space-between;

    img {
        width: 65%;
    }
`

export const Form = styled.form`
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
        padding: 15px;
        margin: 10px 0;
        font-size: 14px;

        background: #fdfffc;

        border: 2px solid #000500;
        border-radius: 15px;

        transition: border-color .2s
    }

    input:focus {
        border-color: #6C63FF;
    }

`

export const Button = styled.button`
    padding: 15px;
    margin-bottom: 10px;

    font-size: 16px;
    color: #fff;

    border: none;
    background: #6C63FF;
    border-radius: 15px;

    transition: opacity .2s;

    &:hover {
        opacity: 0.9;
    }
`

export const Logo = styled.h1`
    position: absolute;
    width: 80px;
    top: 100px;
`

export const LinkCreateAccount = styled.p`
    margin-top: 20px;

    font-size: 14px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);

    transition: color .2s;

    &:hover { 
        color: rgba(0, 0, 0, 1); 
    }
`