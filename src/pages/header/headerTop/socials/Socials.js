import Socials1 from './../../../../assets/images/header/vectorheart.svg';
import Socials2 from './../../../../assets/images/header/Vectorsiluet.svg';
import Socials3 from './../../../../assets/images/header/Vectortelega.svg';
import s from './Socials.module.scss';

export const Socials = (props) => {
    return(
        <div className={s.socials}>
        <a href="" className={s.social_link}>
        <img className={s.socialIcon} src={Socials1} alt=""/>
        </a>
        <a href="" className={s.social_link}>
        <img className={s.socialIcon}  src={Socials2} alt=""/>
        </a>
        <a href="" className={s.social_link}>
        <img className={s.socialIcon}  src={Socials3} alt=""/>
        </a>
        </div>
    );
}
