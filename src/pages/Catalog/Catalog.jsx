import CatalogCard from "../../components/cards/CatalogCard/CatalogCard";
import categorys_card from "../../mock/categoryes.json";

import "./style.scss";


const Catalog = () => {
    return (
        <main className="catalog__page">
            <section className="catalog__page-categoryes">
                <h3>КАТЕГОРИИ</h3>

                <ul>
                    <li><b>Все украшения</b></li>
                    <li>Серьги</li>
                    <li>Кольца</li>
                    <li>Браслеты</li>
                    <li>Цепочки</li>
                    <li>Сеты</li>
                    <li>Пояса</li>
                    <li>Чокеры</li>
                </ul>
            </section>
            
            <section className="catalog__page-cards">
                {
                    categorys_card.length ? (
                        categorys_card.map(
                            i => (
                                <CatalogCard key={i.id} card={i} />
                            )
                        )
                    ) : ""
                }
            </section>
        </main>
    )
}


export default Catalog;