// import React from 'react';
// import ReactDOM from 'react-dom';
// function formatDate(date) {
//     return date.toLocaleDateString();
// }
// var Test = React.createClass({
//     render: function(){
//     return (
//         <div>
//             <h3> Click the button</h3>
//             <input type="submit" />
//         </div>
//     );
// }
// });
//
// var App = React.createClass({
//    getInitialState: function(){
//        return {
//            active: false
//        }
//    } ,
//     handleClick: function () {
//         this.setState({
//             active: !this.state.active
//         });
//     },
//     render: function () {
//         var buttonSwitch = this.state.active ? "On" : "Off";
//         return (
//             <div>
//                 <p>CLick the button!</p>
//                 <input type="submit" onClick={this.handleClick} />
//                 <p>{buttonSwitch}</p>
//             </div>
//         );
//     }
// });
//
//     var Time = React.createClass({
//         render: function tick() {
//             return (
//                 <div>
//                     <h1>HEllo</h1>
//                     <h2>It is {new Date().toLocaleDateString()}.</h2>
//                 </div>
//             );
//
//         }
//
//
//     });
//
//
//
//
//
//
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                      src={props.author.avatarUrl}
//                      alt={props.author.name} />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//             <Test />
//             <App />
//             <Time />
//
//         </div>
//     );
// }
//
//

//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './demo.js';
//
//
// ReactDOM.render(<App />,document.getElementById('content'));
//

////////////////////////////////////////////////////

//import 'todomvc-app-css/index.css';;
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import TodoApp from './src/reducers';
import App from './src/components/App';
// import Time from './src/time.js';

let store = createStore(TodoApp)

var Test = React.createClass({


    render: function () {
        return (
          <div>{this.props.name}</div>
        );
    }
});
var Time = React.createClass({

    newTime(){
      this.setState({times: Date().toLocaleString()

      });
    },
    showTime(){
        alert(this.state.times);
    },

    getInitialState(){
       return {times: Date().toLocaleString()};
    },

    render: function() {
        return (
            <div>
                <h1>Hello, world!</h1>



                <h2>It time {this.state.times}</h2>
                <button onClick={this.showTime}>Bay gio la</button>
            </div>
        )

// });



    },
    componentDidMount(){
     setInterval(this.newTime,1000);
    }

});



render(
    <Provider store={store}>
       <div> <App />
        < Test name="TNS" />
           <Time />

       </div>
    </Provider>,
    document.getElementById('content')
);
//
// render(
//     <Test  name = "TNSs" />, document.getElementById('content2')
// );










