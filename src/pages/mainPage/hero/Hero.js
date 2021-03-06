import s from "./Hero.module.scss";
import AdvertCard   from '../../../components/advertCard/AdvertCard'
import Slider from "./Slider/Slider";


const Hero = (props) => {
    return (
        <section className={s.hero}>
            <Slider/>
            <AdvertCard/>
        </section>
    )
}

export default Hero;