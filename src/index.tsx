import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import App from './App'

i18n
    .use(XHR)
    // .use(LanguageDetector)
    .init({
        nsSeparator: false,
        keySeparator: false,
        debug: true
    })

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>,
    document.getElementById('app'))
