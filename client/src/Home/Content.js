import React from 'react';
import Card from './Card';
import Pagination from '../Components/Pagination';
class Content extends React.Component{
    constructor(props) {
        super(props);
    }

    changeCurrentPage = numPage => {
        this.props.changeCurrentPage(numPage);
    };

    render() {
        console.log('content render')
        let cards = this.props.products.map(e => {
            if(e.TEN_SAN_PHAM[0] === '\"'){
                e.TEN_SAN_PHAM = e.TEN_SAN_PHAM.substring(1,e.TEN_SAN_PHAM.length - 1);
                e.THOI_DIEM_DANG = e.THOI_DIEM_DANG.substring(1,e.THOI_DIEM_DANG.length - 1);
            }

            return(
                <Card key={e._id} product={e}/>
            )
        })

        let {totals} = this.props;
        let temp = Math.floor(totals / 6);
        let pageCount = totals % 6 !== 0 ? (temp + 1) : temp;

        return ( 
            <div>
                <div className={"content-wrapper" }>
                    {cards}
                </div>

                <div id="pagination-wrapper">
                    <Pagination
                        totalpage={pageCount}
                        changeCurrentPage={this.changeCurrentPage}
                        currentPage={this.props.currentPage}
                    />
                </div>
            </div>
        )
    }
}

export default React.memo(Content);