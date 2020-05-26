import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import '../assets/css/style.css';
import ReactDOM from 'react-dom';
import React from 'react';
import HomeDispatcher from '../components/HomeDispatcher';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Helvetica',
  },
  palette: {
    secondary: {
      main: '#1b9e74',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HomeDispatcher />{' '}
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
