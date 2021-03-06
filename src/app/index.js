import React from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";


const App = () => {
    return (
        <AppWrapper>
            <Header />
            <LoginPage/>
            <Footer/>
        </AppWrapper>
    );
}

export default App;


const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
`;