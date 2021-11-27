const updateCartItems = (cartItems, item, idx) => {
//delete el from array
    if (item.count === 0) {
        return [            
        ...cartItems.slice(0, idx),        
        ...cartItems.slice(idx + 1)
        ];
    }
//item потом заменить на el
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }
//add el to array
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};
//deleting the el it's adding -1 el
const updateCartItem = (book, item = {}, quantity) => {

    const { 
        id = book.id, 
        count = 0, 
        title = book.title, 
        total = 0  } = item;
    
    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity*book.price
    }
};

const updateOrder = (state, bookId, quantity) => {
    const { itemsList: { books }, shoppingCart: { cartItems, orderTotal }} = state;
    //books обязательно заменить на items
    const book = books.find(({id}) => id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);
    return {
        orderTotal: orderTotal + quantity*book.price,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }; 
};
const updateShoppingCart = (state, action) => {

    if (state === undefined ) {
        return {
            cartItems: [],
            orderTotal: 0
        };   
    } 
    switch (action.type) {
        case 'ITEM_ADDED_TO_CART':            
            return updateOrder(state, action.payload, 1);

        case 'ITEM_REMOVED_FROM_CART':            
            return updateOrder(state, action.payload, -1);

        case 'ALL_ITEMS_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload); 
            return updateOrder(state, action.payload, -item.count);
        default: 
            return state.shoppingCart;
    }    
};

export default updateShoppingCart;