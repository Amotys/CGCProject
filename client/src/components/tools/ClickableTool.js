// 工具页面显示的工具卡框
import React, { useState } from 'react';
import ClickableCard from '../ClickableCard';
import '../../App.css';
import '../../index.css';

const clickableCardStyles = {
    boxClassName: 'flex flex-row',
    boxStyle: {
        border: '0.2rem solid #1d5812',
        padding: '1rem',
        borderRadius: '2rem',
        backgroundColor: 'rgba(86, 197, 70, 0.2)',
    },
    boxHoverStyle: {
        backgroundColor: 'rgba(86, 197, 70, 0.5)',
    },
    imagedivStyle: {
        width: '40%',
    },
    imageStyle: {
        padding: '1rem',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '2rem',
    },
    textdivStyle: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
    },
    textStyle: {
        padding: '0.5rem',
        fontSize: '1rem',
        fontFamily: 'KaiTi',
        textAlign: 'center',
        width: '100%',
    },
    titledivStyle: {
        width: '20%',
        display: 'flex',
        alignItems: 'center',
    },
    titleStyle: {
        padding: '0.5rem',
        fontSize: '2rem',
        fontFamily: 'KaiTi',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#08331b',
        width: '100%',
    },
}

const ClickableTool = ({ imageUrl, text, title, buttonClick, layoutReversed }) => {
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
            boxClassName={clickableCardStyles.boxClassName}
            boxStyle={{
                ...clickableCardStyles.boxStyle,
                ...(isHovered && clickableCardStyles.boxHoverStyle),
            }}
            imagedivStyle={clickableCardStyles.imagedivStyle}
            imageStyle={clickableCardStyles.imageStyle}
            textdivStyle={clickableCardStyles.textdivStyle}
            textStyle={clickableCardStyles.textStyle}
            titledivStyle={clickableCardStyles.titledivStyle}
            titleStyle={clickableCardStyles.titleStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            reversed={layoutReversed}
        />
    );
}

export default ClickableTool;