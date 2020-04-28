import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FiPower, FiPlusCircle, FiUser, FiMoreHorizontal, FiSquare, FiCheckSquare,FiX } from 'react-icons/fi'
import { Container } from '../../components'
import { 
    Content, 
    Navbar, 
    Logo, 
    Welcome,
    LogoutButton, 
    ListGroup, 
    NewGroup, 
    Group, 
    NameGroup,
    NewTask,
    FormTask,
    InputTask,
    SelectTask,
    OptionTask,
    ButtonNewTask,
    Users,
    User,
    UserInfo,
    UserImage,
    UserMore,
    TasksTable,
    TaskDone,
    ModalGroup
} from './styles'
import ModalBg from '../../assets/undraw_collaborators.svg'


export default function Profile() {
    const [modal, setModal] = useState(false)
    return (
        <Container heightAuto>
            <Content>
                <Navbar>
                    <Logo>Master Mind.</Logo>
                    <Welcome>Seja Bem Vindo! Gabriel</Welcome>
                    <Link to="/" style={LogoutButton}>
                            <FiPower size={24} color="#6C63FF"/>
                    </Link>
                </Navbar>
                <ListGroup>
                    <NewGroup>
                        <FiPlusCircle size={80} color="#6C63FF" onClick={() => setModal(true)}/>
                    </NewGroup>

                    <Group>
                        <div>
                            <NameGroup>Master Mind</NameGroup>
                            <p>A única linguagem que se comunica com o futuro e lei da semeadura!</p>
                            <NewTask>Adicionar tarefa:</NewTask>
                            <FormTask>
                                <InputTask 
                                    type="text"
                                    placeholder="Tarefa"
                                />
                                <SelectTask>
                                    <OptionTask>Assunto</OptionTask>
                                    <OptionTask>Trabalho</OptionTask>
                                    <OptionTask>Estudos</OptionTask>
                                    <OptionTask>Lazer</OptionTask>
                                    <OptionTask>Outros</OptionTask>
                                </SelectTask>
                                <InputTask 
                                    type="date"
                                    placeholder="Prazo"
                                />
                                <ButtonNewTask type="submit">Adicionar</ButtonNewTask>
                            </FormTask>
                            <Users>
                                <User>
                                    <UserInfo>
                                        <UserImage>
                                            <FiUser size={30} color="#fff"/>
                                        </UserImage>
                                        <h5>Usuário</h5>
                                        <UserMore>
                                            <FiMoreHorizontal size={20}/>
                                        </UserMore>
                                    </UserInfo>
                                    <TasksTable>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Tarefa</th>
                                                    <th>Assunto</th>
                                                    <th>Prazo</th>
                                                    <th>Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>Terminar o sistema</th>
                                                    <th>Trabalho</th>
                                                    <th>28/04/2020</th>
                                                    <th>
                                                        <TaskDone>
                                                            <FiSquare size={20}/>
                                                        </TaskDone>
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </TasksTable>
                                </User>
                            </Users>
                        </div>
                    </Group>

                </ListGroup>
                { modal ? (
                    <ModalGroup>
                        <div>
                            <FiX size={22} onClick={() => setModal(false)}/>
                            <img src={ModalBg}/>
                        </div>
                    </ModalGroup>
                ) : ""
                }   
            </Content>
        </Container>
    )
}