import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './Home/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductView from './DetailProduct/ProductView';

import { Switch,Route, BrowserRouter } from 'react-router-dom';
ReactDOM.render(
    <div className="wrapper">
        <div className="row header">
            <Header />
        </div>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route 
                    path={`/product/:id`}
                    component={ProductView}
                ></Route>
            </Switch>
            

        </BrowserRouter>
        

        <div className="row footer">
            <Footer/>
        </div>
    </div>
    
, document.getElementById('root'));


serviceWorker.unregister();
