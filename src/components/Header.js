import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LogoIcon from '../assets/IconLogo.svg';


const Header = () => {
    const {t, i18n} = useTranslation('translation',  {keyPrefix: 'header'});
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    };
    const changeLocale = (e) => changeLanguage(e.target.value);
    return (
        <StyledHeader>
            <Logo>
                <img src={LogoIcon} alt={t("iconLogoAlt")}/>
                <LogoText>SUPPORT.GE</LogoText>
            </Logo>
            <div>
                <StyledButtonLocale onClick={changeLocale} value='uk'>{t("UK")}</StyledButtonLocale>
                <StyledButtonLocale onClick={changeLocale} value='en'>{t("EN")}</StyledButtonLocale>
            </div>
        </StyledHeader>
    );
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
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const StyledButtonLocale = styled.button`
	width: 50px;
	height: 50px;
	font-size: 0.94rem;
	font-weight: 400;
	color: #242424;
	background: #fff;
	border: none;
	text-decoration-color: #C9A31E;
	transition: all .2s ease;
	:hover{
		color: #6BD4D4;
	};

	:active{
		color: #C9A31E;
	}; 
	:focus{
		color: #C9A31E;
		border: 1px solid #242424;
	};   
`;