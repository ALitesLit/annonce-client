import useMediaQuery from "../../shared/useMediaQuery";

import "./style.scss";


const Menu = ({ setMenuShow }) => {
    const matches = useMediaQuery("(max-width: 1024px)");


    return (
        <div className="menu" id="menu">
            <div className="menu-content">
                {
                    matches ? (
                        <div className="menu__moblie">
                            <button className="menu__moblie-menu" onClick={() => setMenuShow(false)} />

                            <div className="menu__moblie-logo" />
                        </div>
                    ) : (
                        <div className="menu-header">
                            <button className="menu-close" onClick={() => setMenuShow(false)} />

                            <div className="menu-logo" />
                        </div>
                    )
                }


                <div className="menu-wrapper">
                    <ul>
                        <li>Жакеты</li>
                        <li>Пальто</li>
                        <li>Платья</li>
                        <li>Юбки</li>
                        <li>Костюмы</li>
                        <li>Брюки</li>
                        <li><b>NEW YEAR COLLECTION</b></li>
                        <li>Лонгсливы</li>
                        <li>Топы</li>
                        <li>Блузы</li>
                        <li>Велюр</li>
                        <li>Обувь</li>
                    </ul>


                    <div className="menu-buttons">
                        <a href="/catalog"><button className="all">СМОТРЕТЬ ВСЕ</button></a>
                        <button className="gift">GIFT CARD/подарочная карта </button>
                    </div>
                </div>


                {
                    !matches ? (
                        <div className="menu-footer">
                            <p>ANNONCE</p>
                            <p className="prava">Все права защищены</p>
                        </div>
                    ) : (
                        <div className="menu-footer">
                            <div className="cabinet">
                                <span className="account_ico" />
                                <p className="cabinet">ЛИЧНЫЙ КАБИНЕТ</p>
                            </div>
                            <p>ЧАТ</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}


export default Menu;