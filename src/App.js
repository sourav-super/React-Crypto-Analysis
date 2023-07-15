import './App.css';
import "./style/header.css"
import "./style/coins.css"
import "./style/carddetails.css"
import "./style/exchangecard.css"
import "./style/footer.css"
import "./style/home.css"
import { BrowserRouter,  Route, Routes,} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import Coindetails from './components/Coindetails';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coindeatils/:id" element={<Coindetails />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
