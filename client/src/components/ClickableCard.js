// 可点击的卡框
import React from 'react';
import '../App.css';
import '../index.css';

function ClickableCard({
    imageUrl,
    text,
    title,
    buttonClick,
    boxStyle,
    imagedivStyle,
    imageStyle,
    textdivStyle,
    textStyle,
    titledivStyle,
    titleStyle,
    onMouseEnter,
    onMouseLeave,
    boxClassName,
    reversed,
}) {
    return (
        <div
            className={`container ${boxClassName}`}
            style={boxStyle}
            onClick={buttonClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {reversed ? (
                <>
                    <div style={titledivStyle}>
                        <div style={titleStyle}>{title}</div>
                    </div>

                    <div style={textdivStyle}>
                        <div style={textStyle}>{text}</div>
                    </div>

                    <div style={imagedivStyle}>
                        <img src={imageUrl} alt="图片" style={imageStyle} />
                    </div>
                </>
            ) : (
                <>
                    <div style={imagedivStyle}>
                        <img src={imageUrl} alt="图片" style={imageStyle} />
                    </div>

                    <div style={textdivStyle}>
                        <div style={textStyle}>{text}</div>
                    </div>

                    <div style={titledivStyle}>
                        <div style={titleStyle}>{title}</div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ClickableCard;