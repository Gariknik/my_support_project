import React from 'react';
import { useTranslation } from 'react-i18next';
import HomeLink from "../components/HomeLink";
import styled from 'styled-components';
import Into from '../assets/icons/Into.svg'
import AddUser from "../assets/icons/AddUser.svg";
import AddService from "../assets/icons/AddService.svg";

const HomePage = () => {
    const {t} = useTranslation('translation',  {keyPrefix: 'homepage'});
    return (
        <StyledContent>
            <Title>
                {t("title")}
            </Title>
            <HomeLink icon={Into} title={t("login.link")} alt={t("login.alt")} href="login" />
            <HomeLink icon={AddUser} title={t("createAccount.link")} alt={t("createAccount.alt")} />
            <HomeLink icon={AddService} title={t("createService.link")} alt={t("createService.alt")} />
        </StyledContent>
    );
};

export default HomePage;

const StyledContent = styled.div`
    z-index: 1;
    width: 728px;
    height: 423px;
    background: #242424;
    border-radius: 7px;
    padding: 40px 100px;
`;

const Title = styled.h1 `
    font-size: 1.6875rem;
    color: #FFFFFF;
    font-weight: 600;
    margin: 0 0 32px 0;
`;