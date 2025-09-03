
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { Storecontact } from '../../contact/Storecontact'

const Navbar = ({ setshowlogin, user, onLogout }) => {
    const [menu, setmenu] = useState("home")
    const { gettotalcartamount } = useContext(Storecontact)

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
            
            <ul className="navbar-menu">
                <Link to='/'><li onClick={() => setmenu("home")} className={menu === "home" ? "active" : ""}>خانه</li></Link>
                <a href='#explore-menu' onClick={() => setmenu("menu")} className={menu === "menu" ? "active" : ""}>منو</a>
                <a href='#app-download' onClick={() => setmenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>برنامه-موبایل</a>
                <a href='#footer' onClick={() => setmenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>مخاطبین</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={gettotalcartamount() === 0 ? "" : "dot"}></div>
                </div>
                {user ? (
                    <div className="user-profile">
                        <img src={user.avatar} alt="Profile" className="profile-avatar" />
                        <button onClick={onLogout} className="logout-btn">خروج</button>
                    </div>
                ) : (
                    <button onClick={() => setshowlogin(true)}>ثبت نام</button>
                )}
            </div>
        </div>
    )
}

export default Navbar