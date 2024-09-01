import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
// import store from './store/store.js';
import { AuthContextProvider } from './context/AuthContext.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
