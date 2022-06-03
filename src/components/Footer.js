import React from 'react';
import styled from 'styled-components';
import InstaIcon from '../assets/InstaIcon.svg';
import FacebookIcon from '../assets/FacebookIcon.svg';

const FooterStyle = styled.footer `
    position: fixed;
    z-index: 0;
    bottom: 0;
    width: 100%;
    height: 138px;
    background: #F5DC00;
    box-shadow: 0px -14px 50px #FFFFFF;
    padding: 50px 106px 30px 106px;
`;

const FooterBlock = styled.div `
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
`;
const FooterText = styled.p`
    margin: 0px 0px 0px 18px;
    font-weight: 400;
    font-size: 0.875rem;
    color: #242424;
`;

const InstaLink = styled.a`
    display: block;
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
       transform: translate(0em, 0.3rem);
    };
`;
const FacebookLink = styled.a`
    display: block;
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
       transform: translate(0em, 0.3rem);
    };
`;


const Footer = () => {
    return (
        <FooterStyle>
            <FooterBlock>
                <InstaLink href='https://www.instagram.com' target="_blank">
                    <img src={InstaIcon} alt='Link to Instagram'/>
                </InstaLink>
                <FacebookLink href='https://www.facebook.com' target="_blank">
                    <img src={FacebookIcon} alt='Link to Facebook'/>
                </FacebookLink>
                <FooterText>© 2021 ООО SUPPORT.GE</FooterText>
            </FooterBlock>
        </FooterStyle>
)
    ;
};

export default Footer;