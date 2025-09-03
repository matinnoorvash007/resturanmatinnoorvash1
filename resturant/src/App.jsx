
import React, { useState } from 'react'
import Navbar from './component/navbar/navbar'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './component/footer/footer'
import Loginpopup from './component/loginpopup/Loginpopup'
import Adminpanel from './pages/adminpanel/Adminpanel';
import PaymentGateway from './pages/paymentgateway/PaymentGateway'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    const [showlogin, setshowlogin] = useState(false)
    const [user, setUser] = useState(null)

    const handleLogin = (userData) => {
        setUser(userData)
        toast.success(`Welcome ${userData.name}!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        })
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <>
            {showlogin ? <Loginpopup setshowlogin={setshowlogin} setUser={handleLogin} /> : <></>}
            <div className='app'>
                <Navbar setshowlogin={setshowlogin} user={user} onLogout={handleLogout} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/order' element={<Placeorder />} />
                    <Route path='/payment' element={<PaymentGateway />} />
                    <Route path='/adminpanel' element={<Adminpanel />} />
                </Routes>
            </div>
            <Footer />
            <ToastContainer />
        </>
    )
}

// export default App


// import { HashRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/menu" element={<Menu />} />
//       </Routes>
//     </HashRouter>
//   );
// }