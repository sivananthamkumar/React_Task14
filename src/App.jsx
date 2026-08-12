import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import ProductDetails from './Pages/ProductDetails'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products/:productName" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App