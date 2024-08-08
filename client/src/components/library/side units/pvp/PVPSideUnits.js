import React, { useState } from "react";
import PVPSideUnitsBar from './PVPSideUnitsBar';
import PVPSideUnitsList from './PVPSideUnitsList';

const PVPSideUnits = () => {
    const [side, setSide] = useState('')
    return (
        <div className="container">
            <div className="container" style={{ padding: '2rem', }}>
                <div className="container flex flex-row"
                    style={{
                        borderRadius: '2rem',
                        padding: '1rem',
                        backgroundColor: 'rgba(244, 255, 150, 0.7)',
                        backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, #b0e13d 50%, transparent 80%)',
                        backgroundSize: '100% 0.3rem', /* 控制虚线的宽度和高度 */
                        backgroundRepeat: 'repeat-y',
                        border: '0.3rem solid #43880f',
                    }}
                >

                    {/* 阵营边栏 */}
                    <div style={{ width: '10%' }}>
                        <PVPSideUnitsBar setSide={setSide} />
                    </div>

                    {/* 单位列表 */}
                    <div style={{ width: '90%' }}>
                        <PVPSideUnitsList side={side} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PVPSideUnits;