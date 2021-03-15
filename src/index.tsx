import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'pages/app';
import './global.scss';

ReactDOM.render(
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
