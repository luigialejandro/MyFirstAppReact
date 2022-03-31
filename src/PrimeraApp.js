import React, { Fragment } from 'react';

//Functional Components

const PrimeraApp = () => {

    const saludo = 'Hola Mundo';

    return (
        <Fragment>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.strongify( saludo, null, 3 ) } </pre> */}
            <p>Mi primera aplicación</p>
        </Fragment>
    );
}

export default PrimeraApp;