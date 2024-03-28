import { useEffect } from "react";

export function Alert(props) {
    const { name = "", closeAlert = Function.prototype } = props;

    useEffect(
        () => {
            const timerId = setTimeout(closeAlert, 1000);
            return () => {
                clearTimeout(timerId);
            };
        },
        // eslint-disable-next-line
        [name]
    );

    return (
        <div id="toast-container">
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    );
}
