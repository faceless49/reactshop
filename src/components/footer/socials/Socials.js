import instagram from '../../../assets/images/instagram-sketched (1) 1.svg';
import vk from '../../../assets/images/vk 1.svg';
import facebook from '../../../assets/images/facebook 1.svg';
import youtube from '../../../assets/images/youtube 1.svg';
import s from './Socials.module.scss';



function Socials() {
    return (
        <>
        <img className={s.socials} src={instagram} alt=""/>
        <img className={s.socials} src={vk} alt=""/>
        <img className={s.socials} src={facebook} alt=""/>
        <img className={s.socials} src={youtube} alt=""/>
        </>
    );
}

export default Socials;