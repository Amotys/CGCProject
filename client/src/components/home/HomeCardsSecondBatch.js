import React from 'react';
import ClickableCardSecondBatch from './ClickableCardSecondBatch';
import Worldview from '../../static/images/Worldview.png';
import Race from '../../static/images/Race.png';
import Characters from '../../static/images/Characters.png';
import Geography from '../../static/images/Geography.png';
import NaturalResources from '../../static/images/NaturalResources.png';
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