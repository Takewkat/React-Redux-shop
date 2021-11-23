import updateShoppingCart from "./shopping-cart";
import updateItemsList from './items-list';

const reducer = (state, action) => {
    return {
        itemsList: updateItemsList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    };    
};

export default reducer;