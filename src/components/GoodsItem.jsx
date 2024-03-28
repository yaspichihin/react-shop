export function GoodsItem(props) {
    const { id, name, description, price, images, addToCart = Function.prototype } = props;

    return (
        <div id={id} className="card">
            <div className="card-image">
                <img src={images.full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
                <div className="card-action">
                    <button onClick={() => addToCart({ id, name, price })} className="btn">
                        Купить
                    </button>
                    <span className="right" style={{ fontSize: "1.8rem" }}>
                        {price} руб.
                    </span>
                </div>
            </div>
        </div>
    );
}
