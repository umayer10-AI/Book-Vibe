import React, { useContext } from 'react';
import InformationCart from './InformationCart';
import { Data } from '../Context/Context';
import { useNavigate } from 'react-router';


const Information = () => {

    const {cart} = useContext(Data)
    const navigate = useNavigate()

    if(!cart){
        return <span className="loading loading-spinner loading-2xl"></span>
    }

    return (
        <div>
            <button onClick={() => navigate('/')} className='btn btn-error absolute left-8'>Back</button>
            {
                cart.length === 0 ?
                <div>
                    <h2 className='text-center text-4xl font-bold my-20'>No Details Available</h2>
                </div>
                : <InformationCart></InformationCart>
            }
        </div>
    );
};

export default Information;