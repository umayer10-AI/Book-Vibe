import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [cart, setCart] = useState([])
    const [read, setRead] = useState([])
    const [wish, setWish] = useState([])

    return (
        <Data.Provider value={{cart,setCart,read,setRead,wish,setWish}}>
            {children}
        </Data.Provider>
    );
};

export default Context;