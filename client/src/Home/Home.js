import React from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category: []
        }
    }

    componentWillMount(){
        axios.get('/api/category')
            .then(res => {
                console.log(res.data);
                this.setState({
                    category: res.data
                })
            })
            .catch(error => console.log(error));
    }

    render(){
        let category = this.state.category.map(e => {
            e.TEN_DANH_MUC = e.TEN_DANH_MUC.substring(1, e.TEN_DANH_MUC.length - 1);
            let categoryItem = e.categoryItem.toString();
            return(
                <li key = {e._id}>
                    <ul>
                        {e.TEN_DANH_MUC}
                        <li>
                            {categoryItem}
                        </li>
                        
                    </ul>
                </li>
            )
        })
        return(
            <div className="container">
                <div className="row header">
                    <Header />
                </div>
                <div className="row body">
                    <ul>
                        {category}
                    </ul>
                </div>
                <div className="row footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;