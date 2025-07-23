
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './landing_page/home/HomePage'
import Signup from "./landing_page/signup/Signup"
import About from "./landing_page/about/About"
import PricingPage from "./landing_page/pricing/PricingPage"
import SupportPage from "./landing_page/support/SupportPage"
import ProductPage from "./landing_page/products/ProductsPage"
import NavBar from './Navbar'
import Footer from './Footer'
import NotFound from './NotFound'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>  
 <NavBar></NavBar>
 <Routes>
  <Route  path ="/" element={<HomePage/>  }/>
  <Route  path ="/signup" element={<Signup/>  }/>
  <Route  path ="/about" element={<About/>  }/>
  <Route  path ="/product" element={<ProductPage/>  }/>
  <Route  path ="/pricing" element={<PricingPage/>  }/>
  <Route  path ="/support" element={<SupportPage/>  }/>
  <Route  path ="*" element={<NotFound/>  }/>
 </Routes>
 <Footer></Footer>
 </BrowserRouter>
)
