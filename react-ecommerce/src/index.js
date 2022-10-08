import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import { UserProvider } from './context/UserContext';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
