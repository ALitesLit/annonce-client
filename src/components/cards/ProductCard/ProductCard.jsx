import "./style.scss";


const ProductCard = ({ card }) => {
    return (
        <div className="product__card">
            <div className="product__card-img" style={{
                backgroundImage: `url(${card?.photo})`
            }} />

            <div className="product__card-content">
                <div className="product__card-info">
                    <p>{card?.name}</p>
                    <p>{Intl.NumberFormat("ru-RU").format(card?.price)}</p>
                </div>

                <button className="product__card-star" />
            </div>
        </div>
    )
}


export default ProductCard;