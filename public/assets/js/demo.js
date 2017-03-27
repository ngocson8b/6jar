import React from 'react';
import ReactDOM from 'react-dom';
// function formatDate(date) {
//     return date.toLocaleDateString();
// // }
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             data: []
//         }
//
//         this.setStateHandler = this.setStateHandler.bind(this);
//     };
//
//     setStateHandler() {
//         // var item =
//         var myArray = this.state.data;
//         myArray.push(new Date().toLocaleDateString())
//         this.setState({data: myArray})
//     };
//
//     render() {
//         return (
//             <div>
//                 <button onClick = {this.setStateHandler}> Set State </button>
//                 <h3>State array: {this.state.data} </h3>
//
//             </div>
//
//
//
//         );
//     }
// }
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'fdsfdf'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
        alert('A name was summited: ' + this.state.value.toUpperCase());
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>

                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}



export default App;
