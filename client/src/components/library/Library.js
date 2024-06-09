// 百科

import React from 'react';
import SideUnits from './side units/SideUnits';

const Library = () => {
    return (
        <div className='container flex flex-col'>
            <SideUnits />
            <div style={{
                padding: '2rem',
            }}>
                百科文本
            </div>
        </div>
    )

}

export default Library;