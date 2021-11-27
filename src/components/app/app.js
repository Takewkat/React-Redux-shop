import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';
//import total from './shopping-cart-table';

import './app.css';

const App = () => {    
    return (
        <main role='main' className="container">   
            <ShopHeader numItems={2222} total={1}/> 
            <Routes>
                <Route path="/"
                element={<HomePage />} />
                <Route path="/cart" 
                element={<CartPage />}/>
            </Routes>           
        </main>
    )    
};

export default (App);
