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
            chooseID: 'LH001',
            loading: false
        }
    }

    componentWillMount(){
        console.log('home rendering')
        this.setState({
            loading: true
        })

        axios.get('/api/category')
            .then(res => {
                
                this.setState({
                    category: res.data
                })
            })
            .catch(error => console.log(error));
    }

    componentDidUpdate(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    componentDidMount(){
        console.log('home rendered')
        this.setState({
            loading: false
        })
        
    }

    onChoose = (maloaihang) => {
        this.setState({
            chooseID: maloaihang
        })
    }

    render(){
        return(
            <div className="row1 body">
                <Category category={this.state.category} onChoose={this.onChoose} loading={this.state.loading}/>
                <Content chooseID={this.state.chooseID} loading={this.state.loading}/>
            </div>
            
        );
    }
}


export default Home;