import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import{BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from './components/Navbar'
import Xidmetler from './components/Xidmetler'
import NotFound from './components/NotFound'
import Terafdaslar from './components/Terafdaslar'
import Bank from './components/Bank'
import Dovlet from './components/Dovlet'
import Sahibkar from './components/Sahibkar'
import Home from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Xidmetler' element={<Xidmetler/>}/>
      <Route path='/Terafdaslar' element={<Terafdaslar/>}/>
      <Route path='/Bank' element={<Bank/>}/>
      <Route path='/Dovlet' element={<Dovlet/>}/>
      <Route path='/Sahibkar' element={<Sahibkar/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
