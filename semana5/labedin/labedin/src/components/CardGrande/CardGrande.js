import React from 'react';
//import './CardGrande.css'

import styled from 'styled-components'

const BigcardContainerDivao=styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const BigcardContainerImgao=styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `;
    

const BigcardContainerH4=styled.h4`
    margin-bottom: 15px;
`;

const BigcardContainerDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

function CardGrande(props) {
    return (
        <BigcardContainerDivao>
            <BigcardContainerImgao src={ props.imagem } alt={props.imagem } />
            <BigcardContainerDiv>
                <BigcardContainerH4>{ props.nome }</BigcardContainerH4>
                <p>{ props.descricao }</p>
            </BigcardContainerDiv>
        </BigcardContainerDivao>
    )
}

export default CardGrande;