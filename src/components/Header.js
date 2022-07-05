import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import LogoIcon from '../assets/IconLogo.svg';


const Header = () => {
    return (
        <StyledHeader>
            <Logo to='/'>
                <img src={LogoIcon} alt='Logo'/>
                <LogoText>SUPPORT.GE</LogoText>
            </Logo>
        </StyledHeader>
)
    ;
};

export default Header;


const StyledHeader = styled.header`
    position: fixed;
    z-index: 2;
    top: 0;
    width: 100%;
    height: 72px;
    border-radius: 0 0 7px 7px;
    background: #fff;
    padding: 10px 60px;
    text-decoration: none;
`;


const Logo = styled(Link)`
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const LogoText = styled.div`
    padding-left: 10px;
    font-weight: 800;
    font-size: 1.56rem;
    color: #000;
`;