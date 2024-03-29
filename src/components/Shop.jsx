import { useContext } from "react";
import { ShopContext } from "../context";
import { useEffect } from "react";

// Закрыто заглушкой
// import { FORTNITE_API_KEY, FORTNITE_SHOP } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { CartList } from "./CartList";
import { Alert } from "./Alert";
import { getData } from "../junk";

export function Shop() {
    const { isLoading, isCartDisplayed, alertName, setGoods } = useContext(ShopContext);

    useEffect(
        function getGoods() {
            // Закрыто заглушкой
            // fetch(FORTNITE_SHOP, {
            //     headers: {
            //         Authorization: FORTNITE_API_KEY,
            //     },
            // })
            getData()
                // Закрыто заглушкой
                // .then((response) => response.json())
                .then((data) => setGoods(data.items));
        },
        // eslint-disable-next-line
        []
    );

    return (
        <main className="container content">
            <Cart />
            {isLoading ? <Preloader /> : <GoodsList />}
            {isCartDisplayed && <CartList />}
            {alertName && <Alert />}
        </main>
    );
}
