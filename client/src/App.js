import React from 'react';

import './App.css';

function App() {
  let members = [
    { id: '1712118', email: '1712118@student.hcmus.edu.com', name: 'Huỳnh Ngọc Tiến Nhi', gitacc: 'tiennhi1999' },
    { id: '1712373', email: '1712373@student.hcmus.edu.com', name: 'Huỳnh Nhật Dương', gitacc: 'HuynhNhatDuong' },
    { id: '1712705', email: '1712705@student.hcmus.edu.com', name: 'Trần Duy Quang', gitacc: 'duyquang19981' },
    { id: '1712748', email: '1712748@student.hcmus.edu.com', name: 'Nguyễn Văn Tâm', gitacc: '' },
  ]

  let elementMembers = members.map(m => {
    return (
      <div class="card member">
        <img src={`./images/${m.id}.jpg`} class="card-img-top member-img" alt="..." />
        <div class="card-body">
          <span>
            <img src="https://t3.ftcdn.net/jpg/02/43/23/26/240_F_243232601_g3duyFUOxgHCDZmmcSaOhQiAuqWkM3Ds.jpg"></img>
            <h5 class="card-title">{m.name}</h5>
          </span>
          <p class="btn btn-primary">{m.id}</p>
          <p class="card-text">{m.email}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="row1 member-wrraper">
      <div className="member-header">
        <h3>Danh sách thành viên nhóm HCMUS-EC-20A10</h3>
      </div>

      <div className="member-body-wrraper">
        <div className="member-host">
          <div class="card member">
            <img src={`./images/1712879.jpg`} class="card-img-top member-img" alt="..." />
            <div class="card-body">
              <span>
                <img src="https://beautyhome.vn/wp-content/uploads/2018/07/thiet-ke-noi-that.png"></img>
                <h5 class="card-title">Phan Văn Tuấn</h5>
              </span>
              <p class="btn btn-primary">1712879</p>
              <p class="card-text">1712879@student.hcmus.edu.com</p>

            </div>
          </div>
          <div>
            <div id="fb-root"></div>
            <div class="fb-page" data-href="https://www.facebook.com/EC-20A10-112973660452108/?modal=admin_todo_tour" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/EC-20A10-112973660452108/?modal=admin_todo_tour" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/EC-20A10-112973660452108/?modal=admin_todo_tour">EC 20A10</a></blockquote></div>
            {/* //sdsd */}
          </div>
        </div>
      </div>

      <h3 className="member-header">Những Thành Viên Khác:</h3>
      <div className="member-body">
        {elementMembers}
      </div>
    </div>
      
  );
}

export default App;
