import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Home from './Home/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductView from './DetailProduct/ProductView';

import { Switch,Route, BrowserRouter } from 'react-router-dom';
ReactDOM.render(
    <div className="wrapper">
        <div className="row1 header">
            <Header />
        </div>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={App}/>
                <Route exact={true} path="/product" component={Home}/>
                <Route 
                    path={`/product/:type/:id`}
                    component={ProductView}
                />
            </Switch>
        </BrowserRouter>
        

        <div className="row1 footer">
            <Footer/>
        </div>
    </div>
    
, document.getElementById('root'));


serviceWorker.unregister();
