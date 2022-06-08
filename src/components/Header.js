import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../assets/IconLogo.svg';


const Header = () => {
    return (
        <StyledHeader>
            <Logo>
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
`;

const Logo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LogoText = styled.div`
    padding-left: 10px;
    font-weight: 800;
    font-size: 1.56rem;
    color: #000;
`;