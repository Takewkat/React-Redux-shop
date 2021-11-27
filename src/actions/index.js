const booksRequested = () => {
    return {
        type: 'FETCH_ITEMS_REQUEST'
    }
};
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        payload: newBooks
    };
};
const booksError = (error) => {
    return {
        type: 'FETCH_ITEMS_FAILURE',
        payload: error
    };
};
export const bookAddedToCart = (bookId) => {
    return {
        type: 'ITEM_ADDED_TO_CART',
        payload: bookId
    };
};
export const bookRemovedFromCart = (bookId) => {
    return {
        type: 'ITEM_REMOVED_FROM_CART',
        payload: bookId
    };
};
export const allBooksRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_ITEMS_REMOVED_FROM_CART',
        payload: bookId
    };
};
/*
const fetchBooksOld = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()                
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err))); 
};*/

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookstoreService.getBooks()                
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err))); 
};

export {
    //fetchBooksOld,
    fetchBooks
};