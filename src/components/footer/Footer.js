import Socials from "./socials/Socials";
import s from './Footer.module.scss';



function Footer() {
    return (
        <div className={s.footer}>

    <div className={s.Footer__inner}>

        <div className={s.footer__input}>
        <h3 className={s.footer__title}>Подпишитесь на нашу рассылку<br/> и узнавайте об акциях быстрее</h3>
        <div className={s.email}>
            <input placeholder="Введите ваш e-mail"></input>
            <button>Отправить</button>
        </div>
        </div>

        <div className={s.footer__information}>
            <ul>
                <h3>Информация</h3>
                <li>О компании</li>
                <li>Контакты</li>
                <li>Акции</li>
                <li>Магазины</li>
            </ul>
        </div>

        <div className={s.footer__internet}>
            <ul>
                <h3>Интернет-магазин</h3>
                <li>Доставка и самовывоз</li>
                <li>Оплата</li>
                <li>Возврат-обмен</li>
                <li>Новости</li>
            </ul>
        </div>
        <div className={s.socials}>
        <Socials/>
        </div>
        
    </div>
    </div>

    );
}

export default Footer;