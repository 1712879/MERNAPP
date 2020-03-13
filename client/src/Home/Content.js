import React from 'react';
import axios from 'axios';
import Card from './Card';

class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            productslist : []
        }
    }

    componentWillMount(){
        let {chooseID} = this.props;
        axios.get('/api/producttype/' + chooseID)
            .then(res => {
                this.setState({
                    productslist : res.data
                })
            })
            .catch(error => console.log(error));
    }

    componentWillReceiveProps(nextprops){
        let {chooseID} = nextprops;
        axios.get('/api/producttype/' + chooseID)
            .then(res => {
                this.setState({
                    productslist : res.data
                })
            })
            .catch(error => console.log(error));
    }

    render() {

        let cards = this.state.productslist.map(e => {
            return(
                <Card key={e._id} product={e}/>
            )
        })

        return (
            <div className="col-9 content">
                {cards}
            </div>
        )
    }
}

export default Content;