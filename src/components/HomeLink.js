import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';



const HomeLink = ({icon, title, alt, href}) => {
    return (
            <StyledLink to={`/${href}`}>
                <LinkIcon>
                    <img src={icon} alt={alt}/>
                </LinkIcon>
                <LinkTitle>
                    {title}
                </LinkTitle>
            </StyledLink>
    );
};

export default HomeLink;

const StyledLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
    text-decoration: none;
`;

const LinkTitle = styled.div`
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
       color: #fff;
       background: #6BD5D5;
    };
    
    :active{
       color: #C9A31E;
       background: #fff;
       transform: translate(0, 5px);
    };
`;

const LinkIcon = styled.div`
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 5px;
    border: none; 
    outline: none;
    transition: all .2s ease;
    
    &:hover{
       fill: #fff;
       background: #6BD5D5;
    };
    
    &:active{
       color: #C9A31E;
       background: #fff;
       transform: translate(0, 5px);
    };
`;