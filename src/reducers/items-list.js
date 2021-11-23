const updateItemsList = (state, action) => {

    if (state === undefined ) {
        return {
            books: [],
            loading: true,
            error: null,
        };
    } 
    switch (action.type) {
        case 'FETCH_ITEMS_REQUEST':
            return {
                books: [],
                loading: true,
                error: null
            };    
        case 'FETCH_ITEMS_SUCCESS':
            return {
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_ITEMS_FAILURE':
            return {
                books: [],
                loading: false,
                error: action.payload
            };
        default: 
            return state.itemsList;
    }
};

export default updateItemsList;