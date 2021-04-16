import React, { Component,Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Data from './Data';
import Form from './Form';
import Transactions from './Transactions';


export class App extends Component {
    render() {
        return (
            <Fragment>
            <Router>
            <Route exact path="/" component={Data}/>
            <Route exact path="/form" component={Form}/>
            <Route exact path="/transactions" component={Transactions}/>
            </Router>
            </Fragment>
        )
    }
}

export default App
