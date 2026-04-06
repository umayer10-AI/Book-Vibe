import React from 'react';
import Linechart from './Chart/LineChart';
import Pie from './Chart/Pie';


const PagesRead = () => {
    return (
        <div className='max-w-[80%] mx-auto'> 
            <div>
                <Linechart></Linechart>
                <Pie></Pie>
            </div>
        </div>
    );
};

export default PagesRead;