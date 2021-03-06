<<<<<<< HEAD

import './App.css';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
    <Footer/>
=======
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
>>>>>>> b584dd8c84ca1580a8f53ab5244337941a97dbbe
    </div>
  );
}
export default App;