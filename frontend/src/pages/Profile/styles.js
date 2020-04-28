import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    aling-items: center;
`

export const Navbar = styled.div`
    width: 100%;
    padding: 30px 0;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    & > h1, p, div {
        align-self: flex-end;
    }
`

export const Logo = styled.h1`
    color: #6C63FF;
`

export const Welcome = styled.p`
    justify-self: center; 
`

export const LogoutButton = {
    padding: "15px 15px 12px 15px",
    justifySelf: "flex-end",

    background: "rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",


    cursor: "pointer",
}


export const ListGroup = styled.ul`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    & > li {
        list-style-type: none;
        margin: 40px auto; 
    }
`


export const NewGroup = styled.li`
    width: 90%;
    height: 600px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    background: rgba(0, 0, 0, 0.1);

    & > svg {
        cursor: pointer;
    }

`

export const Group = styled.li`
    width: 90%;
    height: 800px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    border-radius: 15px;
    background: #6C63FF;
    color: #fff;

    & > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 30px;
    }
`

export const NewTask = styled.h3`
    margin: 20px 0;
`

export const NameGroup = styled.h2`
    margin-bottom: 10px;
`

export const FormTask = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`


export const InputTask = styled.input`
    width: 30%;    
    padding: 10px;

    font-size: 14px;
    color: #fff;
    background: none;

    border: none;
    border-bottom: 2px solid #fff;

    &::placeholder {
        color: #fff;
    }
`
export const SelectTask = styled.select`
    width: 25%;

    padding: 10px;

    font-size: 14px;
    color: #fff;
    background: none;

    border: none;   
    border-bottom: 2px solid #fff;
    border-radius: 0;

    -webkit-appearance: none;  
    -moz-appearance: none;
`

export const OptionTask = styled.option`

`
export const ButtonNewTask = styled.button`
    padding: 5px 10px;

    border-radius: 8px;
    border: none;   

    font-size: 14px;
    color: #6C63FF;
    background: #fff;
`

export const Users = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 0;

    display: flex;
    overflow-x: scroll; 
`

export const User = styled.div`
    width: 100%;
    max-width: 340px;
    margin-right: 10px;
    height: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    border-radius: 15px;
    background: #fff;
    
`

export const UserInfo = styled.div`
    width: 100%;
    padding: 10px;

    display: flex;
    align-items: center;

    border-radius: 15px;
    background: #6C63FF;
`

export const UserImage = styled.div`
    width: 40px;
    height: 40px;
    padding: 5px;
    margin-right: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: 1px solid #fff;
`

export const UserMore = styled.div`
    margin-left: auto;
    padding: 2px 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    cursor: pointer;
    transition: background .35s;

    &:hover {
        background: rgba(0, 0, 0, 0.5);
    }
`

export const TasksTable = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 10px;

    font-size: 14px;

    border-radius: 15px;

    background: #6C63FF;
    overflow-x: scroll;
    
    & table {
        padding: 10px;
    } 
    & thead tr th {
        text-align: center;
        padding: 5px;
    }
    & tbody tr th {
        width: 100%;
        height: 100%;
        padding: 5px;
        text-align: center;

    }

`

export const TaskDone = styled.div`

`

export const ModalGroup = styled.div`
    width: 100%;
    height: 100%;


    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.5);
    transition: all .35s;
    & > div {
        width: 90%;
        max-width: 1110px;
        height: 90%;
        max-height: 600px;
        position: relative;

        border-radius: 15px;
        background: #fff;
        transition: .35s;
    }
    & div > svg {
        position: absolute;
        right: 30px;
        top: 30px;
        cursor: pointer;
    }

    & div > img {
        width: 90%;
        height: 90%;
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0.5;
    }
`