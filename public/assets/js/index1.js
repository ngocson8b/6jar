import React from 'react'
import { render } from  'react-dom'


function getName(name) {
    alert(name);
}


var Test = React.createClass({
    a(){
        getName(this.props.giangvien)
    },
    layThongTin: function () {
        alert(this.props.children);

    },
    render: function () {
        return (
            <div>
                <h1>{this.props.ten} - {this.props.giangvien}</h1>
                <p>{this.props.children}</p>
                <button onClick={() => {getName(this.props.children)}}>Thong tin</button>
                <TuVaiChay />
            </div>
        );
    }
});

var TuVaiChay = React.createClass({
   render: function () {
       return(
           <h3> Hoc React </h3>

       )
   }
});

var InputTag = React.createClass({

    show(){

        var text = this.refs.sl.value;
        alert(text);
        var text2 = this.refs.txt.value;
        alert(text2);


    },

    render: function () {
       return (
         <div>
             <select ref="sl">
                <option value="Lop B" > Lop B </option>
                 <option value="Lop C"> Lop C</option>
                 <option value="Lop A"> Lop A </option>
             </select>
             <input type="text" ref="txt"/>
             <button onClick={this.show}>Hien thi</button>
         </div>
       );
   }
});


var Image = React.createClass({
   render: function () {
       return (
         <div className="div-album">
             <img src="https://i.ytimg.com/vi/U4u62DeY_c0/maxresdefault.jpg" />
             <hr />
             <button>Tiep theo </button>
             <button> Quay lai</button>

         </div>
       );
   }
});



render(
    <div><Test giangvien="Ngoc Son Tran" ten="NK"> NhungKhi</Test>
        <InputTag />
        <Image />

    </div>, document.getElementById('content1'));