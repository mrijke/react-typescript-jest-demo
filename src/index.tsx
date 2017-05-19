import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import nl from 'react-intl/locale-data/nl';
import it from 'react-intl/locale-data/it';

addLocaleData(nl);
addLocaleData(it);

const locale = 'en';

// const messages = require(`./translations/locales/${locale}.json`);

import App from './App';

ReactDOM.render(
    <IntlProvider locale={locale} messages={{}} key={locale}>
        <App />
    </IntlProvider>, 
document.getElementById('app'))
