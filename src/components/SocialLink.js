import React from 'react';
import styled from "styled-components";

const SocialLink = ({icon, link, alt}) => {
    return (
        <StyledLink href={link} target="_blank">
            <img src={icon} alt={alt}/>
        </StyledLink>
    );
};

export default SocialLink;

const StyledLink = styled.a`
    margin: 0 12px;
    width: 24px;
    height: 24px;
    transition: all .2s ease;
    :hover{
       background: #000;
    };
    
    :active{
       color: #C9A31E;
       background: #F5DC00;
       transform: translate(0, 5px);
    };
`;