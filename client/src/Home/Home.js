import React from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Category from './Category';
import Content from './Content';
import { Route,Switch } from 'react-router-dom';
import './Home.css';
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            chooseID: 'LH001'
        }
    }

    componentWillMount(){
        console.log('home rendering')
        
        axios.get('/api/category')
        .then(res => {
            this.setState({
                category: res.data
            })
        })
        .catch(error => console.log(error));
    }

    onChoose = (maloaihang) => {
        this.setState({
            chooseID: maloaihang
        })
    }

    render(){
        console.log('rendering')
        return(
            <div className="row1 body">
                <Category category={this.state.category} onChoose={this.onChoose} />
                <Content chooseID={this.state.chooseID} />
            </div>
            
        );
    }
}


export default Home;