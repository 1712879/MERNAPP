(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{32:function(e,t,a){e.exports=a(62)},37:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(29),r=a.n(o);a(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(2),i=a(3),l=a(5),u=a(4),p=a(6),d=a(10),m=a.n(d),h=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light w-100"},c.a.createElement("a",{className:"navbar-brand",href:"/"},"Home"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},c.a.createElement("ul",{className:"navbar-nav"})))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer-title"},c.a.createElement("h3",null,"S\u1ea3n Ph\u1ea9m Sample Site MERN"),c.a.createElement("h5",null,"Phan V\u0103n Tu\u1ea5n - 1712879"),c.a.createElement("h5",null,"HCMUS-EC-20A10"))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChoose=function(e){a.props.onChoose(e)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.category.map((function(t){return'"'===t.TEN_LOAI[0]&&(t.TEN_LOAI=t.TEN_LOAI.substring(1,t.TEN_LOAI.length-1)),c.a.createElement("li",{key:t._id,onClick:function(){return e.onChoose(t.MA_LOAI_HANG)}},t.TEN_LOAI)}));return c.a.createElement("div",{className:"category-wrapper"},c.a.createElement("div",{className:"card border-secondary mb-3 category"},c.a.createElement("h3",{className:"category-title"},"Danh M\u1ee5c"),c.a.createElement("ul",{className:"card-category"},t)))}}]),t}(c.a.Component),N=a(14),E=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"card mb-3 product"},c.a.createElement(N.b,{to:"/product/".concat(this.props.product.MA_SAN_PHAM)},c.a.createElement("div",{className:"card-header"},c.a.createElement("img",{className:"product-img",src:this.props.product.LINK_ANH})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},this.props.product.TEN_SAN_PHAM),c.a.createElement("p",{className:"card-text datepost"},this.props.product.THOI_DIEM_DANG),c.a.createElement("a",{className:"product-price"},"\u0111 ",this.props.product.GIA_HIEN_TAI))))}}]),t}(c.a.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={productslist:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.chooseID;m.a.get("/api/producttype/"+t).then((function(t){e.setState({productslist:t.data})})).catch((function(e){return console.log(e)}))}},{key:"componentWillReceiveProps",value:function(e){var t=this;console.log("nextcontent rendering");var a=e.chooseID;m.a.get("/api/producttype/"+a).then((function(e){t.setState({productslist:e.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.productslist.map((function(e){return'"'===e.TEN_SAN_PHAM[0]&&(e.TEN_SAN_PHAM=e.TEN_SAN_PHAM.substring(1,e.TEN_SAN_PHAM.length-1),e.THOI_DIEM_DANG=e.THOI_DIEM_DANG.substring(1,e.THOI_DIEM_DANG.length-1)),c.a.createElement(E,{key:e._id,product:e})}));return c.a.createElement("div",{className:"content-wrapper"},e)}}]),t}(c.a.Component),f=(a(60),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChoose=function(e){a.setState({chooseID:e})},a.state={category:[],chooseID:"LH001",loading:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;console.log("home rendering"),this.setState({loading:!0}),m.a.get("/api/category").then((function(t){e.setState({category:t.data})})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"componentDidMount",value:function(){console.log("home rendered"),this.setState({loading:!1})}},{key:"render",value:function(){return c.a.createElement("div",{className:"row1 body"},c.a.createElement(v,{category:this.state.category,onChoose:this.onChoose,loading:this.state.loading}),c.a.createElement(b,{chooseID:this.state.chooseID,loading:this.state.loading}))}}]),t}(c.a.Component)),_=(a(61),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).doChange=function(e){a.setState({active:e})},a.state={product:[],productType:"",relatedProduct:[],active:1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.id;m.a.get("/api/product/"+t).then((function(t){e.setState({product:t.data,productType:t.data[0].MA_LOAI_HANG})})).then((function(a){m.a.get("/api/product-related/".concat(e.state.productType,"/").concat(t)).then((function(t){e.setState({relatedProduct:t.data})}))})).catch((function(e){return console.log(e)}))}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=e.match.params.id;m.a.get("/api/product/"+a).then((function(e){t.setState({product:e.data,productType:e.data[0].MA_LOAI_HANG,active:1})})).then((function(e){m.a.get("/api/product-related/".concat(t.state.productType,"/").concat(a)).then((function(e){t.setState({relatedProduct:e.data})}))})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state.relatedProduct.map((function(e){return c.a.createElement(E,{key:e._id,product:e})})),a=this.state.product.map((function(a){'"'===a.TEN_SAN_PHAM[0]&&(a.TEN_SAN_PHAM=a.TEN_SAN_PHAM.substring(1,a.TEN_SAN_PHAM.length-1),a.THOI_DIEM_DANG=a.THOI_DIEM_DANG.substring(1,a.THOI_DIEM_DANG.length-1));var n=[];return n.push({stt:1,link:a.LINK_ANH}),n.push({stt:2,link:a.LINK_ANH_BS1}),n.push({stt:3,link:a.LINK_ANH_BS2}),n.push({stt:4,link:a.LINK_ANH_BS3}),c.a.createElement("div",{key:a._id,className:"row1 product-detail"},c.a.createElement("div",{className:"product-wrapper"},c.a.createElement(O,{images:n,active:e.state.active,doChange:e.doChange}),c.a.createElement("div",{className:"product-info"},c.a.createElement("div",{className:"product-title"},c.a.createElement("h1",null,a.TEN_SAN_PHAM)),c.a.createElement("div",{className:"product-body"},c.a.createElement("p",null,"Ng\xe0y \u0111\u0103ng: ",a.THOI_DIEM_DANG),c.a.createElement("p",null,"M\xf4 t\u1ea3: ",a.MO_TA),c.a.createElement("p",{className:"productdetail-price"},"\u0111 ",a.GIA_HIEN_TAI),c.a.createElement("p",null,"Th\xf4ng tin kh\xe1c: ***"))),c.a.createElement("div",{className:"related-title"},c.a.createElement("h2",null,"S\u1ea3n ph\u1ea9m t\u01b0\u01a1ng t\u1ef1"))),c.a.createElement("div",{className:"product-related"},t),c.a.createElement("div",{id:"pagination-container"}))}));return c.a.createElement("div",null,a)}}]),t}(c.a.Component)),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).goLeft=function(){console.log("left");var e=a.props.active;1===e?e=4:e--,a.props.doChange(e)},a.goRight=function(){console.log("right");var e=a.props.active;4===e?e=1:e++,a.props.doChange(e)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.images.map((function(t){return c.a.createElement("div",{key:t.stt,className:"slide-wrapper"},c.a.createElement("img",{className:t.stt===e.props.active?"slide active":"slide",src:t.link}))}));return c.a.createElement("div",{className:"image-detail"},t,c.a.createElement("a",{className:"bt goLeft",onClick:this.goLeft},c.a.createElement("img",{className:"icon pre",src:"https://cdn.iconscout.com/icon/premium/png-256-thumb/previous-69-661269.png"})),c.a.createElement("a",{className:"bt goRight",onClick:this.goRight},c.a.createElement("img",{className:"icon next",src:"https://png.pngtree.com/svg/20170523/d62342689e.png"})))}}]),t}(c.a.Component),A=_,y=a(12);r.a.render(c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"row1 header"},c.a.createElement(h,null)),c.a.createElement(N.a,null,c.a.createElement(y.c,null,c.a.createElement(y.a,{exact:!0,path:"/",component:f}),c.a.createElement(y.a,{path:"/product/:id",component:A}))),c.a.createElement("div",{className:"row1 footer"},c.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.7eeb1406.chunk.js.map