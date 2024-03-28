import { GoodsItem } from "./GoodsItem";

export function GoodsList(props) {
    const { goods = [], addToCart = Function.prototype } = props;

    if (!goods.length) {
        return <h3>No data</h3>;
    }
    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.id} addToCart={addToCart} {...item} />
            ))}
        </div>
    );
}
