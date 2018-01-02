import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Title from './components/Title';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}

