import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
class App extends Component {
  render() {
      function formatName(user) {
          return user.firstName + ' ' + user.lastName;
      }

      const user = {
          firstName: 'Rizwan',
          lastName: 'Jamal'
      };


      function getGreeting(user) {
          if (user) {
              return <h1>Hello, {formatName(user)}!</h1>;
          }
          return <h1>Hello, Stranger.</h1>;
      }

      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
            {getGreeting(user)}
        </div>

      </div>
    );
  }
}
*/

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }


    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date = {this.state.date}/>
                <FormattedDate date = {this.state.date} />
            </div>
        );
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
           date: new Date()
        });
    }
}
function FormattedDate(props){
    return <h2>It is {props.date.toLocaleString()}</h2>
}

//Functional Component
function Welcome(props){
    return <h2> Welcome {props.name} </h2>;
}
function App (){
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );

}

export default App;
