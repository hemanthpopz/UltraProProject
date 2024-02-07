import { useLocation, Routes, Route} from "react-router-dom";
import { useEffect} from "react";
import BlogListing from "./components/BlogListing";
import Probinar from "./components/Probinar";
import Home from "./components/Home";
import StakePro from "./components/StakeUpro";
import UproBazar from "./components/UproBazar";
import About from "./components/About";
import GTXWallet from "./components/GTXWallet";
import P2P from "./components/P2P";
import DEFI from "./components/DEFI";
import "./App.css";
import Sitemap from "./components/Sitemap";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0,0)
  }, [pathname]);

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/probinar" element={<Probinar />} />
        <Route path="/stakeupro" element={<StakePro />} />
        <Route path="/uprobazar" element={<UproBazar />} />
        <Route path='/blog' element={<BlogListing/>}/>
        <Route path="/about" element={<About />} />
        <Route path='/canopusGtxWallet' element={<GTXWallet/>}/>
        <Route path="/P2P" element={<P2P/>}/>
        <Route path='/defi' element={<DEFI/>}/>
        <Route path='/sitemap' element={<Sitemap/>}/>
      </Routes>
    </div>
  );
}

export default App;
