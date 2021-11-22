import React from 'react';
import cartImage from '../../img/cart.svg';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header">
            <Link to="/">
                <div className="header-logo" href="#">React shop</div>
            </Link>
            <Link to="/cart">
                <div>
                    <img src={cartImage} class="cart-image" alt="cart"/>
                    <i className="cart" />
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    );
};

export default ShopHeader;