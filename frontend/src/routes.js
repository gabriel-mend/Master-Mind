import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route exact path="/register" component={RegisterPage}/>
            </Switch>
        </BrowserRouter>
    )
}
