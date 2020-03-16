import React from 'react';
import axios from 'axios';
import Card from './Card';
import Pagination from '../Components/Pagination';
class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            productslist : [],
            totalproduct: 0,
            chooseID: '',
            currentPage: 1
        }
    }

    componentWillMount(){
        console.log('content rendering')
        let {chooseID} = this.props;
        axios.get(`/api/producttype/${chooseID}/1`)
            .then(res => {
                axios.get(`/api/totalproduct/${chooseID}`)
                    .then(res1 => {
                        this.setState({
                            totalproduct: res1.data.total_product,
                            productslist : res.data,
                            chooseID: chooseID,
                        })
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }

    
    componentWillUpdate(nextProps, nextState){
        
        if(nextProps.chooseID != nextState.chooseID){
            console.log('will update')
            let {chooseID} = nextProps
            axios.get(`/api/producttype/${chooseID}/1`)
            .then(res => {
                axios.get(`/api/totalproduct/${chooseID}`)
                    .then(res1 => {
                        this.setState({
                            totalproduct: res1.data.total_product,
                            productslist : res.data,
                            chooseID: chooseID,
                            currentPage: 1
                        })
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
        }
    }

    changeCurrentPage = numPage => {
        let {chooseID} = this.state;
        axios.get(`/api/producttype/${chooseID}/${numPage}`)
            .then(res => {
                this.setState({
                    productslist : res.data,
                    currentPage: numPage
                })
            })
            .catch(error => console.log(error));
    };

    componentDidUpdate(){
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
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

        let {totalproduct} = this.state;
        let temp = Math.floor(totalproduct / 6);
        let pageCount = totalproduct % 6 !== 0 ? (temp + 1) : temp;

        return (
            <div>
                <div className={"content-wrapper" }>
                    {cards}
                </div>

                <div id="pagination-wrapper">
                    <Pagination
                        totalpage={pageCount}
                        changeCurrentPage={this.changeCurrentPage}
                        currentPage={this.state.currentPage}
                    />
                </div>
            
            </div>
            
        )
    }
}

export default Content;