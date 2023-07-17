import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import Consolas from './pages/Consolas'
import Mobiles from './pages/Mobiles'
import Computadoras from './pages/Computadoras'
import { NotFound } from './pages/NotFound'
import Nav from './layouts/Nav'
import Footer from './layouts/Footer'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/consolas' element={<Consolas />} />
        <Route path='/mobiles' element={<Mobiles />} />
        <Route path='/computadoras' element={<Computadoras />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
