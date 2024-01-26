import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.module.css';
import App from './App';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#FFF0BE',
    800: '#FEF1E2',
    700: '#F1F4FD',
  },
};

const CircularImageStyles = {
  baseStyle: ({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding:"5px",
    // borderRadius:"full",
    backgroundImage: `linear-gradient(to bottom, ${theme.colors.brand[700]}, ${theme.colors.brand[900]})`,
  }),
  iconStyle: {
    position: 'relative',
    zIndex: 1,
    marginTop: '-2px', 
  },
};




const theme = extendTheme({
  colors,
  components: {
    CircularImage: CircularImageStyles,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
