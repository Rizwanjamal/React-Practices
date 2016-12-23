import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
function Timer (){
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );

}

export default Timer;
