// 主页显示的第一批卡框
import React, { useState } from 'react';
import ClickableCard from '../ClickableCard';
import '../../App.css';
import '../../index.css';

const firstCardBatchStyles = {
    boxStyle: {
        border: '0.2rem solid #1d5812',
        padding: '1rem',
        borderRadius: '2rem',
        backgroundColor: 'rgba(193, 246, 145, 0.6)',
    },
    boxHoverStyle: {
        backgroundColor: 'rgba(193, 246, 145, 0.75)',
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

const ClickableCardFirstBatch = ({ imageUrl, text, title, buttonClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <ClickableCard
            imageUrl={imageUrl}
            text={text}
            title={title}
            buttonClick={buttonClick}
            boxStyle={{
                ...firstCardBatchStyles.boxStyle,
                ...(isHovered && firstCardBatchStyles.boxHoverStyle),
            }}
            imageStyle={firstCardBatchStyles.imageStyle}
            textStyle={firstCardBatchStyles.textStyle}
            titleStyle={firstCardBatchStyles.titleStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
}

export default ClickableCardFirstBatch;