import React from 'react';
import './shopping-cart-table.css'
import addIcon from '../../img/add.png';
import removeIcon from '../../img/remove.png';
import trashIcon from '../../img/trash.png';

const ShoppingCartTable = () => {
    return(
        <div className="shopping-cart-container">
            <h2 className="cart-table-h2">Your Order</h2>
            <table>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Site Reliability Engineering</td>
                    <td>2</td>
                    <td>$40</td>
                    <td>
                        <button className="table_button" type="submit"><img src={addIcon} className="table_button-icon" alt="add"/></button> 
                        <button className="table_button" type="submit"><img src={removeIcon} className="table_button-icon" alt="remove"/></button>  
                        <button className="table_button" type="submit"><img src={trashIcon} className="table_button-icon" alt="trash"/></button>                     
                    </td>
                </tr>
            </table>
            <div className="total">
                Total: $201
            </div>
        </div>
    );
};

export default ShoppingCartTable;