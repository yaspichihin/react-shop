import { useContext } from "react";
import { ShopContext } from "../context";
import { CartItem } from "./CartItem";

export function CartList() {
    const { order, toggleCartDisplay } = useContext(ShopContext);

    return (
        <ul className="collection cart-list">
            <li className="collection-item active">
                Корзина
                <span className="secondary-content">
                    <i
                        onClick={toggleCartDisplay}
                        className="material-icons cart-list-close teal darken-4"
                    >
                        close
                    </i>
                </span>
            </li>
            {order.length ? (
                order.map((order) => <CartItem key={order.id} {...order} />)
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общая стоимость: {order.reduce((acc, el) => acc + el.quantity * el.price, 0)} руб
            </li>
            <li className="collection-item active">
                <button className="btn">Оформить</button>
            </li>
        </ul>
    );
}
