import "./App.scss";
import AdvertCard from "./components/advertCard/AdvertCard";
import Header from "./pages/header/Header";
import Hero from "./pages/mainPage/hero/Hero";
import SearchForm from "./pages/mainPage/searchForm/SearchForm";


function App() {
    return (
    <div className="App">
      <Header/>
      <Hero/>
      <SearchForm placeholder='Введите марку' text1='Поиск по  номеру' text2='Поиск по марке' text3='Поиск по названию товара'/>
    </div>
  );
}
export default App;