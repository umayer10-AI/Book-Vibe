import React, { createContext, useState } from 'react';
import { getAllReadlistLocalDB, getAllWishlistLocalDB } from '../component/utils/loaclDb';

export const Data = createContext()

const Context = ({children}) => {

    const [cart, setCart] = useState([])
    const [read, setRead] = useState(() => getAllReadlistLocalDB())
    const [wish, setWish] = useState(() => getAllWishlistLocalDB())
    const [s, setS] = useState('')

    // useEffect(() => {
    //      const getReadList = getAllReadlistLocalDB()
    //      console.log(getReadList)
    //      setRead(getReadList)
    // },[])

    return (
        <Data.Provider value={{cart,setCart,read,setRead,wish,setWish,s,setS}}>
            {children}
        </Data.Provider>
    );
};

export default Context;