import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem }  alt={props.imagem } />
            <div>
                <p>{ props.texto }</p>
            </div>
        </div>
    )
}

export default CardPequeno;