import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Input from "../components/Input";
import LoginLink from "../components/LoginLink";
import Lock from "../assets/icons/LockIcon.svg";
import EmailIcon from "../assets/icons/EmailIcon.svg";
import PasswordIcon from "../assets/icons/PasswordIcon.svg";

const MIN_LENGTH = 6;
const MAX_LENGTH = 25;
const EMAIL_PATTERN = /^([^!#$%&‘*+-/=?^_`{|}~ ])([a-z_A-Z.0-9-]*)@\w{1,63}\.\w{1,63}([^!#$%&‘*+—/=?^_`{|}~ ])$/;
const PASSWORD_PATTERN = /^[^ ]+/g;


async function loginUser(url = '', data = {}) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        const message = result.message;
        const status = result.status;
        const token = result.token ? result.token : '';
        if (response.ok) {
            return {message, status, token}
        }
        if (status === 'error'){
            return {status, message}
        }
        const error = await response;
        throw new Error(error);
    }
    catch (error) {
        console.warn('catch error: ', error);
    }
}

const LoginPage = () => {
    const {t} = useTranslation('translation',  {keyPrefix: 'loginpage'});

    const [responseMessage, setResponseMessage] = useState('')
    const [responseIsError, setResponseIsError] = useState(false)
    const {
        register,
        reset,
        formState: { errors, isValid },
        handleSubmit
    } = useForm({mode: "onBlur"});

    const onSubmit = async (data, event) => {
        const result = await loginUser(`https://my.support.ua/mobile-ge-api/login?api_key=55d41bafc7d483d86d31c9c7d3e6cfea`, data);
        setResponseMessage(result.message);
        const isError = result.status === 'error';
        setResponseIsError(isError);
        if (!isError){
            reset();
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Title>{t("title")}</Title>
            <StyledMessage isError={responseIsError}>{responseMessage}</StyledMessage>
            <Input
                placeholder={t("placeholders.email")}
                register={register}
                name='email'
                required={true}
                pattern={{
                    value: EMAIL_PATTERN,
                    message: t("errors.validEmail")}
                }
                icon={EmailIcon}
                alt={t("alts.iconEmail")}
                error={errors}
            />
            <Input
                type='password'
                placeholder={t("placeholders.password")}
                register={register}
                name="password"
                required={true}
                pattern={{
                    value: PASSWORD_PATTERN,
                    message: t("errors.validPassword")
                }}
                rules={{
                    minLength: {
                        value: MIN_LENGTH,
                        message: t("errors.minLength")
                    },
                    maxLength: {
                        value: MAX_LENGTH,
                        message: t("errors.maxLength")
                    }
                }}
                icon={PasswordIcon}
                alt={t("alts.iconPassword")}
                error={errors}
            />
            <LoginLinkWrapper>
                <LoginLink icon={Lock} title={t("links.passwordReset")} alt={t("alts.iconLogin")}/>
                <StyledButtonSubmit type="submit" value={t("links.login")} disabled={!isValid} />
            </LoginLinkWrapper>
        </StyledForm>
    );
};
export default LoginPage;

const StyledForm = styled.form`
    z-index: 1;
    width: 728px;
    height: 423px;
    background: #242424;
    border-radius: 7px;
    padding: 40px 100px;
    color: #fff;
`;

const Title = styled.h1 `
    font-size: 1.6875rem;
    color: #fff;
    font-weight: 600;
`;

const StyledMessage = styled.p `
    color: ${props => props.isError ? '#ff1522' : '#2ed122'};
 `;

const LoginLinkWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 34px 0 0;
`;

const StyledButtonSubmit = styled.input`
    display: flex;
    width: 195px;
    height: 58px;
    background: #F5DC00;
    border-radius: 5px;
    border: none; 
    outline: none;
    font-size: 1.125rem;
    font-weight: 600;
    color: #242424;
    justify-content: center;
    align-items: center;
    transition: all .2s ease;
    
    :hover{
       color: #fff;
       cursor: pointer;
       background: #6BD5D5;
    };
    
    :active{
       color: #C9A31E;
       background: #fff;
       transform: translate(0, 5px);
    };
`;
