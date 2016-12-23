import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timer from './timer';
import LoginControl from './conditionalRendering';
import Mail from './inlineConditionalOperators';
import ListComponent from './listComponents';
import NameForm from './ControlledComponents';
import Calculator from './temperatureCalculator';
import FilterableProductTable from './productsFilterComponent';
import './index.css';
import { Router, Route, hashHistory } from 'react-router'

    ReactDOM.render(
        <Router history={hashHistory}>
        <Route path="/" component={App} />
        {/* add the routes here */}
        <Route path="/Timer" component={Timer} />
        <Route path="/LoginControl" component={LoginControl} />
        <Route path="/Mail" component={Mail} />
        <Route path="/ListComponent" component={ListComponent} />
        <Route path="/NameForm" component={NameForm} />
        <Route path="/Calculator" component={Calculator} />
        <Route path="/FilterableProductTable" component={FilterableProductTable} />
    </Router>,
        document.getElementById('root')
    );
