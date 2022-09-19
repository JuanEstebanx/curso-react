import PropTypes from 'prop-types';
import React from 'react';

export function Button ({text, name = "Hola"}){

    return <button onClick={function (){
        console.log('PGLOOOOOOOOOOOO');
}}>
        {text} - {name}
    </button>

}

Button.prototypes = {
    text: PropTypes.string.isRequired
}
