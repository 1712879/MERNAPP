import React from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Category from './Category';
import Content from './Content';

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
        axios.get('/api/category')
            .then(res => {
                console.log(res.data)
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

        console.log(this.state)
    }

    render(){
        
        return(
            <div className="wrapper">
                <div className="row header">
                    <Header />
                </div>
                <div className="row body">
                    <Category category={this.state.category} onChoose={this.onChoose}/>
                    <Content chooseID={this.state.chooseID}/>
                </div>
                <div className="row footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;