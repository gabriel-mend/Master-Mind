import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    height: 600px;
    padding: 35px;
    position: relative;

    border-radius: 35px;
    border: solid 2px #000500;

    display: flex;
    justify-content: space-between;
    aling-items: center;

    img { 
        max-width: 50%
    }

`

export const Form = styled.form`
    width: 100%;
    margin-left: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
        margin-top: 10px;
    }
`

export const PasswordContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px
`
