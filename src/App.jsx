import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AmazonCart from './components/AmazonCart'
import Wishlist from './components/Wishlist'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<AmazonCart />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
