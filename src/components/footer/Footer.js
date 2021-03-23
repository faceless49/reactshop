import Socials from "./socials/Socials";
import s from './Footer.module.scss';



function Footer() {
    return (
<<<<<<< HEAD
        <>
    <div className="Footer__inner">
=======
        <div className={s.footer}>
>>>>>>> b863cf865e39a38d2f4f63d3b04b5e0632eed17d

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
<<<<<<< HEAD
    <div className="privaty">
        <span>Договор оферты</span>
        <span>Политика обработки персональных данных</span>
    </div> 
</div>
    </>
=======
        
    </div>
    </div>

>>>>>>> b863cf865e39a38d2f4f63d3b04b5e0632eed17d
    );
}

export default Footer;