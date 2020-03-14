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
        console.log('nextcontent rendering')
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
            if(e.TEN_SAN_PHAM[0] === '\"'){
                e.TEN_SAN_PHAM = e.TEN_SAN_PHAM.substring(1,e.TEN_SAN_PHAM.length - 1);
                e.THOI_DIEM_DANG = e.THOI_DIEM_DANG.substring(1,e.THOI_DIEM_DANG.length - 1);
            }

            return(
                <Card key={e._id} product={e}/>
            )
        })

        return (
            <div className={"content-wrapper" }>
                {cards}
            </div>
        )
    }
}

export default Content;