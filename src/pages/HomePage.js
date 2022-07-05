import React from 'react';
import HomeLink from "../components/HomeLink";
import styled from 'styled-components';
import Into from '../assets/icons/Into.svg'
import AddUser from "../assets/icons/AddUser.svg";
import AddService from "../assets/icons/AddService.svg";

const HomePage = () => {
    return (
        <StyledContent>
            <Title>
                Вітаємо на SUPPORT.CLONE
            </Title>
            <HomeLink icon={Into} title='Увійти в особистий кабінет' alt='icon for a cabinet link' linkTo="login" />
            <HomeLink icon={AddUser} title='Зареєструвати користувача' alt='icon for a user registration link' />
            <HomeLink icon={AddService} title='Реєстрація сервісу' alt='icon for a service registration link' />
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