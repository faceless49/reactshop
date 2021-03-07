import Socials from "./socials/Socials";
import './Footer.css';


function Footer() {
    return (
    <div className="Footer__inner">

            {/* <div className="footer__title">Подпишитесь на нашу рассылку и узнавайте о акция быстрее</div> */}

        <div className="footer__input">
        <h3 className="footer__title">Подпишитесь на нашу рассылку<br/> и узнавайте о акция быстрее</h3>
            <input placeholder="Введите ваш e-mail"></input>
            <button>Отправить</button>
        </div>

        <div className="footer__information">
            <ul>
                <h4>Информация</h4>
                <li>О компании</li>
                <li>Контакты</li>
                <li>Акции</li>
                <li>Магазины</li>
            </ul>
        </div>

        <div className="footer__internet">
            <ul>
                <h4>Интернет-магазин</h4>
                <li>Доставка и самовывоз</li>
                <li>Оплата</li>
                <li>Возврат-обмен</li>
                <li>Новости</li>
            </ul>
        </div>
        <div className="socials">
        <Socials/>
        </div>
    </div>
    );
}

export default Footer;