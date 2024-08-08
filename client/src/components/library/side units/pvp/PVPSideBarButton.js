import React, { useState } from "react";
import Button from '../../../Button'

const buttonStyles = {
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

const PVPSideBarButton = ({ label, onClick, activeButton }) => {
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
                ...buttonStyles.buttonStyleActive,
                ...buttonStyles.buttonStyle,
                ...(isHovered && buttonStyles.buttonHoverStyleActive),
                ...(isHovered && buttonStyles.buttonHoverStyleActive),
            }}
            buttonStyleInactive={{
                ...buttonStyles.buttonStyleInactive,
                ...buttonStyles.buttonStyle,
                ...(isHovered && buttonStyles.buttonHoverStyleInactive),
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={'flex-1'}
        />
    )
}

export default PVPSideBarButton