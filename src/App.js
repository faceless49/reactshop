import './App.css';
import Navigation from './pages/header/headerTop/navigation/Navigation';
import Logo from './pages/header/headerTop/logo/Logo';
import Address from './pages/header/headerTop/address/Address';
import Socials from './pages/header/headerTop/socials/Socials';
import HeaderBottom from './pages/header/headerBottom/HeaderBottom';

function App() {
    return (
    <div className="App">
        <Navigation />
        <Logo />
        <Address />
        <Socials />
        
        <div className="headerBottom">
        <HeaderBottom />
        </div>
        </div>
        
    
    );
}
export default App;