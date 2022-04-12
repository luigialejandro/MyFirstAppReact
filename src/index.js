//antes
/**
import React from 'react';
import ReactDOM  from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';


//const saludo = <h1>Hola Mundo</h1>;


//const divRoot = document.querySelector('#root');

//se visualiza el elemento div con el nombre #root en consola
//console.log(divRoot);

//ReactDOM.render( saludo, divRoot );

//a estas alturas, nos podríamos preguntar: ¿no sería más fácil hacerlo de
//la siguiente manera

//document.body.append( saludo );

//en teoría si daría el mismo resultado, pero hay que sacar provecho de
//Que ReactDOM nos ofrece otras características y de paso empezamos
//a crear nuestro árbol de componentes (y a comunicarse entre componentes de 
//manera sencilla)

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value={ 10 } /> , divRoot );

*/

//AHORA
//React 18

import React from 'react';
import { createRoot }  from 'react-dom/client';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#app');
const root = createRoot(divRoot);

root.render( <CounterApp value = { 10 } /> );


