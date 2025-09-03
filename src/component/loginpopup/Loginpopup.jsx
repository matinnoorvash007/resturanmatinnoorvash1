


import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({ setshowlogin, setUser }) => {
    const [currstate, setcurrstate] = useState("login")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        if (currstate === "login") {
            
            setUser({
                name: "User", 
                email: formData.email,
                avatar: assets.profile_icon 
            })
        } else {
          
            setUser({
                name: formData.name,
                email: formData.email,
                avatar: assets.profile_icon
            })
        }
        setshowlogin(false)
    }

    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currstate}</h2>
                    <img onClick={() => setshowlogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currstate === "login" ? <></> : 
                        <input 
                            type="text" 
                            name="name"
                            placeholder='نام کاربری' 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                        />
                    }
                    <input 
                        type="email" 
                        name="email"
                        placeholder='ایمیل شما' 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder='رمز' 
                        required 
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">{currstate === "signup" ? "ایجاد حساب" : "login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>همه ی شرایط و قوانین را میپذیرم</p>
                </div>
                {currstate === "login"
                    ? <p>ایجاد  حساب جدید? <span onClick={() => setcurrstate("signup")}>کلیک کنید</span></p>
                    : <p>در حال حاضر حساب دارید<span onClick={() => setcurrstate("login")}>ورود به</span></p>
                }
            </form>
        </div>
    )
}

export default Loginpopup