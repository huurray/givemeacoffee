import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './redux/configStore';
const { store } = configureStore();
import * as serviceWorker from './serviceWorker';

const config = {
  apiKey: "AIzaSyCiqmi1G5H_cXdEPMZvb3FYwZbOf-zD0_o",
  authDomain: "givemeacoffee-3b000.firebaseapp.com",
  databaseURL: "https://givemeacoffee-3b000.firebaseio.com",
  projectId: "givemeacoffee-3b000",
  storageBucket: "",
  messagingSenderId: "169853933420"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
