import React, { useState } from "react"
import ClickableCard from '../../../../ClickableCard'

const clickableCardStyles = {
    boxClassName: 'flex flex-col',
    boxStyle: {
        border: '0.2rem solid #1d5812',
        padding: '0.2rem',
        borderRadius: '2rem',
        backgroundColor: 'rgba(86, 197, 70, 0.5)',
    },
    boxHoverStyle: {
        backgroundColor: 'rgba(86, 197, 70, 0.8)',
    },
    imagedivStyle: {
        width: '100%',
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
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    textStyle: {
        padding: '0.5rem',
        fontSize: '1rem',
        textAlign: 'center',
        width: '100%',
    },
    titledivStyle: {
        display: 'flex',
        alignItems: 'center',
    },
    titleStyle: {
        padding: '0.5rem',
        fontSize: '1.5rem',
        fontFamily: 'KaiTi',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#08331b',
        width: '100%',
    },
}

const ClickableMap = ({ imageUrl, text, title }) => {
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true)
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    const handleDownload = (name, imageUrl) => {
        const link = document.createElement('a')
        link.href = imageUrl
        link.download = `{${name}.png}`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    return (
        <ClickableCard
            imageUrl={imageUrl}
            text={text}
            title={title}
            buttonClick={() => handleDownload(title, imageUrl)}
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
            reversed={false}
        />
    )
}

export default ClickableMap