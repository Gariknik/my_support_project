import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';
import Monts400woff from "./assets/fonts/montserrat-v24-latin-regular.woff";
import Monts400woff2 from "./assets/fonts/montserrat-v24-latin-regular.woff2";
import Monts600woff from "./assets/fonts/montserrat-v24-latin-600.woff";
import Monts600woff2 from "./assets/fonts/montserrat-v24-latin-600.woff2";
import Monts800woff from "./assets/fonts/montserrat-v24-latin-800.woff";
import Monts800woff2 from "./assets/fonts/montserrat-v24-latin-800.woff2";
import './i18n';

const Global = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    };
    /* montserrat-regular - latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      src: url('${Monts400woff2}') format('woff2'), /* Super Modern Browsers */
           url(${Monts400woff}) format('woff'), /* Modern Browsers */
    };
    /* montserrat-800 - latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 800;
      src: 
           url('${Monts800woff2}') format('woff2'), /* Super Modern Browsers */
           url('${Monts800woff}') format('woff'), /* Modern Browsers */
    };
    
    /* montserrat-600 - latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      src: url('${Monts600woff2}') format('woff2'), /* Super Modern Browsers */
           url('${Monts600woff}') format('woff'), /* Modern Browsers */
    }
    body {
      font-family: 'Montserrat', sans-serif;
    };
`;

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Global/>
    <App />
  </Suspense>,
  document.getElementById(`root`)
);


reportWebVitals();
