import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Probinar from './components/Probinar'
import Home from './components/Home'
import StakePro from './components/StakeUpro'
import UproBazar from './components/UproBazar'
import About from './components/About'
import './App.css'

function App(){
  
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/probinar' element={<Probinar/>}/>
          <Route exact path='/stakeupro' element={<StakePro/>}/>
          <Route exact path ='/uprobazar' element={<UproBazar/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    )
  
}

export default App