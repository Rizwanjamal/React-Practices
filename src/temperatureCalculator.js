/**
 * Created by Rj on 12/5/2016.
 */
import React, {Component} from 'react';

const scaleNames ={
    c: 'Celcius',
    f: 'Fahrenheit'
};

function toCelcius(fahrenheit){
    return (fahrenheit-32) * 5/9;
}
function toFahrenheit(celcius){
    return (celcius*9/5) + 32;
}
function tryToConvert(value,converterFuction){
    const number = parseFloat(value);
    if(Number.isNaN(number)){
        return '';
    }
    const output = converterFuction(number);
    const result = Math.round(output * 1000)/1000;
    return result.toString();
}

function BoilingVerdict(props){
    if(props.celcius >= 100){
        return <p>The Water Would Boil</p>;
    }
    else{
        return <p>The Water Would Not Boil</p>;
    }
}

class TemperatureInput extends Component{

    handleChange(event){
        this.props.onChange(event.target.value);
    }
    render(){
        const scale = this.props.scale;
        const value = this.props.value;
        return (
            <fieldset>
                <legend>
                    Please Enter Value In {scaleNames[scale]} :
                </legend>
                <input value={value} onChange={this.handleChange.bind(this)}/>
            </fieldset>
        );
    }
}



class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {value: '', scale: 'c'};
    }

    handleCelciusChange(value){
        this.setState({value: value, scale: 'c'});
    }
    handleFahrenheitChange(value){
        this.setState({value: value, scale: 'f'});
    }
    render(){
        const scale = this.state.scale;
        const value = this.state.value;
        const celcius = scale == 'f' ? tryToConvert(value,toCelcius) : value;
        const fahrenheit = scale == 'c' ? tryToConvert(value,toFahrenheit) : value;
        return(
            <div>
                <TemperatureInput scale='c' value={celcius} onChange={this.handleCelciusChange.bind(this)}/>
                <TemperatureInput scale='f' value={fahrenheit} onChange={this.handleFahrenheitChange.bind(this)}/>
                <BoilingVerdict celcius={celcius}/>
            </div>
        )
    }
}
 export default Calculator;
