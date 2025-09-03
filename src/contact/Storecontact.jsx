
import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const Storecontact = createContext(null);

const StorecontactProvider = (props) => {
    const [cartitems, setcartitem] = useState({});
    const [foodList, setFoodList] = useState(food_list); 

    const addtocart = (itemid) => {
        if (!cartitems[itemid]) {
            setcartitem((prev) => ({ ...prev, [itemid]: 1 }));
        } else {
            setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
        }
    };

    const removefromcart = (itemid) => {
        setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
    };

    const gettotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let iteminfo = foodList.find((product) => product._id === item);
                totalamount += iteminfo.price * cartitems[item];
            }
        }
        return totalamount;
    };

  
    const addFoodItem = (foodItem) => {
        setFoodList((prev) => [...prev, foodItem]);
    };

   
    const removeFoodItem = (foodId) => {
        setFoodList((prev) => prev.filter(item => item._id !== foodId));
    };

    const contactvalue = {
        food_list: foodList,
        cartitems,
        setcartitem,
        addtocart,
        removefromcart,
        gettotalcartamount,
        addFoodItem,
        removeFoodItem
    };

    return (
        <Storecontact.Provider value={contactvalue}>
            {props.children}
        </Storecontact.Provider>
    );
};

export default StorecontactProvider;