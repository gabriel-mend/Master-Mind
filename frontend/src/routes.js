import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import ProfilePage from './pages/Profile'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/profile" component={ProfilePage} />
            </Switch>
        </BrowserRouter>
    )
}
