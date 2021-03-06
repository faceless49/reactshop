import './Header.css';
import Navigation from './../header/headerTop/navigation/Navigation';
import Logo from './../header/headerTop/logo/Logo';
import Address from './../header/headerTop/address/Address';
import Social from './../header/headerTop/socials/Socials';
import HeaderBottom from './../header/headerBottom/HeaderBottom';

function Header() {
    return (
        <div className="headerBlock">
            <Navigation />
            <Logo />
            <Address />
            <Social />
            <HeaderBottom />
        </div>
        
    );
}
export default Header;