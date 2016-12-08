import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginControl from './conditionalRendering';
import Mail from './inlineConditionalOperators';
import ListComponent from './listComponents';
import NameForm from './ControlledComponents';
import Calculator from './temperatureCalculator';
import FilterableProductTable from './productsFilterComponent';
import './index.css';

    ReactDOM.render(
        <FilterableProductTable />,
        document.getElementById('root')
    );
