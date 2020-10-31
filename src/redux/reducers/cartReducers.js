import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products:[
        {Name: 'Laptop', id: 1},
        {Name: 'HP', id: 2},
        {Name: 'Dell', id: 3},
        {Name: 'Toshiba', id: 4}
    ]
}

const cartReducers = (state = initialState, action) =>{

    switch (action.type){
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1 
            }
            const newCart = [...state.cart, newItem];
            return{ ...state, cart: newCart};
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return {...state, cart: remainingCart};

        default: 
            return state; 
    }
}

export default cartReducers;