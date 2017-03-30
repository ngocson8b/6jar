/**
 * Created by ngocsontran on 3/30/17.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'



var TestInput = React.createClass({

    getInitialState(){
        return {text: "NST"};
    },

    show(){

        this.setState({text: this.refs.txt.value});
    },


    render: function () {
       return(
           <div>
               <input type="text" ref="txt" placeholder="Enter note!" />
               <h2>{this.state.text}</h2>
           </div>
       );
   },
    componentDidMount(){
        setInterval(this.show,100);
    }
});



ReactDOM.render(<TestInput />, document.getElementById('content3'));