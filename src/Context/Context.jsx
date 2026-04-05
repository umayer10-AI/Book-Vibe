import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [cart, setCart] = useState([])
    const [read, setRead] = useState([])

    return (
        <Data.Provider value={{cart,setCart,read,setRead}}>
            {children}
        </Data.Provider>
    );
};

export default Context;