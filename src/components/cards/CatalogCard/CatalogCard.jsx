import "./style.scss";


const CatalogCard = ({ card }) => {
    return (
        <div className="catalog__card">
            <div className="catalog__card-img" style={{
                backgroundImage: `url("${card?.img}")`
            }} />

            <div className="catalog__card-info">
                <p>{card?.name}</p>
                <p className="catalog__card-price">{Intl.NumberFormat("ru-RU").format(card?.price)} ₽</p>
            </div>
        </div>
    )
}


export default CatalogCard;