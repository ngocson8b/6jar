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


// var Image = React.createClass({
//
//     // getInitialState(){
//     //     return (
//     //         { hinh: 1};
//     //     )
//     // },
//     render: function () {
//        return (
//          <div className="div-album">
//              <img src="file:///Volumes/NgocSon/VNLAB/local.gmorepeater.jp/public/assets/img/2.jpg" />
//              <hr />
//              <button>Tiep theo </button>
//              <button> Quay lai</button>
//
//          </div>
//        );
//    }
// });

var Note = React.createClass({
   render: function () {
       return(
         <div>
             <img src={this.props.src} />
             <p>{this.props.children}</p>
         </div>
       );
   }
});

var List = React.createClass({

    add(){
        this.state.mang.unshift({srcHinh: "http://kingofwallpapers.com/picture/picture-015.jpg", noiDung: "React JS"});
      this.setState(
            this.state
      );
    //  unshift la push tu tren xuong duoi, push la push xuong duoi cung
    },

    getInitialState(){
        return {
            mang: [
                {srcHinh: "http://kingofwallpapers.com/picture/picture-010.jpg", noiDung: "NST"}
            // list: ["xin chao", "NK", "TVC", "Phu Tho"]

        ]};
    },


    render(){
        return(
          <div>
              <img src={this.props.src} />
              <h1>Hay lam</h1>
              <button onClick={this.add}> Add </button>
              {this.state.mang.map(function (note, index) {
                  return <Note key={index} src={note.srcHinh}>{note.noiDung}</Note>
              })}
              {/*{this.state.list.map(function (note, index) {*/}
                  {/*return <h1 key={index}>{note}</h1>*/}
              {/*})}*/}
          </div>
        );
    }
});

function add() {
    render(<InputDiv />,document.getElementById('test'));
}

var list;

var Node = React.createClass({
   render: function(){
       return (
         <div >
             {this.props.children}
         </div>
       );
   }
});

var ReactList = React.createClass({

    getInitialState(){
        list = this;
        return {mang: ["Xin", "Chao", "Son"] }
    },

    render: function () {
       return(

         <div>
             {
                 this.state.mang.map(function (node, index) {
                     return <Node key={index}>{node}</Node>
                         })
                         }

             <button onClick={add}>Add</button>
             <div id="test"></div>
         </div>

       );
   }
});

var InputDiv = React.createClass({

    send(){
        list.setState({mang: list.state.mang.concat(this.refs.txt.value)});
    },
    // concat: nối mảng
    render: function () {
         return(
            <div>

                <input type="text" ref="txt" placeholder="Enter note!"/>
                <button onClick={this.send}> Submit </button>
            </div>
        );
    }
});

render(
    <div><Test giangvien="Ngoc Son Tran" ten="NK"> NhungKhi</Test>
        <InputTag />
        {/*<Image />*/}
        <List />
       <ReactList />
        {/*<InputDiv />*/}
    {/*<Note src="http://kingofwallpapers.com/picture/picture-015.jpg">Hello</Note>*/}
    </div>, document.getElementById('content1'));