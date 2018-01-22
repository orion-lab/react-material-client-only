import React from 'react';
import ReactDOM from 'react-dom';
// import { whyDidYouUpdate } from 'why-did-you-update';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

window.onGoogleYoloLoad = (googleyolo) => {
  ReactDOM.render(
    <App googleyolo={googleyolo} />,
    document.getElementById('root'),
  );
};

if (process.env.NODE_ENV !== 'production') {
  // whyDidYouUpdate(React);
}
