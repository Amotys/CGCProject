import React from 'react';
import '../App.css';
import '../index.css';

const Button = ({
    label,
    onClick,
    activeButton,
    buttonStyleActive,
    buttonStyleInactive,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    className,
}) => {
    return (
        <button
            onClick={onClick}
            className={className}
            style={activeButton ? buttonStyleActive : buttonStyleInactive}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
        >
            {label}
        </button>
    );
};

export default Button;
