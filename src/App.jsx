import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import Home from "./Pages/Home.jsx"
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Products from './Pages/Products.jsx'
import Cart from './Pages/Cart.jsx'
import WishlistPage from './Pages/LikedProducts.jsx'

const Layout = () => {
  return(
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )

}



const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>

    <Route  element={<Layout />} >
    <Route index element={<Home />} ></Route>
    <Route path='/products' element={<Products />} ></Route>
    <Route path='/about' element={<About />} ></Route>
    <Route path='/contact' element={<Contact />} ></Route>
    <Route path='/cart' element={<Cart />} ></Route>
    <Route path="/wishlist" element={<WishlistPage />}></Route>
    </Route>


    </Route>
  ))
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App