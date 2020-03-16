import React from 'react';

class Pagination extends React.Component{
    constructor(props) {
        super(props);
    }

    changeCurrentPage = (pos) => {
        let {currentPage} = this.props;
        
        if(currentPage == pos){
            console.log('nothing')
        }else{
            this.props.changeCurrentPage(pos)
        }
    }

    pre = () => {
        let {currentPage} = this.props;
        if(currentPage > 1){
            this.changeCurrentPage(1)
        }else{
            console.log('pre nothing')
        }
    }

    next = () => {
        let {currentPage} = this.props;
        if(currentPage <= 1){
            this.changeCurrentPage(2)
        }else{
            console.log('next nothing')
        }
    }

    render() {
        let {currentPage} = this.props;
        return (
            <div id="pagination-wrapper">
                <nav >
                    <ul class="pagination">
                        <li class={currentPage == '1' ? "page-item disabled" : "page-item"} onClick={() => this.pre()}>
                            <span class="page-link">Previous</span>
                        </li>

                        <li class={currentPage == '1' ? "page-item active" : "page-item"} onClick={() => this.changeCurrentPage(1)}>
                            <a class="page-link" >1</a>
                        </li>

                        <li class={currentPage == '2' ? "page-item active" : "page-item"} onClick={() => this.changeCurrentPage(2)}>
                            <a class="page-link" >2</a>
                        </li>

                        <li class={currentPage == '2' ? "page-item disabled" : "page-item"} onClick={() => this.next()}>
                            <a class="page-link" >Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Pagination;