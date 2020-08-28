
// Core
import React from 'react';
import { render } from 'react-dom';

// App
import { App } from './containers/App';
import { AppProviders } from './containers/AppProviders';

// Init
import { initIconsLibrary } from './assets';

initIconsLibrary();

render(
    <AppProviders>
        <App />
    </AppProviders>,
    document.getElementById('app'),
);

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log('SW registered: ', registration);
        })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
