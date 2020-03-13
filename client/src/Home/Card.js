import React from 'react';

class Card extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card border-primary mb-3 product">
                <div className="card-header">
                    <img src={this.props.product.LINK_ANH}></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.TEN_SAN_PHAM}</h5>
                    <p className="card-text">{this.props.product.MO_TA}</p>
                    <a className="btn btn-outline-success">{this.props.product.GIA_HIEN_TAI}</a>
                </div>
            </div>
        )
    }
}

export default Card;