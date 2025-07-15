import React, { createContext, useState } from 'react';
import { food_items } from '../../food';

export const dataContext = createContext();

function UserContext({ children }) {
    let [cate, setCate] = useState(food_items)
    let [input, setInput] = useState("");
    let [showcart,setShowCart]=useState(false)

    const data = {
        input,
        setInput,
        cate,
        setCate,
        showcart,
        setShowCart
    };

    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    );
}

export default UserContext;
