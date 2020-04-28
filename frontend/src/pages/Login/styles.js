import styled from 'styled-components'

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

`

export const Logo = styled.h1`
    position: absolute;
    color: #6C63FF;
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