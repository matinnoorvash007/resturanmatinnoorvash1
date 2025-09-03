import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div id='footer' className='footer'>
<div className="footer-content">
<div className="footer-content-left">
<img id='logocss' src={assets.logo} alt="" />
<p>تجربه رابط کاربری بهتر با ما بهترین ها رو انتخاب کنید شما لایق بهترین ها هستید.رستوران ما پذیرای شما عزیزان  میباشد</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
    </div> 
    <div className="footer-content-center">
<h2>رستوران ما</h2>
<ul>
  <li>خانه</li>
  <li>درباره ما</li>
  <li>سفارش ها</li>
  <li>قوانین و مقررات</li>
</ul>
    </div>

    <div className="footer-content-right">
     <h2>اینجا رو لمس کن</h2>
     <ul>
      <li>026-444-332</li>
      <li>ایمیل رستوران!کلیک کنید</li>
      </ul>   
        </div>
    </div>
    <hr />
    <p className="footer-copyright">رزرو شده توسط متین نوروش</p>
    </div>
  )
}

export default Footer