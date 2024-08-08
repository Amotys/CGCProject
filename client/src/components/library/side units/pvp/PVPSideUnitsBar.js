import React, { useState } from "react";
import SideImage from '../../../../static/side/SideImage'

const PVPSideUnitsBar = ({ setSide }) => {
    const validSides = ['Court', 'Inari', 'Fortaleza']
    return (
        <div style={{
            borderRight: '0.1rem solid #43880f',
        }}>
            {Object.entries(SideImage).map(([key, value], index) => (
                validSides.includes(key) ?
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                        key={`pvp side unit bar ${key}`}
                    >
                        <div style={{
                            width: '80%',
                            padding: '0.5rem',
                        }}>
                            <img style={{
                                border: '0.3rem solid #43880f',
                                borderRadius: '50%',
                                cursor: 'pointer',
                            }} src={value}
                                onClick={() => setSide(key)}
                            />
                        </div>
                    </div>
                    : <div key={`pvp side unit bar ${key}`}></div>
            ))}
        </div>
    )
}

export default PVPSideUnitsBar