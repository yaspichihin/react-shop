export function Cart(props) {
    const { quantity, toggleCartDisplay = Function.prototype } = props;
    return (
        <div onClick={() => toggleCartDisplay()} className="cart blue darken-4 white-text">
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}
