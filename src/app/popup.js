import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import '../assets/css/style.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Settings from '../components/settings';

function App() {
    return(<Settings/>)
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
