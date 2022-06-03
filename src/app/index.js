import React from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content"



const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const App = () => {
    return (
        <AppWrapper>
            <Header />
            <Content/>
            <Footer/>
        </AppWrapper>
    );
}

export default App;