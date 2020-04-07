import React from 'react';
import Category from './Category';
import Content from './Content';
import Spinner from 'react-spinner-material';   
import './Home.css';
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            chooseID: 'LH001',
            products: [],
            searchResults: [],
            totals: 0,
            currentPage: 1,
            isLoading: false
        }
        this.myRef = React.createRef();
    }

    async componentDidMount(){
        console.log('did mount')
        this.setState({isLoading: true})
        var response = await fetch('/api/category');
        var category = await response.json();

        var response_1 = await fetch(`/api/producttype/${this.state.chooseID}/1`);
        var products = await response_1.json();

        var response_2 = await fetch(`/api/totalproduct/${this.state.chooseID}`);
        var totals = await response_2.json();

        this.setState({
            category: category,
            products: products,
            searchResults: products,
            totals: totals,
            isLoading: false
        })
    }

    onChoose = (maloaihang) => {
        this.setState({
            chooseID: maloaihang
        })
    }

    changeCurrentPage = (numPage) => {
        this.setState({currentPage: numPage})
    }

    doSearch = (e) => {
        var {products} = this.state;
        products = products.filter(p => {
            return p.TEN_SAN_PHAM.includes(e.target.value);
        })
        this.setState({
            searchResults: products,
            totals: products.length
        })
    }

    async componentDidUpdate(prevProps, prevState){
        var {currentPage} = this.state;
        console.log(prevState)
        console.log(this.state.currentPage)
        if(currentPage != prevState.currentPage){
            this.setState({isLoading: true});
            var response_1 = await fetch(`/api/producttype/${this.state.chooseID}/${currentPage}`);
            var products = await response_1.json();

            this.setState({products: products, searchResults: products, isLoading: false});
        }

        var {chooseID} = this.state;
        if(chooseID != prevState.chooseID){
            this.setState({isLoading: true});
            var response_1 = await fetch(`/api/producttype/${this.state.chooseID}/1`);
            var products = await response_1.json();
            
            var response_2 = await fetch(`/api/totalproduct/${this.state.chooseID}`);
            var totals = await response_2.json();
            
            this.setState({
                products: products,
                searchResults: products,
                totals: totals,
                currentPage: 1,
                isLoading: false
            });
        }
    }

    render(){
        console.log('home render')
        return(
            this.state.isLoading ?
            <div className="loading"> 
                <Spinner size={120} spinnerColor={"#333"} spinnerWidth={3} visible={this.state.loading} />
            </div>
            :
            <>
            <div className="row1 body input">
                <div style={{width: '100%'}}></div>
                <div className="search">
                <input ref={this.myRef} placeholder="Search..." className="input" onChange={this.doSearch}></input>
                </div>
            </div>
            <div className="row1 body">
                <Category category={this.state.category} isActive={this.state.chooseID} onChoose={this.onChoose} />
                <Content chooseID={this.state.chooseID} products={this.state.searchResults} totals={this.state.totals} currentPage={this.state.currentPage} changeCurrentPage={this.changeCurrentPage}/>
            </div>
            </>
        );
    }
}

export default Home;