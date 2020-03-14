import React from 'react';
import { Link} from 'react-router-dom';

class Card extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            
            <div className="card mb-3 product">
                <Link to={`/product/${this.props.product.MA_SAN_PHAM}`}>
                <div className="card-header">
                    <img className="product-img" src={this.props.product.LINK_ANH}></img>
                </div>
                <div className="card-body">
                    <h6 className="card-title">{this.props.product.TEN_SAN_PHAM}</h6>
                    <p className="card-text datepost">{this.props.product.THOI_DIEM_DANG}</p>
                    <a className="product-price">đ {this.props.product.GIA_HIEN_TAI}</a>
                </div>
                </Link>
            </div>

        )
    }
}

export default Card;