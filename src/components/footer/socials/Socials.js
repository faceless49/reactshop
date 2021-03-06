import instagram from '../../../assets/images/instagram-sketched (1) 1.svg';
import vk from '../../../assets/images/vk 1.svg';
import facebook from '../../../assets/images/facebook 1.svg';
import youtube from '../../../assets/images/youtube 1.svg';
import './Socials.css';



function Socials() {
    return (
        <>
        <img className="Socials" src={instagram} alt=""/>
        <img className="Socials" src={vk} alt=""/>
        <img className="Socials" src={facebook} alt=""/>
        <img className="Socials" src={youtube} alt=""/>
        </>
    );
}

export default Socials;