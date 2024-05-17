// 应用于主页的按钮
import React, { useState } from 'react';
import Button from './components/Button';

const appButtonStyles = {
    buttonStyle: {
        fontSize: '1.5rem',
        color: '#08331b',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        fontFamily: 'KaiTi',
        fontWeight: 'bold',
    },
    buttonStyleActive: {
        backgroundImage: 'linear-gradient(to bottom, #00994c, #66ff66)',
    },
    buttonStyleInactive: {
        backgroundImage: 'linear-gradient(to top, #00994c, #66ff66)',
    },
    buttonHoverStyleActive: {
        backgroundImage: 'linear-gradient(to bottom, #0bbb63, #8bff8b)',
        color: '#021b0d',
    },
    buttonHoverStyleInactive: {
        backgroundImage: 'linear-gradient(to top, #0bbb63, #8bff8b)',
        color: '#021b0d',
    },
}

const AppButton = ({label, onClick, activeButton}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <Button
            label={label}
            onClick={onClick}
            activeButton={activeButton}
            buttonStyleActive={{
                ...appButtonStyles.buttonStyle,
                ...appButtonStyles.buttonStyleActive,
                ...(isHovered && appButtonStyles.buttonHoverStyleActive),
            }}
            buttonStyleInactive={{
                ...appButtonStyles.buttonStyle,
                ...appButtonStyles.buttonStyleInactive,
                ...(isHovered && appButtonStyles.buttonHoverStyleInactive),
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={'flex-1'}
        />
    );
}

export default AppButton;