import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
    display: flex;
    justify-content: space-between;
    margin: 0 0 48px 0;
    text-decoration: none;

`;

const TextButton = styled.div`
    display: flex;
    width: 426px;
    height: 48px;
    background: #F5DC00;
    border-radius: 5px;
    border: none; 
    outline: none;
    font-size: 1.125rem;
    font-weight: 600;
    color: #242424;
    justify-content: center;
    align-items: center;
    transition: all .2s ease;
    :hover{
       color: white;
       background: #6BD5D5;
    };
    :active{
       color: #C9A31E;
       background: white;
       transform: translate(0em, 0.3rem);
    };
`;

const IconButton = styled.div`
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 5px;
    border: none; 
    outline: none;
    transition: all .2s ease;
    &:hover{
       fill: white;
       background: #6BD5D5;
    };
    &:active{
       color: #C9A31E;
       background: white;
       transform: translate(0em, 0.3rem);
    };
`;

const Button = ({valueIcon, valueText}) => {
    return (
        <StyledButton href='https://'>
            <IconButton>
                <img src={valueIcon} alt='link to'/>
            </IconButton>
            <TextButton>
                {valueText}
            </TextButton>
        </StyledButton>
)
    ;
};

export default Button;