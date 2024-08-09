import React from 'react';
import '../../App.css';
import '../../index.css';

const HomeCardsSecondBatch = ({ setCurrentPage, setActiveButton }) => {

    const cardPadding = '1rem';

    // 按下按钮后，激活按钮，从主页选取对应的次级页面
    const buttonClick = (label) => {
        setActiveButton(label);
        setCurrentPage(label);
    }

    return (
        <div className='container flex flex-row' style={{ height: '30%', }}>
            
        </div >
    );
}

export default HomeCardsSecondBatch;