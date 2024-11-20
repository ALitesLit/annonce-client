import logo from "../../../assets/svg/CSG_logo.svg";
import tg from "../../../assets/svg/telegramm.svg";
import vk from "../../../assets/svg/VK.svg";
import insta from "../../../assets/svg/instagram.svg";

import "./style.scss";


const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="subsribe">
                    <p>подписка на рассылку и скидка</p>
                    <button>ПОДПИСАТЬСЯ</button>
                </div>

                <div className="footer-info">
                    <div className="help">
                        <p>ПОМОЩЬ</p>

                        <ul>
                            <li>Оплата</li>
                            <li>Доставка</li>
                            <li>Обмен и возврат</li>
                            <li>Подарочные карты</li>
                        </ul>
                    </div>

                    <div className="contacts">
                        <p>КОНТАКТЫ</p>

                        <ul>
                            <li>Обратная связь</li>
                            <li>Контакты</li>
                            <li>8(800)250-19-50</li>

                            <div className="contacts-icons">
                                <div className="icon" style={{
                                    backgroundImage: `url("${tg}")`
                                }} />
                                <div className="icon" style={{
                                    backgroundImage: `url("${vk}")`
                                }} />
                                <div className="icon" style={{
                                    backgroundImage: `url("${insta}")`
                                }} />
                            </div>
                        </ul>
                    </div>

                    <div className="info">
                        <p>ИНФОРМАЦИЯ</p>

                        <ul>
                            <li>О компании</li>
                            <li>Публичная оферта</li>
                            <li>Политика конфиденциальности</li>
                            <li>Использование файлов cookie</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="podpodvalnaya-zona">
                <div className="footer__prava">
                    <p className="copyring">©️ANNONE</p>
                    <p className="prava">Все права защищены</p>
                </div>


                <img src={logo} />

                <a href="#top"><button className="footer__top" /></a>
            </div>
        </footer>
    )
}


export default Footer;