import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Cart from './pages/Cart.jsx'
import Product from './pages/ProductDetails.jsx'
// import { RouterProvider } from "react-router/dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<App/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/productdetail" element={<Product />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
