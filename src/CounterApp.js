import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {
    //useState Hook
    //const state = useState('Goku');
    //otra forma de escribir la línea de arriba (con desestructuración)
    //const [ nombre, setNombre ] = useState('Goku');
    //console.log( state );

    //ahora si, el el useState Hook aplicado a mi aplicación Counter

    const [ counter, setCounter ] = useState( value );

    //handleAdd
    const handleAdd = () => {
        //counter++; //manejar la variable counter directamente está mal. En su lugar:
        setCounter( counter + 1 );
        //otra forma de escribir el cuerpo de setCounter sería
        //setCounter( (c) => c + 1 );
    }

    //ahora, una función para decremento en uno.
    const handleSubstract = () => setCounter( counter - 1 );

    const handleReset = () => setCounter( value );
    

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleSubstract }>-1</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;