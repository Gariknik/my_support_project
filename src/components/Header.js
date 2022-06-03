import React from 'react';
import styled from 'styled-components';
import IconLogo from '../assets/IconLogo.svg';

const HeaderStyle = styled.header`
    position: fixed;
    z-index: 2;
    top: 0;
    width: 100%;
    height: 4.5rem;
    border-radius: 0 0 7px 7px;
    background: white;
    padding: 10px 60px 10px 60px;
`;

const Label = styled.div`
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const LabelText = styled.h1`
    padding: 0px 0px 0px 10px;
    font-weight: 800;
    font-size: 1.56rem;
    color: #000000;
`;

const Header = () => {
    return (
        <HeaderStyle>
            <Label>
                <img src={IconLogo} alt='Logo'/>
                <LabelText>SUPPORT.GE</LabelText>
            </Label>
        </HeaderStyle>
)
    ;
};

export default Header;