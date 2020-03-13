import React from 'react';
import axios from 'axios';
import './ProductView.css';
import '../Home/Home.css';
import { Link } from 'react-router-dom';

class ProductView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentWillMount(){
        const id = this.props.match.params.id;
        axios.get('/api/product/'+id)
            .then(res => {
                console.log(res.data);
                this.setState({
                    product: res.data
                })
            })
            .catch(error => console.log(error));
    }


    render() {

        let eleproduct = this.state.product.map(p => {
            return(
                <div key={p._id} className="row product-detail">
                    <div className="image-detail">
                        <img src={p.LINK_ANH_BS1}></img>
                        <img src={p.LINK_ANH_BS2}></img>
                        <img src={p.LINK_ANH_BS3}></img>
                    </div>
                    <div className="product-info">
                        <div className="product-title">
                            <h1>{p.TEN_SAN_PHAM}</h1>
                        </div>
                        <div className="product-body">
                            <h3>{p.THOI_DIEM_DANG}</h3>
                            <p>{p.MO_TA}</p>
                            <p>đ {p.GIA_HIEN_TAI}</p>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div>
                {eleproduct}
            </div>
            
        )
    }
}

export default ProductView;