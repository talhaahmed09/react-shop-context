import { useContext } from "react";
import { createContext, useReducer } from "react";
import shopReducer , { initialValue } from "./ShopReducer";

const ShopContext = createContext(initialValue);

export const ShopProvider = ({children}) => {

    const [state,dispatch] = useReducer(shopReducer,initialValue);

    const addToCart = (product) => {
        const updatedCart = state.products.concat(product);
        updatePrice(updatedCart);

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                products: updatedCart
            }
        })

    }

    const removeFromCart = (product) => {
        const updatedCart = state.products.filter(item => item.name !== product.name);
        updatePrice(updatedCart);

        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: updatedCart
        })

    }

    const updatePrice = (products) => {
        let total = 0;
        products.forEach((element )=> {
            total += element.price
        });

        dispatch({
            type: 'UPDATE_PRICE',
            payload: total
        })
    }

    const values = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart
    }
    return (<ShopContext.Provider value={values}>{children}</ShopContext.Provider>)

}

 export const useShop = () => {
    
    const context = useContext(ShopContext);

    if(context === undefined){
        throw new Error('No context available')
    }
    return context
}

