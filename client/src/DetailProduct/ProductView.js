import React from 'react';
import axios from 'axios';
import './ProductView.css';
// import '../Home/Home.css';
import Card from '../Home/Card';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinner-material';
class ProductView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            relatedProduct: [],
            active: 1,
            loading: true
        }
    }

    componentWillMount(){
        const {id, type} = this.props.match.params;
        axios.get('/api/product/'+id)
            .then(res => {
                axios.get(`/api/product-related/${type}/${id}`)
                    .then(res1 => {
                        console.log(res1.data)
                        this.setState({
                            relatedProduct: res1.data,
                            product: res.data,
                            loading: false
                        })
                    })
            })
            .catch(error => console.log(error));
    }

    componentWillReceiveProps(newprops){
        this.setState({loading: true})
        console.log('will')
        const {id,type} = newprops.match.params;
        axios.get('/api/product/'+id)
            .then(res => {
                axios.get(`/api/product-related/${type}/${id}`)
                    .then(res1 => {
                        this.setState({
                            relatedProduct: res1.data,
                            product: res.data,
                            active: 1,
                            loading: false
                        })
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

    doChange = (e) => {
        this.setState({
            active: e
        })
    }

    render() {
        let cards = this.state.relatedProduct.map(e => {
            return(
                <Card key={e._id} product={e}/>
            )
        })
        let {product} = this.state;
        let eleproduct = (p) => {
            if(p.TEN_SAN_PHAM[0] === '\"'){
                p.TEN_SAN_PHAM = p.TEN_SAN_PHAM.substring(1, p.TEN_SAN_PHAM.length - 1);
                p.THOI_DIEM_DANG = p.THOI_DIEM_DANG.substring(1, p.THOI_DIEM_DANG.length - 1);
            }

            let images = [];
            images.push({stt: 1, link: p.LINK_ANH});
            images.push({stt: 2, link: p.LINK_ANH_BS1});
            images.push({stt: 3, link: p.LINK_ANH_BS2});
            images.push({stt: 4, link: p.LINK_ANH_BS3});

            return(
                <div key={p._id} className="row1 product-detail">
                    <div className="product-wrapper">
                        <ViewImage images={images} active={this.state.active} doChange={this.doChange}/>
                        <div className="product-info ml-2">
                            <div className="product-title">
                                <h1>{p.TEN_SAN_PHAM}</h1>
                            </div>
                            <div className="product-body">
                                <p>Ngày đăng: {p.THOI_DIEM_DANG}</p>
                                <p>Mô tả: {p.MO_TA}</p>
                                <p className="productdetail-price">đ {p.GIA_HIEN_TAI}</p>
                                <p>Thông tin khác: ***</p>
                            </div>
                        </div>
                        <div className="related-title">
                            <h2>Sản phẩm tương tự</h2>
                        </div>
                    </div>
                    <div className="product-related">
                        {cards}
                    </div>
                    
                    
                </div>
            )
        }

        return (
            this.state.loading ? 
            <div className="loading loaddetail"> 
                    <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={this.state.loading} />
                </div>
            :
            <div>
                {eleproduct(product)}
            </div>
            
        )
    }
}

class ViewImage extends React.Component{
    constructor(props) {
        super(props);
    }

    goLeft = () => {
        console.log('left')
        let active = this.props.active;
        if(active === 1){
            active = 4;
        }else{
            active--;
        }
        this.props.doChange(active);
    }

    goRight = () => {
        console.log('right')
        let active = this.props.active;
        if(active === 4){
            active = 1;
        }else{
            active++;
        }
        this.props.doChange(active);
        
    }
    
    render() {
        let elementImage = this.props.images.map(p => {
            return(
                <div key={p.stt} className="slide-wrapper"><img className={p.stt === this.props.active ? "slide active" : "slide"} src={p.link}></img></div>
            )
        })
        return (
            <div className="image-detail border rounded">
                {elementImage}
                
                <a className="bt goLeft" onClick={this.goLeft}><img className="icon pre rounded-circle" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/previous-69-661269.png"></img></a>
                <a className="bt goRight" onClick={this.goRight}><img className="icon next rounded-circle" src="https://png.pngtree.com/svg/20170523/d62342689e.png"></img></a>
            </div>
        )
    }
}

export default ProductView;