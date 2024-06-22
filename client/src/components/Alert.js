// 警告窗口，替代alert
import React, { useState } from 'react'
import Button from './Button'

const defaultStyle = {
    background: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,                               // 位于其他元素之上
    },
    messageWindow: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        zIndex: 1001,                              // 位于背景之上
    },
    message: {
        textAlign: 'center',
    },
}

const AlertButton = ({ label, onClick }) => {
    const buttonStyle = {
        basic: {},
        active: {},
        inactive: {},
        activeH: {},
        inactiveH: {},
    }
    const [isHovered, setIsHovered] = useState(false)
    const [isMouseDown, setIsMouseDown] = useState(false)
    return (
        <Button label={label} onClick={onClick}
            activeButton={isHovered && isMouseDown} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsMouseDown(true)} onMouseUp={() => setIsMouseDown(false)}
            buttonStyleActive={{
                ...buttonStyle.basic,
                ...buttonStyle.active,
                ...(isHovered && buttonStyle.activeH),
            }}
            buttonStyleInactive={{
                ...buttonStyle.basic,
                ...buttonStyle.inactive,
                ...(isHovered && buttonStyle.inactiveH),
            }} />
    )
}

const Alert = ({
    label,
    onClick,
    style = defaultStyle,
    isVisible,
    setIsVisible,
    twoOptions,
}) => {
    if (!isVisible) { return null }
    return (
        <div style={style.background}>
            <div style={style.messageWindow}>
                <div style={style.message}>{label}</div>
                {twoOptions ?
                    <div className='flex flex-row'>
                        <div style={{ width: '50%', display: 'flex', justifyContent: 'center', }}>
                            <AlertButton label={'是'} onClick={onClick} />
                        </div>
                        <div style={{ width: '50%', display: 'flex', justifyContent: 'center', }}>
                            <AlertButton label={'否'} onClick={() => setIsVisible(false)} />
                        </div>
                    </div> :
                    <div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
                            <AlertButton label={'好'} onClick={onClick} />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Alert