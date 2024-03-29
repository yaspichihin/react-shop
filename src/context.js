import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    isLoading: true,
    order: [],
    isCartDisplayed: false,
    alertName: "",
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.addToCart = (item) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
    };

    value.delFromCart = (id) => {
        dispatch({ type: "DELETE_FROM_CART", payload: id });
    };

    value.incQuantity = (id) => {
        dispatch({ type: "INCREASE_QUANTITY", payload: id });
    };

    value.decQuantity = (id) => {
        dispatch({ type: "DECREASE_QUANTITY", payload: id });
    };

    value.toggleCartDisplay = () => {
        dispatch({ type: "TOGGLE_CART_DISPLAY" });
    };

    value.setGoods = (data) => {
        dispatch({ type: "SET_GOODS", payload: data });
    };

    value.closeAlert = () => {
        dispatch({ type: "CLOSE_ALERT" });
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
