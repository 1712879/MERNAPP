import React from 'react';
class Category extends React.Component{
    constructor(props) {
        super(props)
    }

    onChoose = (maloaihang) => {
        this.props.onChoose(maloaihang);
    }

    render(){
        console.log('cate render')
        let category = this.props.category.map(e => {
            if(e.TEN_LOAI[0] === '\"'){
                e.TEN_LOAI = e.TEN_LOAI.substring(1, e.TEN_LOAI.length - 1);
            }

            return(
                <li key = {e._id} className={this.props.isActive === e.MA_LOAI_HANG ? "categoryactive" : ""} onClick={() => this.onChoose(e.MA_LOAI_HANG)}>
                    {e.TEN_LOAI}
                </li>
            )
        })

        return(
            <div className="category-wrapper ml-1">
                <div className="card border-secondary mb-3 category">
                    <h3 className="category-title">Danh Mục</h3>
                    
                    <ul className="card-category">
                        {category}
                    </ul>
                    
                </div>
            </div>
        )
    }
}

export default React.memo(Category);