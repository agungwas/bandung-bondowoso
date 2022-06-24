import React from 'react';
import ReactDOM from 'react-dom/client';
import {setupClients} from 'services/api';
import {persistor, store} from 'store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom';
import Router from 'route';

import 'styles/app.scss'; 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

/*Set Axios Clients*/
setupClients(store);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
              <ToastContainer/>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
