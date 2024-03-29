export function reducer(state, { type, payload }) {
    let itemIndex;
    let newItem;
    let newOrder;

    switch (type) {
        case "ADD_TO_CART":
            itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id);

            if (itemIndex < 0) {
                newItem = { ...payload, quantity: 1 };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return { ...orderItem, quantity: orderItem.quantity + 1 };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            };

        case "DELETE_FROM_CART":
            return {
                ...state,
                order: state.order.filter((item) => item.id !== payload),
            };

        case "INCREASE_QUANTITY":
            itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload);

            newOrder = state.order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return { ...orderItem, quantity: orderItem.quantity + 1 };
                } else {
                    return orderItem;
                }
            });
            return {
                ...state,
                order: newOrder,
            };

        case "DECREASE_QUANTITY":
            itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload);

            newOrder = state.order.map((orderItem, index) => {
                if (index === itemIndex && orderItem.quantity > 1) {
                    return { ...orderItem, quantity: orderItem.quantity - 1 };
                } else {
                    return orderItem;
                }
            });
            return {
                ...state,
                order: newOrder,
            };

        case "TOGGLE_CART_DISPLAY":
            return {
                ...state,
                isCartDisplayed: !state.isCartDisplayed,
            };

        case "CLOSE_ALERT":
            return {
                ...state,
                alertName: "",
            };

        case "SET_GOODS":
            return {
                ...state,
                // Защита от undfine, если он будет, то передасться пустьй массив
                goods: payload || [],
                isLoading: false,
            };

        default:
            return state;
    }
}
