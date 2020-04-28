import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    max-width: 1110px;
    height: 100${props => props.heightAuto ? "auto" : "vh"};  
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    width: 100%;
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

export const Input = styled.input`
    padding: 15px;
    margin: 10px 0;
    font-size: 14px;

    background: #fdfffc;

    border: 2px solid #000500;
    border-radius: 15px;

    transition: border-color .2s;

    &:focus {
        border-color: #6C63FF;
    }
`