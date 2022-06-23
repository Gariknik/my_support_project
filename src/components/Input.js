import React from 'react';
import styled from "styled-components";

const Input = ({type='text', placeholder, register, name, required, pattern, error, rules, icon, alt}) => {
    const isValid = !Boolean(error[name]);
    return (
        <>
            <InputWrapper>
                <LinkIcon>
                    <img src={icon} alt={alt}/>
                </LinkIcon>
                <StyledInput
                    type={type}
                    placeholder={placeholder}
                    {...register(name, {
                        required: required ? 'Поле обязательное к заполнению' : false,
                        pattern: pattern,
                        ...rules
                    })}
                    isValid={isValid}
                />
            </InputWrapper>
            {!isValid && <ErrorText>{error[name]?.message}</ErrorText>}
        </>
    );
};

export default Input;

const StyledInput = styled.input`
    width: 426px;
    height: 61px;
    padding: 20px;
    border-radius: 5px;
    border: 2px solid ${props => props.isValid ? '#616161' : '#D12645'};
    background: #000;
    color: #fff;
    ::placeholder {
         color: #616161;
         font-size: 0.94rem;
    };
`;

const ErrorText = styled.p`
    color: #D12645;
    font-size: 0.94rem;
    position: absolute;
    margin: 0 0 0 100px
`;

const InputWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 34px 0 0;
`;


const LinkIcon = styled.div`
    display: block;
    width: 48px;
    height: 48px;
    border-radius: 5px;
    border: none; 
    outline: none;
    transition: all .2s ease;
    
    &:hover{
       fill: #fff;
       background: #6BD5D5;
    };
    
    &:active{
       color: #C9A31E;
       background: #fff;
       transform: translate(0, 5px);
    };
`;