import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'
const Appdownload = () => {
  return (
    <div id='app-download' className='app-download'>
<p>برای تجربه کاربری بهتر  از برنامه استفاده کنید<br></br>رستوران ما</p>
<div className="app-download-platforms">
    <img src={assets.play_store} alt="" />
    <img src={assets.app_store} alt="" />
</div>
    </div>
  )
}

export default Appdownload