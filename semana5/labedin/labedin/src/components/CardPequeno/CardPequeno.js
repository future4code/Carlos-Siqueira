import React from 'react';
//import './CardPequeno.css'
import styled from 'styled-components'

const Divin = styled.div`
   display: flex;
    align-items: center;
    padding-right: 8px;
    border: 1px solid black;
`;
const Imgin = styled.img`
width: 70px;
max-height: 55px;
margin-right: 10px;
border-radius: 50%;
`;


function CardPequeno(props) {
    return (
        <Divin >
            <Imgin src={ props.imagem }  alt={props.imagem } />
            <div>
                <p>{ props.texto }</p>
            </div>
        </Divin>
    )
}

export default CardPequeno;