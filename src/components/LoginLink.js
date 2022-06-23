import React from 'react';
import styled from 'styled-components';

const LoginLink = ({icon, title, alt}) => {
    return (
        <StyledLink href='https://'>
            <LinkIcon>
                <img src={icon} alt={alt}/>
            </LinkIcon>
            <LinkTitle>
                {title}
            </LinkTitle>
        </StyledLink>
    );
};

export default LoginLink;

const StyledLink = styled.a`
    display: flex;
    justify-content: space-between;
    width: 231px;
    height: 59px;
    justify-content: left;
    align-items: center; 
    font-size: 0.94rem;
    font-weight: 400;
    color: #C9A31E;
    text-decoration-color: #C9A31E;
    transition: all .2s ease;
    :hover{
       color: #6BD4D4;
       text-decoration-color: #6BD4D4;
    };
    
    :active{
       color: #fff;
       text-decoration-color: #fff;
    };      
`;

const LinkTitle = styled.div`
    display: flex;
    background: #242424;
    padding-top: 15px;
    border: none; 
    outline: none;  
`;

const LinkIcon = styled.div`
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 15px 0 0;
    border: none; 
    outline: none;
    transition: all .2s ease;

`;