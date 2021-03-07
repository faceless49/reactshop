import "./App.scss";
<<<<<<< HEAD
import AdvertCard from "./components/advertCard/AdvertCard";
import Footer from "./components/footer/Footer";
=======
>>>>>>> 222f78836290eef0591483f182c64cf0184b17c1
import Header from "./pages/header/Header";
import CategoryList from "./pages/mainPage/category/CategoryList";
import Hero from "./pages/mainPage/hero/Hero";
import SearchForm from "./pages/mainPage/searchForm/SearchForm";



function App() {
    return (
    <div className="App">
      <Header/>
      <Hero/>
      <SearchForm placeholder='Введите марку' text1='Поиск по  номеру' text2='Поиск по марке' text3='Поиск по названию товара'/>
<<<<<<< HEAD
      <Footer/>
=======

      <CategoryList/>
>>>>>>> 222f78836290eef0591483f182c64cf0184b17c1
    </div>
  );
}
export default App;