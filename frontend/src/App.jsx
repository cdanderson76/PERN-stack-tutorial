import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";


export default function App() {
  
  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">

      {/* KEPT THE NAVBAR OUTSIDE OF ROUTES SO THAT IT COULD SHOW ON EVERY PAGE */}
      
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={(<ProductPage />)} />
      </Routes>
    </div>
  )
}
