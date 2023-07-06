import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Pages/Home';
import AboutUs from './Component/Pages/AboutUs';
import Shop from './Component/Pages/Shop';
import Products from './Component/Pages/Products';
import ContactUs from './Component/Pages/ContactUs';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar/>
        <div id='home'>
          <Home/>
        </div>

        <div id='about'>
          <AboutUs/>
        </div>

        <div id='shop'>
          <Shop/>
        </div>

        <div id='product'>
          <Products/>
        </div>

        <div id='contact'>
          <ContactUs/>
        </div>
        <Footer/>
        <div className='end_div'>
          <hr></hr>
          <p>® 2023 ROLEX Swissland. All Rights Reserved.</p></div>
      </div>
    </div>
  );
}

export default App;
