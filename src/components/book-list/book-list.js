import React, { Component } from "react";
import { connect } from "react-redux";

import BookListItem from '../book-list-item';
import { fetchBooks } from '../../actions';
import { withBookstoreService } from '../hoc';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({ books }) => {
    return (
                <ul className="item-list">
                    {
                        books.map((book) => {
                            return (
                                <li key={book.id}><BookListItem book={book} /></li>
                            )
                        })
                    }
                </ul>
            );
};

class BookListContainer extends Component {
 //можно переписать на useEffect 
    componentDidMount() {
        this.props.fetchBooks(); 
        
        /* //1. receive data
            const { 
                bookstoreService, booksLoaded, booksRequested, booksError
            } = this.props;
            booksRequested();
            bookstoreService.getBooks()
                //2. dispatch action to store
                .then((data) => booksLoaded(data))
                .catch((err) => booksError(err));     */   
    }
    
    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }
        //BookList отвечает только за отрисовку
        return <BookList books = {books} />
    }
};

const mapStateToProps = ({ books, loading, error })=> {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {     
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    };
    //booksLoaded, booksRequested, booksError
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);