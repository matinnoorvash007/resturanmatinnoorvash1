import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/header/Header'
import Exploremenu from '../../component/exploremenu/Exploremenu'
import Fooddisplay from '../../component/fooddisplay/Fooddisplay'
import Appdownload from '../../component/appdownload/Appdownload'
const Home = () => {
    const[category,setcategory]=useState("all");
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setcategory={setcategory}/>
        <Fooddisplay category={category}/>
        <Appdownload/>
        
    </div>
    
  )
}

export default Home