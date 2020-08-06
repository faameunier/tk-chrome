import '../assets/css/style.css';
import ReactDOM from 'react-dom';
import React from 'react';
import OnboardingDispatcher from '../components/OnboardingDispatcher';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Helvetica',
  },
  palette: {
    secondary: {
      main: '#00b9aa',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <OnboardingDispatcher />{' '}
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('onboarding'));
