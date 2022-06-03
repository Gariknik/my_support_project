import React from 'react';
import Button from "./Button";
import styled from 'styled-components';
import Into from '../assets/Into.svg'
import AddUser from "../assets/AddUser.svg";
import AddService from "../assets/AddService.svg";

const FormStyle = styled.div`
    z-index: 1;
    width: 728px;
    height: 423px;
    background: #242424;
    border-radius: 7px;
    padding: 40px 100px 40px 100px;
`;

const TitleForm = styled.h2 `
    font-size: 1.6875rem;
    color: #FFFFFF;
    font-weight: 600;
    margin: 0 0 32px 0;
`;

const Content = () => {
    return (
        <FormStyle>
            <TitleForm>
                Вітаємо на SUPPORT.GE
            </TitleForm>
            <Button valueIcon={Into || null} valueText={'Увійти в особистий кабінет' || null}/>
            <Button valueIcon={AddUser || null} valueText={'Зареєструвати користувача' || null}/>
            <Button valueIcon={AddService || null} valueText={'Реєстрація сервісу' || null}/>
        </FormStyle>
)
    ;
};

export default Content;