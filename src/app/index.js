import React from "react";
import styled from 'styled-components';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Error from "../pages/Error"


const App = () => {
    return (
        <BrowserRouter>
            <AppWrapper>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <Footer/>
            </AppWrapper>
        </BrowserRouter>
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