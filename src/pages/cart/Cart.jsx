import React, { useContext } from 'react'
import './Cart.css'
import {Storecontact} from '../../contact/Storecontact'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const{cartitems,food_list,removefromcart,gettotalcartamount}=useContext(Storecontact);

const navigate =useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>ایتم ها:</p>
          <p>توضیحات</p>
          <p>قیمت</p>
          <p>مقدار</p>
          <p>تعداد کل</p>
          <p>حذف</p>
        </div>
        <br />
        <hr />
     {food_list.map((item,index)=>{
if(cartitems[item._id]>0){
  return(

<div><div className='cart-items-title cart-item-item'>
  <img src={item.image} alt="" />
  <p>{item.name}</p>
  <p>${item.price}</p>
  <p>{cartitems[item._id]}</p>
  <p>${item.price*cartitems[item._id]}</p>
  <p onClick={()=>removefromcart(item._id)} className='cross'>X</p>
    </div>
    <hr/>
    </div>

  )
}
     })}



      </div>
    <div className="cart-buttom">
      <div className='cart-total'>
        <h2>کل کارت ها</h2>
        <div>
          <div className='cart-total-details'>
            <p>جمع کلی</p>
            <p>${gettotalcartamount()}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <p>تحویل</p>
            <p>${gettotalcartamount()===0?0:2}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
           <b>مقدار کل</b>
           <b>${gettotalcartamount()===0?0:gettotalcartamount()+2}</b>
          </div>
         </div>
        <button onClick={()=>navigate('/order')}>ثبت سفارش و مرحله ی بعدی</button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>با ما بهترین ها را بخواهید ما همیشه به فکر شما هستیم</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='کد  تخفیف' />
            <button>ثبت سفارش</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart