import React from "react";
import './book-list-item.css'

const BookListItem = ({ book }) => {
    const {title, author, price, coverImage } = book;
    return (
        <div className="book-list-item">
        <div className="item-image"><img style={{height:'160px'}} src={coverImage} alt="cover"/></div>              
                <div className="item-details">
                    <span className="item-title">{title}</span>
                    <div className="item-author">{author}</div>
                    <div className="item-price">{price}</div>
                    <button className="card_button" type="submit">Add to Cart</button>
                </div>           
        </div>
    );
};

export default BookListItem;