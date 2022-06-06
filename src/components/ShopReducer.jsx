export const initialValue = {
    total: 0,
    products: []
};

const shopReducer = (state,action) => {
    const {type,payload} = action;

    switch(type) {
        case 'ADD_TO_CART':
            console.log('add to cart',payload);
        return {
            ...state,
            products: payload.products
        };

        case 'REMOVE_FROM_CART':
            console.log('REMOVE FROM CART',payload);

        return{
            ...state,
            products: payload.products
        }

        case 'UPDATE_PRICE':
            console.log('UPDATE PRICE',payload);

        return {
            ...state,
            total: payload
        }

        default:
             throw new Error(`No case for type ${type} found in shopReducer.`);
    }

}

export default shopReducer;