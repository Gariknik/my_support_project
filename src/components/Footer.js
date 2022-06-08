import React from 'react';
import styled from 'styled-components';
import SocialLink from "./SocialLink";
import InstagramIcon from '../assets/social-media/InstaIcon.svg';
import FacebookIcon from '../assets/social-media/FacebookIcon.svg';


const Footer = () => {
    return (
        <StyledFooter>
            <SocialLink icon={InstagramIcon} link='https://www.instagram.com' alt='Link to Instagram' />
            <SocialLink icon={FacebookIcon} link='https://www.facebook.com' alt='Link to Facebook' />
            <FooterCopyrights>© 2021 ООО SUPPORT.GE</FooterCopyrights>
        </StyledFooter>
)
    ;
};

export default Footer;

const StyledFooter = styled.footer `
    position: fixed;
    z-index: 0;
    bottom: 0;
    width: 100%;
    height: 138px;
    background: #F5DC00;
    box-shadow: 0 -14px 50px #FFFFFF;
    padding: 50px 106px 30px;
    display: flex;
    justify-content: end;
    align-items: end;
`;


const FooterCopyrights = styled.p`
    margin: 0 0 0 18px;
    font-weight: 400;
    font-size: 0.875rem;
    color: #242424;
`;
