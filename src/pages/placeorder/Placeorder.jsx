import React, { useState, useContext } from 'react';
import './Placeorder.css';
import { Storecontact } from '../../contact/Storecontact';
import { useNavigate } from 'react-router-dom';

const Placeorder = () => {
  const { cartitems, food_list, gettotalcartamount } = useContext(Storecontact);
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log('Submitting order...'); 
    e.preventDefault();
   
    const order = {
      customerName,
      email,
      phone,
      street,
      city,
      items: Object.keys(cartitems)
        .filter(itemId => cartitems[itemId] > 0)
        .map(itemId => {
          const item = food_list.find(food => food._id === itemId);
          return `${item.name} (${cartitems[itemId]})`;
        }),
      total: gettotalcartamount() + 2,
      date: new Date().toLocaleString(),
      status: 'under review'
    };

  
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([...savedOrders, order]));
    
  
    console.log('Navigating to payment...'); 
    navigate('/payment');
  };











  return (
    <div className='place-order'>
      <div className="place-order-left">
        <h2 className="title">اطلاعات سفارش</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="نام و نام خانوادگی" 
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required 
          />
          <input 
            type="email" 
            placeholder="ایمیل" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="tel" 
            placeholder="شماره تماس" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required 
          />
          <div className="multi-filds">
            <input 
              type="text" 
              placeholder="خیابان" 
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required 
            />
            <input 
              type="text" 
              placeholder="شهر" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required 
            />
          </div>
          <button type="submit">برو به صفحه پرداخت</button>
        </form>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>خلاصه سفارش</h2>
          <div>
            <div className="cart-total-details">
              <p>جمع کل</p>
              <p>ریال{gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>هزینه  کلی</p>
              <p>ریال{gettotalcartamount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>کل</b>
              <b>ریال{gettotalcartamount() === 0 ? 0 : gettotalcartamount() + 2}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;