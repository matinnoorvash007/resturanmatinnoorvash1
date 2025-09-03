// 
import React, { useState, useContext } from 'react';
import './Adminpanel.css';
import { Storecontact } from '../../contact/Storecontact';

const Adminpanel = () => {
    const { food_list, addFoodItem, removeFoodItem } = useContext(Storecontact);
    const [newFood, setNewFood] = useState({
        _id: '',
        name: '',
        image: '',
        price: 0,
        description: '',
        category: ''
    });
    const [activeTab, setActiveTab] = useState('orders'); // 'orders' یا 'foods'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFood(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddFood = (e) => {
        e.preventDefault();
        if (!newFood._id) {
            newFood._id = Math.random().toString(36).substr(2, 9);
        }
        addFoodItem(newFood);
        setNewFood({
            _id: '',
            name: '',
            image: '',
            price: 0,
            description: '',
            category: ''
        });
    };


    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || []);

    const updateOrderStatus = (orderIndex, newStatus) => {
        const updatedOrders = [...orders];
        updatedOrders[orderIndex].status = newStatus;
        setOrders(updatedOrders);
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
    };

    return (
        <div className="admin-container">
            <h2 className="admin-title">مدیریت سیستم</h2>
            
            <div className="admin-tabs">
                <button 
                    className={activeTab === 'orders' ? 'active' : ''}
                    onClick={() => setActiveTab('orders')}
                >
                   مدیریت سفارشات
                </button>
                <button 
                    className={activeTab === 'foods' ? 'active' : ''}
                    onClick={() => setActiveTab('foods')}
                >
                   مدیریت منو
                </button>
            </div>

            {activeTab === 'orders' && (
                <div className="order-management">
                    {orders.length === 0 ? (
                        <div className="empty-orders">no order</div>
                    ) : (
                        <div className="order-list">
                            {orders.map((order, index) => (
                                <div className="order-card" key={index} data-status={order.status}>
                                    <p><strong>نام فروشنده:</strong> {order.customerName}</p>
                                    <p><strong>شماره تماس:</strong> {order.phone}</p>
                                    <p><strong>ادرس:</strong> {order.street}, {order.city}</p>
                                    <p><strong>محصولات:</strong> {order.items.join(', ')}</p>
                                    <p><strong>جمع:</strong> ${order.total}</p>
                                    <p><strong>تاریخ:</strong> {order.date}</p>
                                    <div className="status-control">
                                        <label>وضعیت::</label>
                                        <select 
                                            value={order.status} 
                                            onChange={(e) => updateOrderStatus(index, e.target.value)}
                                        >
                                            <option value="under review">دیده شد</option>
                                            <option value="preparing">در حال پردازش</option>
                                            <option value="on the way">ارسال</option>
                                            <option value="delivered">ارسال شده</option>
                                        </select>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'foods' && (
                <div className="food-management">
                    <div className="add-food-form">
                        <h3>اضافه کردن غذای جدید</h3>
                        <form onSubmit={handleAddFood}>
                            <div className="form-group">
                                <label>شمارنده غذا:</label>
                                <input
                                    type="text"
                                    name="_id"
                                    value={newFood._id}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>نام غذا:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newFood.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>ادرس عکس:</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={newFood.image}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>قیمت:</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={newFood.price}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>توضیحات:</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={newFood.description}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>دسته بندی:</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={newFood.category}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button type="submit">اضافه کردن غذا</button>
                        </form>
                    </div>

                    <div className="food-list">
                        <h3>لیست غذا ها</h3>
                        {food_list.length === 0 ? (
                            <p>غذایی وجود ندارد</p>
                        ) : (
                            <div className="food-grid">
                                {food_list.map(food => (
                                    <div className="food-item-card" key={food._id}>
                                        <img src={food.image} alt={food.name} className="food-image" />
                                        <div className="food-details">
                                            <h4>{food.name}</h4>
                                            <p>{food.description}</p>
                                            <p>قیمت: ریال{food.price}</p>
                                            <p>دسته بندی: {food.category}</p>
                                        </div>
                                        <button 
                                            className="remove-btn"
                                            onClick={() => removeFoodItem(food._id)}
                                        >
                                           حذف از لیست غذا ها
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Adminpanel;