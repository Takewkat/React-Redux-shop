import React from 'react';
import { connect } from 'react-redux';

import './shopping-cart-table.css'
import addIcon from '../../img/add.png';
import removeIcon from '../../img/remove.png';
import trashIcon from '../../img/trash.png';

import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from '../../actions';


const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                    onClick={() => onIncrease(id)}
                    className="table_button" type="submit"><img src={addIcon} className="table_button-icon" alt="add"/></button> 
                    <button
                    onClick={() => onDecrease(id)}
                    className="table_button" type="submit"><img src={removeIcon} className="table_button-icon" alt="remove"/></button>  
                    <button
                    onClick={() => onDelete(id)} 
                    className="table_button" type="submit"><img src={trashIcon} className="table_button-icon" alt="trash"/></button>                     
                </td>
            </tr>
        );
    }    
    return(
        <div className="shopping-cart-container">
            <h2 className="cart-table-h2">Your Order</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>                    
                    { items.map(renderRow) }                    
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};
//Buttons connecting
const mapDispatchToProps = {
    onIncrease: bookAddedToCart,    
    onDecrease: bookRemovedFromCart,    
    onDelete: allBooksRemovedFromCart,       
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);