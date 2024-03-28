import { useState, useEffect } from "react";

import { FORTNITE_API_KEY, FORTNITE_SHOP } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { CartList } from "./CartList";
import { Alert } from "./Alert";

export function Shop() {
    const [goods, setGoods] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartDisplayed, setIsCartDisplayed] = useState(false);
    const [alertName, setAlertName] = useState("");

    const addToCart = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

        switch (itemIndex) {
            case -1:
                const newItem = { ...item, quantity: 1 };
                setOrder([...order, newItem]);
                break;
            default:
                const newOreder = order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return { ...orderItem, quantity: orderItem.quantity + 1 };
                    } else {
                        return orderItem;
                    }
                });
                setOrder(newOreder);
        }
        setAlertName(item.name);
    };

    const delFromCart = (id) => {
        const newOrder = order.filter((item) => item.id !== id);
        setOrder(newOrder);
    };

    const incQuantity = (id) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === id);
        const newOrder = order.map((orderItem, index) => {
            if (index === itemIndex) {
                return { ...orderItem, quantity: orderItem.quantity + 1 };
            } else {
                return orderItem;
            }
        });
        setOrder(newOrder);
    };

    const decQuantity = (id) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === id);
        const newOrder = order.map((orderItem, index) => {
            if (index === itemIndex && orderItem.quantity > 1) {
                return { ...orderItem, quantity: orderItem.quantity - 1 };
            } else {
                return orderItem;
            }
        });
        setOrder(newOrder);
    };

    const toggleCartDisplay = () => {
        setIsCartDisplayed(!isCartDisplayed);
    };

    const closeAlert = () => {
        setAlertName("");
    };

    useEffect(function getGoods() {
        fetch(FORTNITE_SHOP, {
            headers: {
                Authorization: FORTNITE_API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.items && setGoods(data.items);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Cart
                quantity={order.reduce((acc, item) => acc + item.quantity, 0)}
                toggleCartDisplay={toggleCartDisplay}
            />
            {isLoading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart} />}
            {isCartDisplayed && (
                <CartList
                    order={order}
                    toggleCartDisplay={toggleCartDisplay}
                    delFromCart={delFromCart}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
}
