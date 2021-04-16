import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Data from './Data';
import Form from './Form';
import Transactions from './Transactions';
import About from './About';
import Regression from './Regression';

export class App extends Component {
    render() {
        return (
            <>
            <Router>
            <Route exact path="/" component={Data}/>
            <Route exact path="/form" component={Form}/>
            <Route exact path="/transactions" component={Transactions}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/regression" component={Regression}/>
            </Router>
            </>
        )
    }
}

export default App
