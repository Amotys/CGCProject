// 应用于主页的按钮
import React, { useState } from 'react';
import Button from '../Button';

const appButtonStyles = {
    buttonStyle: {
        color: '#08331b',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        fontFamily: 'KaiTi',
        fontWeight: 'bold',
        border: '0.1rem solid #485812',
        width: '100%',
    },
    buttonStyleActive: {
        backgroundImage: 'linear-gradient(to left, #839e44, #e0eb88)',
    },
    buttonStyleInactive: {
        backgroundImage: 'linear-gradient(to right, #839e44, #e0eb88)',
    },
    buttonHoverStyleActive: {
        backgroundImage: 'linear-gradient(to left, #89b91b, #eefa8f)',
        color: '#021b0d',
    },
    buttonHoverStyleInactive: {
        backgroundImage: 'linear-gradient(to right, #89b91b, #eefa8f)',
        color: '#021b0d',
    },
}

const AppButton = ({label, onClick, characterActiveButton}) => {
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
            activeButton={characterActiveButton}
            buttonStyleActive={{
                ...appButtonStyles.buttonStyleActive,
                ...appButtonStyles.buttonStyle,
                ...(isHovered && appButtonStyles.buttonHoverStyleActive),
                ...(isHovered && appButtonStyles.buttonHoverStyleActive),
            }}
            buttonStyleInactive={{
                ...appButtonStyles.buttonStyleInactive,
                ...appButtonStyles.buttonStyle,
                ...(isHovered && appButtonStyles.buttonHoverStyleInactive),
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={'flex-1'}
        />
    );
}

export default AppButton;