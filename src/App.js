import { useLocation, Routes, Route} from "react-router-dom";
import { useEffect} from "react";
import Probinar from "./components/Probinar";
import Home from "./components/Home";
import StakePro from "./components/StakeUpro";
import UproBazar from "./components/UproBazar";
import About from "./components/About";
import "./App.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0,0)
  }, [pathname]);

  console.log(pathname)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/probinar" element={<Probinar />} />
        <Route path="/stakeupro" element={<StakePro />} />
        <Route path="/uprobazar" element={<UproBazar />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
