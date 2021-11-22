const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            name: 'Item 1',
            count: 3,
            total: 150
        },
        {
            id: 2,
            name: 'Item 2',
            count: 2,
            total: 60
        }
    ],
    orderTotal: 210
};

const reducer = (state = initialState, action) => {
    
    console.log(action.type);

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };    
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }    
};

export default reducer;