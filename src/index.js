import React from 'react';
import ReactDom from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import './index.css'; 
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';


const divRoot = document.querySelector('#root');

// ReactDom.render( <PrimeraApp saludo="Hola soy Goku" />, divRoot );

ReactDom.render( <CounterApp value={ 10 } />, divRoot );