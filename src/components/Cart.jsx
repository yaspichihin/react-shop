import { useContext } from "react";
import { ShopContext } from "../context";

export function Cart(props) {
    const { order, toggleCartDisplay } = useContext(ShopContext);
    return (
        <div onClick={() => toggleCartDisplay()} className="cart blue darken-4 white-text">
            <i className="material-icons">shopping_cart</i>
            {order.length > 0 ? (
                <span className="cart-quantity">
                    {order.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
            ) : null}
        </div>
    );
}
