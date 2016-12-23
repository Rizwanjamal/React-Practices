import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'

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
              return (
                  <div>
                      <h1>Hello, {formatName(user)}!</h1>
                      <h3>Components</h3>
                  </div>
              )
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
            <ul role="nav" className="list-style">
                <li><Link to="/FilterableProductTable">Filterable Product Table</Link></li>
                <li><Link to="/Calculator">Calculator</Link></li>
                <li><Link to="/Timer">Timer</Link></li>
                <li><Link to="/LoginControl">Login Control</Link></li>
                <li><Link to="/Mail">Mail</Link></li>
                <li><Link to="/ListComponent">List Component</Link></li>
                <li><Link to="/NameForm">Name Form</Link></li>
            </ul>
        </div>

      </div>
    );
  }
}

export default App;
