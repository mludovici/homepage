import React from 'react'
import Mainpage from './Main/Mainpage'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import LoginRegister from './LoginRegister/LoginRegister'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function HomeComponent() {
    return (
        <div>
            <Router>
                <Route path="/" exact component={Mainpage}></Route>
            </Router>
        </div>
    )
}

export default HomeComponent
