import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import Nav from './layouts/Nav'
import Footer from './layouts/Footer'
import CategorySelected from './pages/CategorySelected'
import ProductSelected from './pages/ProductSelected'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/category/:category' element={<CategorySelected />} />
        <Route path='/product/:category/:id' element={<ProductSelected />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
