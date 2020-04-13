import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import '../assets/css/style.css';
import ReactDOM from 'react-dom';
import React from 'react';
import HomeDispatcher from '../components/HomeDispatcher';
import { SnackbarProvider } from 'notistack';

function App() {
    return(<HomeDispatcher/>)
}

ReactDOM.render(
    <SnackbarProvider
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
    >
        <App />
    </SnackbarProvider>,
    document.getElementById('app')
);
