import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import { theme } from './utilits/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<BrowserRouter basename="movies-react">
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
);
