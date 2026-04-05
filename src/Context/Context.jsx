import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [cart, setCart] = useState([])

    return (
        <Data.Provider value={{cart,setCart}}>
            {children}
        </Data.Provider>
    );
};

export default Context;