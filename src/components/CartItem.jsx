export function CartItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        delFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return (
        <li className="collection-item">
            {name}

            <div className="secondary-content" style={{ display: "flex" }}>
                <span style={{ margin: "0 20px 0 0" }}>Цена: {price} руб</span>
                <span style={{ margin: "0 20px 0 0" }}>Стоимость: {quantity * price} руб</span>
                <i
                    onClick={() => {
                        delFromCart(id);
                    }}
                    className="material-icons cart-item-clear teal  white-text"
                >
                    clear
                </i>
            </div>
            <div>
                <button onClick={() => decQuantity(id)} className="btn-small teal darken-2">
                    -
                </button>
                <span style={{ margin: "0 30px 0 30px" }}>{quantity}</span>
                <buttoan onClick={() => incQuantity(id)} className="btn-small teal">
                    +
                </buttoan>
            </div>
        </li>
    );
}
