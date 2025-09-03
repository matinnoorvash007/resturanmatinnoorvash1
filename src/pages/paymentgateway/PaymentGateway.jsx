import React, { useState } from 'react';
import './PaymentGateway.css';
import { useNavigate } from 'react-router-dom';

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
  
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      
   
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };

  if (paymentSuccess) {
    return (
      <div className="payment-success">
        <h2>پرداخت موفقیت امیز بود!</h2>
        <p>ممنون از انتخاب شما امیدواریم همیشه قسمتی از انتخاب شما باشیم.</p>
        <div className="success-icon">✓</div>
      </div>
    );
  }

  return (
    <div className="payment-gateway">
      <h2>درگاه پرداخت</h2>
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label>شماره حسابتان را وارد کنید</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="6034 5678 9012 3456"
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>تاریخ انقضا:</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/Y"
              required
            />
          </div>
          
          <div className="form-group">
            <label>CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="2244"
              required
            />
          </div>
        </div>
        
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? 'درحال پردازش..' : 'payment'}
        </button>
      </form>
    </div>
  );
};

export default PaymentGateway