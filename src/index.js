import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Redirect, Route, Router, Switch} from "react-router-dom"
import {createBrowserHistory} from 'history'
import MainPage from "./components/MainPage";
import SearchLine from "./components/SearchLine";

const history = createBrowserHistory()

ReactDOM.render((
    <BrowserRouter>
    {/*<div className='app'>*/}

        <main className='main'>
            <Switch>
                <Route path='/shoes' component={SearchLine} />
                <Route exact path='/' component={MainPage} />
                <Redirect to='/' />
            </Switch>
        </main>
    {/*</div>*/}
    </BrowserRouter>
    ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
