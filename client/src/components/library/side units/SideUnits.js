import React from "react";
import AllCharacterComponents from '../../../static/characters/AllCharacterComponents';

const SideUnits = () => {
    const getUnits = (side) => {
        const getUnitTable = (index, unit) => {
            const StateTitleStyle = {
                border: '0.01rem solid darkgreen',
                borderRight: 'none',
                padding: '0.2rem',
                paddingRight: '0',
                textAlign: 'right',
                width: '2.5rem',
            }
            const StateContentStyle = {
                border: '0.01rem solid darkgreen',
                borderLeft: 'none',
                padding: '0.2rem',
                paddingLeft: '0',
                textAlign: 'left',
                width: '2.5rem',
            }
            const getFirstRow = () => (
                <tr key={`library side unit 1strow ${side} ${index}`}>
                    <td style={{ width: '10%' }} rowSpan={3}>
                        <div style={{
                        }}>
                            <img src={unit.iconUrl} alt={unit.name} style={{ borderRadius: '50%', border: '0.1rem solid #1d5812', }} />
                        </div>
                    </td>
                    <td style={{
                        width: '90%',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        paddingLeft: '2.5rem',
                    }} colSpan={17}>{unit.name}</td>
                </tr>
            )
            const className = ''
            const getSecondRow = () => {
                return (
                    <tr key={`library side unit 2ndrow ${side} ${index}`} className="flex flex-row" style={{ width: '100%', justifyContent: 'right' }}>
                        <td className={className} style={StateTitleStyle}>HP：</td>
                        <td className={className} style={StateContentStyle}>{unit.property.health[0] + unit.property.health[1]}</td>
                        <td className={className} style={StateTitleStyle}>MP：</td>
                        <td className={className} style={StateContentStyle}>{unit.property.magic[0] + unit.property.magic[1]}</td>
                        <td className={className} style={StateTitleStyle}>攻：</td>
                        <td className={className} style={StateContentStyle}>{unit.property.attack[0] + unit.property.attack[1]}</td>
                        <td className={className} style={StateTitleStyle}>防：</td>
                        <td className={className} style={StateContentStyle}>{unit.property.defend[0] + unit.property.defend[1]}</td>
                        <td className={className} style={StateTitleStyle}>伤：</td>
                        <td className={className} style={StateContentStyle}>{unit.property.damage[0] + unit.property.damage[1]}</td>
                        <td className={className} style={StateTitleStyle}>移：</td>
                        <td className={className} style={StateContentStyle}>{unit.property.movement[0] + unit.property.movement[1]}</td>
                        <td className={className} style={StateTitleStyle}>先：</td>
                        <td className={className} style={StateContentStyle}>{unit.property.initiative[0] + unit.property.initiative[1]}</td>
                        <td className={className} style={StateTitleStyle}>士：</td>
                        <td className={className} style={StateContentStyle}>{unit.property.morale[0] + unit.property.morale[1]}</td>
                        <td className={className} style={StateTitleStyle}>暴：</td>
                        <td className={className} style={StateContentStyle}>{unit.property.critic[0] + unit.property.critic[1]}</td>
                    </tr>
                )
            }
            const getThirdRow = () => {
                return (
                    <tr key={`library side unit 3rdrow ${side} ${index}`} className="flex flex-row" style={{ width: '100%', justifyContent: 'right' }}>
                        <td className={className} style={StateTitleStyle}>SZ：</td>
                        <td className={className} style={StateContentStyle}>{
                            unit.size[0] === unit.size[1] ? unit.size[0] :
                                `${unit.size[0]}（${unit.size[1]}）`
                        }</td>
                        <td className={className} style={StateTitleStyle}>力：</td>
                        <td className={className} style={StateContentStyle}>{unit.status.strength[0] + unit.status.strength[1]}</td>
                        <td className={className} style={StateTitleStyle}>体：</td>
                        <td className={className} style={StateContentStyle}>{unit.status.constitution[0] + unit.status.constitution[1]}</td>
                        <td className={className} style={StateTitleStyle}>敏：</td>
                        <td className={className} style={StateContentStyle}>{unit.status.agility[0] + unit.status.agility[1]}</td>
                        <td className={className} style={StateTitleStyle}>意：</td>
                        <td className={className} style={StateContentStyle}>{unit.status.willpower[0] + unit.status.willpower[1]}</td>
                        <td className={className} style={StateTitleStyle}>智：</td>
                        <td className={className} style={StateContentStyle}>{unit.status.intelligence[0] + unit.status.intelligence[1]}</td>
                        <td className={className} style={StateTitleStyle}>魔：</td>
                        <td className={className} style={StateContentStyle}>{unit.status.power[0] + unit.status.power[1]}</td>
                        <td className={className} style={StateTitleStyle}>魅：</td>
                        <td className={className} style={StateContentStyle}>{unit.status.appearance[0] + unit.status.appearance[1]}</td>
                        <td className={className} style={StateTitleStyle}>幸：</td>
                        <td className={className} style={StateContentStyle}>{unit.status.luck[0] + unit.status.luck[1]}</td>
                    </tr>
                )
            }
            const getUnitsTraits = () => {
                return (
                    <div key={`library side unit ${side} ${index}`} className="container" style={{ paddingTop: '0.5rem' }}>
                        <table>
                            <tbody>
                                {Object.keys(unit.abilities).map((key, keyindex) => (
                                    <tr key={`library side unit ${side} ${index} trait ${keyindex}`} style={{
                                        fontSize: '0.8rem',
                                    }}>
                                        <td style={{
                                            paddingTop: '0.5rem',
                                            width: '5rem',
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}>{key}：</td>
                                        <td style={{
                                            paddingTop: '0.5rem',
                                        }}>{unit.abilities[key]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
            return (
                <div style={{
                    padding: '0.5rem',
                    color: '#0d3006',
                }}
                    key={`library side unit ${side} ${index}`}
                >
                    <div className="flex flex-col" style={{
                        borderRadius: '2rem',
                        padding: '1rem',
                        backgroundColor: 'rgba(244, 255, 150, 0.7)',
                        backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 20%, #b0e13d 50%, transparent 80%)',
                        backgroundSize: '100% 0.3rem', /* 控制虚线的宽度和高度 */
                        backgroundRepeat: 'repeat-y',
                        border: '0.3rem solid #43880f',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <div>
                            <table>
                                <tbody>
                                    {getFirstRow()}
                                    {getSecondRow()}
                                    {getThirdRow()}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-row">
                            {getUnitsTraits()}
                        </div>
                    </div>
                </div>
            )
        }
        const allUnits = AllCharacterComponents[side] || {}
        return (
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div className="flex flex-col" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '55rem',
                }}>
                    {Object.keys(allUnits).map((key, index) => (
                        getUnitTable(index, allUnits[key])
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div className="container" style={{
            padding: '2rem',
        }}>
            <div className="container flex flex-col" style={{
                backgroundColor: 'rgba(193, 246, 145, 0.5)',
                border: '0.2rem solid #1d5812',
                padding: '1rem',
                borderRadius: '2rem',

            }}>
                <div style={{}}>
                    {getUnits('Templars')}
                    {getUnits('Henges')}
                    {getUnits('Courts')}
                    {getUnits('Legions')}
                    {getUnits('Resistances')}
                    {getUnits('Nebulas')}
                </div>
            </div>
        </div>
    )
}

export default SideUnits;