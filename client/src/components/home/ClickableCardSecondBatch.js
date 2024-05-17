// 主页显示的第一批卡框
import React from 'react';
import ClickableCard from '../ClickableCard';
import '../../App.css';
import '../../index.css';

const firstCardBatchStyles = {
    boxStyle: {
        // 框的背景颜色和悬浮颜色在index.css里定义
        border: '0.2rem solid #1d5812',
        padding: '1rem',
        borderRadius: '2rem',
    },
    imageStyle: {
        padding: '1rem',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '2rem',
    },
    textStyle: {
        padding: '0.5rem',
        fontSize: '1rem',
        fontFamily: 'KaiTi',
        textAlign: 'center',
        borderBottom: '1px solid #1d5812',
    },
    titleStyle: {
        padding: '0.5rem',
        fontSize: '2rem',
        fontFamily: 'KaiTi',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#08331b',
    },
}

const ClickableCardSecondBatch = ({ imageUrl, text, title, buttonClick }) => {
    return (
        <ClickableCard
            imageUrl={imageUrl}
            text={text}
            title={title}
            buttonClick={buttonClick}
            boxStyle={firstCardBatchStyles.boxStyle}
            imageStyle={firstCardBatchStyles.imageStyle}
            textStyle={firstCardBatchStyles.textStyle}
            titleStyle={firstCardBatchStyles.titleStyle}
        />
    );
}

export default ClickableCardSecondBatch;