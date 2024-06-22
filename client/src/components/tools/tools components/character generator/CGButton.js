import React, { useState } from 'react';
import Button from '../../../Button';

const CGButton = ({ label, onClick }) => {
    const buttonStyle = {
        buttonStyle: {
            padding: '0.25rem',
            border: '0.1rem solid darkgreen',
            borderRadius: '1rem',
            minWidth: '8rem',
            fontWeight: 'bold',
            color: '#08331b',
            height: '3rem',
            width: '6rem',
        },
        buttonStyleActive: {
            backgroundImage: 'linear-gradient(to bottom, #478f31, #66ff66)',
        },
        buttonStyleInactive: {
            backgroundImage: 'linear-gradient(to top, #478f31, #66ff66)',
        },
        buttonHoverStyleActive: {
            backgroundImage: 'linear-gradient(to bottom, #60a33e, #8bff8b)',
            color: '#021b0d',
        },
        buttonHoverStyleInactive: {
            backgroundImage: 'linear-gradient(to top, #60a33e, #8bff8b)',
            color: '#021b0d',
        },
    }
    const [isHovered, setIsHovered] = useState(false)
    const [isMouseDown, setIsMouseDown] = useState(false)
    return (
        <Button
            label={label}
            onClick={onClick}
            activeButton={isHovered && isMouseDown}
            buttonStyleActive={{
                ...buttonStyle.buttonStyle,
                ...buttonStyle.buttonStyleActive,
                ...(isHovered && buttonStyle.buttonHoverStyleActive),
            }}
            buttonStyleInactive={{
                ...buttonStyle.buttonStyle,
                ...buttonStyle.buttonStyleInactive,
                ...(isHovered && buttonStyle.buttonHoverStyleInactive),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsMouseDown(true)}
            onMouseUp={() => setIsMouseDown(false)}
        />
    )
}

export default CGButton