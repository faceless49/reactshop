import Socials1 from './../../../../assets/images/header/Vectorheart.svg';
import Socials2 from './../../../../assets/images/header/Vectorsiluet.svg';
import Socials3 from './../../../../assets/images/header/Vectortelega.svg';
import './Socials.css';

function Socials() {
    return(
        <div className="socials">
        <img className="socialIcon" src={Socials1} alt=""/>
        <img className="socialIcon" src={Socials2} alt=""/>
        <img className="socialIcon" src={Socials3} alt=""/>
        </div>
    );
}

export default Socials;